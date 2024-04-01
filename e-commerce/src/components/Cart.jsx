import React, { useEffect, useState } from 'react'
import styles from "../css/Cart.module.css"
import def from "../assets/img/1.jpg"
import { MdDelete } from "react-icons/md";
import removeIcon from "../assets/remove-outline.svg"
import addIcon from "../assets/add-outline.svg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem, minusCartItem, setCartItem } from '../redusers/Cart.slice';



function Cart() {
    const { cart, countCartItem, price } = useSelector(state => state.cart)

    console.log(`price - ${price}`)

    const dispatch = useDispatch()


    console.log(`Carts = ${cart.length} countCartItem = ${countCartItem.length} ${cart}`)


    return (
        <div className={styles.your_cart}>
            <h1 className={styles.cart_head}>Your Cart</h1>

            {cart.length > 0 ?
                <div className={styles.total_carts}>
                    <div className={styles.carts}>
                        {cart.map(item => (
                            <div key={item.id} className={styles.cart}>

                                <div className={styles.cart_border}>
                                    <div className={styles.cart_image}>
                                        <img width={'120px'} height={'120px'} className={styles.cart_img} src={item.image} alt="" />
                                    </div>

                                    <div className={styles.cart_info}>

                                        <div className={styles.cart_name_ico}>
                                            <span className={styles.cart_name}>{item.name}</span>
                                            <MdDelete onClick={() => dispatch(deleteCartItem(item))} className={styles.delete_ico} color='#FF3333' />
                                        </div>

                                        <div className={styles.cart_size}>
                                            <span className={styles.size}>Size: {item.sizes}</span>
                                        </div>

                                        <div className={styles.cart_available}>
                                            <span>Available: {item.count}</span>
                                        </div>

                                        <div className={styles.cart_price_ico}>
                                            <span className={styles.cart_price}>${item.price}</span>

                                            <div className={styles.available}>
                                                <img onClick={() => countCartItem.filter(Item => item.id === Item.id).length > 1 ? dispatch(minusCartItem(item)) : ""} className={styles.minus} src={removeIcon} alt="remove sign" />

                                                <span>{countCartItem.filter(Item => item.id === Item.id).length}</span>

                                                <img onClick={() => dispatch(setCartItem(item))} className={styles.plus} src={addIcon} alt="Add sign" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className={styles.order}>
                            <span className={styles.order_head}>Order Summary</span>

                            <div className={styles.order_price}>
                                <span className={styles.order_text}>Subtotal</span>
                                <span className={styles.order_subtotal_price}>${price}</span>
                            </div>

                            <div className={styles.order_price}>
                                <span className={styles.order_text}>Delivery</span>
                                <span className={styles.order_delivery_price}>Free</span>
                            </div>


                            <div className={styles.order_price}>
                                <span className={styles.order_text}>Promotion</span>
                                <span className={styles.order_promotion}>Learn more.</span>
                            </div>

                            <div className={styles.border}></div>

                            <div className={styles.order_price}>
                                <span className={styles.order_text}>Total</span>
                                <span className={styles.order_total_price}>${price}</span>
                            </div>


                            <div className={styles.promo}>
                                <input className={styles.promo_code} type="text" placeholder='Add promo code' />
                                <button className={styles.promo_btn}>Apply</button>
                            </div>

                            <div className={styles.checkout}>
                                <button>Go To Checkout <ArrowForwardIcon fontSize='small' /></button>
                            </div>
                        </div>

                    </div>

                : <h1 className={styles.error}>You Do Not Have Products In Your Cart!</h1>}

        </div >
    )
}

export default Cart