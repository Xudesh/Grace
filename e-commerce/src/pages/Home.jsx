import React, { useEffect } from 'react'
import styles from "../css/Home.module.css"
import { IoStarSharp } from "react-icons/io5";
import arrowForward from "../assets/arrow-forward-outline.svg"
import arrowBack from "../assets/arrow-back-outline.svg"
import { Link } from 'react-router-dom';
import { getProduct } from '../Axios/axios';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { setSelectedProduct } from '../redusers/detail.slice';



function Home() {

    const state = useSelector(state => state.product)


    console.log(state.products)


    const dispatch = useDispatch()


    useEffect(() => {
        getProduct("https://xudesh.pythonanywhere.com/?format=json", dispatch)
    }, [])
    return (
        <div className={styles.Home}>

            {/* Advertisement Section */}
            <section className={styles.preview}>
                <h1 className={styles.title}>Le secret d'une - <br /> allure irresistible</h1>
            </section>


            {/* New Arrivals Product Section */}
            <section id='newarrivals' className={styles.new_arrivals}>
                <h2>New Arrivals</h2>

                <div className={styles.product_cards}>

                    {state.products.map(item => (
                        <div className={styles.product_card} key={item.id}>
                            <img src={item.image} alt={item.name} />

                            <div className={styles.card_info}>
                                <Link to={`/detail/${item.id}`} onClick={() => { dispatch(setSelectedProduct(item)) }} className={styles.card_name}>{item.name}</Link>

                                <div className={styles.review_stars}>
                                    <IoStarSharp color='#FFC633' />
                                    <IoStarSharp color='#FFC633' />
                                    <IoStarSharp color='#FFC633' />
                                    <IoStarSharp color='#FFC633' />
                                    <IoStarSharp color='#FFC633' />
                                    <span className={styles.star}>5/5</span>
                                </div>

                                <div className={styles.price_discount}>
                                    <p className={styles.price}>${item.price}</p>
                                    <s className={styles.discount}>$240</s>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                <div className={styles.viewall}>
                    <button className={styles.viewBtn}>View All</button>
                </div>
            </section>


            {/* Flash Sales Product Section */}
            <section id='flashsales' className={styles.flash_sales}>
                <h2>Flash Sales</h2>

                <div className={styles.product_cards}>
                    <div className={styles.product_card}>
                        <img className={styles.product_img} src="https://cdn-images.farfetch-contents.com/20/18/88/57/20188857_50479126_1000.jpg" alt="" />

                        <div className={styles.card_info}>
                            <p className={styles.card_name}>T-SHIRT WITH TAPE DETAILS</p>

                            <div className={styles.review_stars}>
                                <IoStarSharp color='#FFC633' />
                                <IoStarSharp color='#FFC633' />
                                <IoStarSharp color='#FFC633' />
                                <IoStarSharp color='#FFC633' />
                                <IoStarSharp color='#FFC633' />
                                <span className={styles.star}>5/5</span>
                            </div>

                            <div className={styles.price_discount}>
                                <p className={styles.price}>$120</p>
                                <s className={styles.discount}>$240</s>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles.viewall}>
                    <button className={styles.viewBtn}>View All</button>
                </div>
            </section>


            {/* Comment Section */}
            <section className={styles.comments}>
                <h1>OUR HAPPY CUSTOMERS</h1>

                <div className={styles.arrows}>
                    <img className={styles.arrowBack} src={arrowBack} alt="" />
                    <img className={styles.arrowForward} src={arrowForward} alt="" />
                </div>


                <div className={styles.comment_card}>
                    <div className={styles.comment_review}>
                        <div className={styles.review_stars}>
                            <IoStarSharp color='#FFC633' />
                            <IoStarSharp color='#FFC633' />
                            <IoStarSharp color='#FFC633' />
                            <IoStarSharp color='#FFC633' />
                            <IoStarSharp color='#FFC633' />
                        </div>

                        <div className={styles.verified}>
                            <p className={styles.comment_author}>Sarah M.</p>
                            <img className={styles.checkmark} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" alt="" />
                        </div>


                        <p className={styles.comment_body}>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    </div>


                    <div className={styles.comment_review}>
                        <div className={styles.review_stars}>
                            <IoStarSharp color='#FFC633' />
                            <IoStarSharp color='#FFC633' />
                            <IoStarSharp color='#FFC633' />
                            <IoStarSharp color='#FFC633' />
                            <IoStarSharp color='#FFC633' />
                        </div>

                        <div className={styles.verified}>
                            <p className={styles.comment_author}>Alex K.</p>
                            <img className={styles.checkmark} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" alt="" />
                        </div>


                        <p className={styles.comment_body}>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                    </div>




                    <div className={styles.comment_review}>
                        <div className={styles.review_stars}>
                            <IoStarSharp color='#FFC633' />
                            <IoStarSharp color='#FFC633' />
                            <IoStarSharp color='#FFC633' />
                            <IoStarSharp color='#FFC633' />
                            <IoStarSharp color='#FFC633' />
                        </div>

                        <div className={styles.verified}>
                            <p className={styles.comment_author}>Alex K.</p>
                            <img className={styles.checkmark} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" alt="" />
                        </div>


                        <p className={styles.comment_body}>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                    </div>



                    <div className={styles.comment_review}>
                        <div className={styles.review_stars}>
                            <IoStarSharp color='#FFC633' />
                            <IoStarSharp color='#FFC633' />
                            <IoStarSharp color='#FFC633' />
                            <IoStarSharp color='#FFC633' />
                            <IoStarSharp color='#FFC633' />
                        </div>

                        <div className={styles.verified}>
                            <p className={styles.comment_author}>Alex K.</p>
                            <img className={styles.checkmark} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" alt="" />
                        </div>


                        <p className={styles.comment_body}>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home