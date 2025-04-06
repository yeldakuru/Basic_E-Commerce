import React, { useState } from 'react';
import '../css/Header.css';
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';

function Header() {
    const [theme, setTheme] = useState(false);
    const [searchTerm, setSearchTerm] = useState(""); // Arama terimi
    const [showDropdown, setShowDropdown] = useState(false); // Dropdown görünürlük
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { products: allProducts } = useSelector((store) => store.product); // Tüm ürünleri al
    const { products: basketProducts } = useSelector((store) => store.basket); // Sepetteki ürünleri al

    const changeTheme = () => {
        const root = document.getElementById("root");

        if (theme) {
            root.style.backgroundColor = "#181818";
            root.style.color = "#fff";
        } else {
            root.style.backgroundColor = "#fff";
            root.style.color = "#181818";
        }
        setTheme(!theme);
    };

    // Arama terimi değiştikçe dropdown menüyü göster
    const filteredProducts = allProducts.filter((product) =>
        product.title.toLowerCase().match(`\\b${searchTerm.toLowerCase()}\\b`) // Tam kelime eşleşmesi
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='flex-row' onClick={() => navigate("/")}>
                <img className='logo' src="./src/images/logo.png" />
                <p className='logo-text'>YELDA</p>
            </div>

            <div className='flex-row' style={{ position: 'relative' }}>
                <input
                    className='search-input'
                    type='text'
                    placeholder='Search for something'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setShowDropdown(true)} // Arama kutusuna odaklandığında dropdown'ı aç
                    onBlur={() => setShowDropdown(false)} // Arama kutusundan çıktığında dropdown'ı kapat
                />

                {showDropdown && searchTerm && (
                    <div style={{
                        position: 'absolute',
                        top: '35px', left: '0',
                        width: '100%',
                        backgroundColor: '#fff',
                        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
                        zIndex: '1000',
                        maxHeight: '200px',
                        overflowY: 'auto',
                        borderRadius: '5px'
                    }}>
                        <ul style={{ margin: 0, padding: '10px' }}>
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product) => (
                                    <li key={product.id}
                                        style={{
                                            padding: '8px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                        onClick={() => navigate(`/product/${product.id}`)}>
                                        <img src={product.image} alt={product.title} style={{ width: '40px', height: '40px', marginRight: '10px' }} />
                                        {product.title}
                                    </li>
                                ))
                            ) : (
                                <li style={{ padding: '8px', color: 'red' }}>
                                    No product found
                                </li>
                            )}
                        </ul>
                    </div>
                )}

                <div>
                    {theme ? <FaMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />}
                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={basketProducts.length} color="error">
                        <CiShoppingBasket className='icon' />
                    </Badge>
                </div>
            </div>
        </div>
    );
}

export default Header;
