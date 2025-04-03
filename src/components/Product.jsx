import React from 'react'
import '../css/Product.css'
function Product({ product }) {
    const { id, price, image, title, description } = product;
    console.log(product)

    return (
        <div className='card'>
            <img className='image' src={image} alt="" />
            <div >
                <p style={{ textAlign: 'center', height: '30px' }}>{title}</p>
                <h3 style={{ textAlign: 'center' }}>{price}₺</h3>
            </div>

            <div className='flex-row'>
                <button className='detail-button'>Go To Details</button>
            </div>
        </div>
    )
}

export default Product