import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function Slide() {
    const { products, loading } = useSelector((state) => state.product);

    if (loading) return <p>Loading carousel...</p>;
    if (!products || products.length === 0) return <p>No images to display</p>;

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            {/* Indicators */}
            <div className="carousel-indicators">
                {products.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-current={index === 0 ? 'true' : undefined}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Slides */}
            <div className="carousel-inner">
                {products.map((product, index) => (
                    <div key={product.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img src={product.image} className="d-block w-100" alt={product.title} style={{ height: '400px', objectFit: 'contain' }} />
                        <div className="carousel-caption d-none d-md-block" >

                        </div>
                        <h5 style={{ color: "rgb(87, 87, 87)", marginTop: "30px", textAlign: "center" }}>{product.title}</h5>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" style={{
                    backgroundColor: "gray",
                    borderRadius: "50%",
                    padding: "20px",
                    backgroundSize: "70% 70%"
                }} aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" style={{
                    backgroundColor: "gray",
                    borderRadius: "50%",
                    padding: "20px",
                    backgroundSize: "70% 70%"
                }} aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slide;
