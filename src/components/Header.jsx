import { useState, react } from 'react';
import '../css/Header.css';
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";


function Header() {
    const [theme, setTheme] = useState(false);
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
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='flex-row'>

                <img className='logo' src="./src/images/logo.png" />
                <p className='logo-text'>YELDA</p>

            </div>
            <div className='flex-row'>
                <input className='search-input' type="text" placeholder='search for something' />
                <div >
                    {
                        theme ? <FaMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />
                    }


                    <CiShoppingBasket className='icon' />
                </div>

            </div>


        </div>
    )
}

export default Header