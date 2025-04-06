import React from 'react'
import '../css/Product.css';
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
    const { id, price, image, title, description } = product;

    const navigate = useNavigate();

    return (
        <div className='card'>
            <img className='image' src={image} alt="" />
            <div>
                <p style={{
                    marginTop: "30px",
                    paddingRight: "5px",
                    paddingLeft: "5px",
                    textAlign: 'center',
                    display: 'block',
                    overflow: 'hidden',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    textOverflow: 'ellipsis',
                    height: '48px',
                    lineHeight: '24px'
                }}>{title}</p>

                <h3 style={{ marginTop: "30px", textAlign: 'center' }}>{price}₺</h3>
            </div>

            <div className='flex-row'>
                <button onClick={() => navigate("/product-details/" + id)} className='detail-button'>Go To Details</button>
            </div>
        </div>
    )
}

export default Product