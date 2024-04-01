import React, { useState } from 'react'
import styles from "../css/Header.module.css"
import logo from "../../public/logo-transparent-svg.svg"
import search_icon from "../assets/search-outline.svg"
import cart_icon from '../assets/cart-outline.svg'
import person_icon from "../assets/person-circle-outline.svg"
import menuIcon from "../assets/menu-outline.svg"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Header() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar)

  const {cart} = useSelector(state => state.cart)

  return (
    <header className={styles.header}>

        {/* Header Logo Section  */}
        <div className={styles.logo}>

            <button id='toggle-bar' onClick={showSidebar} className={sidebar ? styles.logo_menu : styles.logo_menu_deg}>
              <img className={sidebar ? styles.logo_menu_img : styles.logo_menu_img_deg} src={menuIcon} alt="Menu" />
            </button>

            <a href="/">
              <img alt='logo' src={logo} />
            </a>

        </div>


        {/* Header Navbar Section */}
        <div className={sidebar ? styles.menu : styles.menu_active}>
          <ul className={styles.menu_ul}>

            <li className={styles.menu_li}>
              <a className={styles.menu_link} href="#">Shop</a>
            </li>


            <li className={styles.menu_li}>
              <a className={styles.menu_link} href="#flashsales">Flash Sales</a>
            </li>


            <li className={styles.menu_li}>
              <a className={styles.menu_link} href="#newarrivals">New Arrivals</a>
            </li>

            <li className={styles.menu_li}>
              <a className={styles.menu_link} href="#">Products</a>
            </li>


          </ul>
        </div>

        {/* Header Search Section */}
        <div className={styles.search}>
          <button className={styles.btn}><img className={styles.search_icon} src={search_icon} alt="" /></button>
          <input type="text" placeholder='Search for products...' maxLength="86" />
        </div>


        {/* Header Personal Details Section */}
        <div className={styles.icons}>
          <div className={styles.cart_icon}>
            <div className={styles.count}>{cart.length}</div>
            <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
          </div>

          <div className={styles.person_icon}>
            <img src={person_icon} alt="cart" />
          </div>
        </div>
        
    </header>
  )
}

export default Header