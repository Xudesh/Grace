import React, {useEffect, useState} from 'react'
import styles from "../css/Detail.module.css"
import main_img from "../assets/img/1.jpg"
import secondry_img1 from "../assets/img/2.png"
import secondry_img2 from "../assets/img/3.png"
import removeIcon from "../assets/remove-outline.svg"
import addIcon from "../assets/add-outline.svg"
import filterIcon from "../assets/filter-outline.svg"
import { IoStarSharp } from "react-icons/io5";
import first from "../assets/img/1.jpg"
import { useDispatch, useSelector } from 'react-redux'
import { getDetail, getProduct } from '../Axios/axios'
import { setCartItem } from '../redusers/Cart.slice'
import Cart from '../components/Cart'
import { useParams } from 'react-router-dom'



function Detail() {

  const {detail} = useSelector(state => state.detail)


  const dispatch = useDispatch();

  const params = useParams();


  useEffect(() => {
    getDetail(`http://127.0.0.1:8000/1/`, dispatch)
  }, [])

  return (
    <div className={styles.detail}>

        <section  className={styles.card_detail}>

          <div className={styles.card_detail_images}>

            <div className={styles.secondary_images}>
              <img className={styles.secondary_img} width={'200px'} src={secondry_img1} alt="" />
              <img className={styles.secondary_img} width={'200px'} src={secondry_img2} alt="" />
            </div>

            <div className={styles.main_image}>
              <img className={styles.main_img} width={'200px'} src={detail.image} alt="" />
            </div>

          </div>

          <div className={styles.card_detail_info}>

            <div className={styles.name}>
              <p>{detail.name}</p>
            </div>

            <div className={styles.review}>
              4.5/5
            </div>

            <div className={styles.price_discount}>
              {detail.price }
              <s className={styles.real_price}>${detail.price}</s>
              {detail.discount? <span className={styles.discount}>{detail.discount}%</span> : ""}
            </div>

            <div className={styles.about}>
              <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
            </div>

            <div className={styles.sizes}>
              <span className={styles.text}>Choose Size</span>

              <div className={styles.select_size}>

                <span>Small</span>
                <span className={styles.active}>Medium</span>
                <span>Large</span>
                <span>X-Large</span>

              </div>

              <div className={styles.order}>
                <div className={styles.available}>

                  <img className={styles.minus} src={removeIcon} alt="Minus sign" />

                  <span>1</span>

                  <img className={styles.plus} src={addIcon} alt="Add sign" />

                </div>
                <div className={styles.buy}>
                  <button className={styles.order_btn} onClick={() => dispatch(setCartItem(detail))}>Add to Cart</button>
                </div>

              </div>
            </div>
          </div>
        </section>

      <section className={styles.reviews}>
        <div className={styles.review_head}>

          <div className={styles.heading}>
            <span>All Reviews <span>(451)</span></span>
          </div>

          <div className={styles.filters}>
            <img className={styles.filter_img} src={filterIcon} alt="Filter sign" />

            <select className={styles.select_input} name="">
              <option value="latest">
                Latest
              </option>

              <option value="resent">
                Resent
              </option>
            </select>

            <button className={styles.review_btn}>Write a Review</button>
          </div>
        </div>

        <div className={styles.about_review}>

          <div className={styles.about_review_comment}>

            <div className={styles.comment_stars}>
              <IoStarSharp color='#FFC633' />
              <IoStarSharp color='#FFC633' />
              <IoStarSharp color='#FFC633' />
              <IoStarSharp color='#FFC633' />
              <IoStarSharp color='#FFC633' />
            </div>

            <div className={styles.comment_verified}>
              <span className={styles.comment_author}>Ethan R.</span>
              <img className={styles.comment_checkmark} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" alt="" />
            </div>

            <div className={styles.comment_body}>
              <p>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
            </div>

            <div className={styles.comment_publish_date}>
              <span>14.08.2023</span>
            </div>

          </div>

          <div className={styles.about_review_comment}>

            <div className={styles.comment_stars}>
              <IoStarSharp color='#FFC633' />
              <IoStarSharp color='#FFC633' />
              <IoStarSharp color='#FFC633' />
              <IoStarSharp color='#FFC633' />
            </div>

            <div className={styles.comment_verified}>
              <span className={styles.comment_author}>Samantha D.</span>
              <img className={styles.comment_checkmark} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" alt="" />
            </div>

            <div className={styles.comment_body}>
              <p>"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."</p>
            </div>

            <div className={styles.comment_publish_date}>
              <span>29.06.2023</span>
            </div>

          </div>

          <div className={styles.about_review_comment}>

            <div className={styles.comment_stars}>
              <IoStarSharp color='#FFC633' />
              <IoStarSharp color='#FFC633' />
              <IoStarSharp color='#FFC633' />
              <IoStarSharp color='#FFC633' />
              <IoStarSharp color='#FFC633' />
            </div>

            <div className={styles.comment_verified}>
              <span className={styles.comment_author}>Olivia P.</span>
              <img className={styles.comment_checkmark} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" alt="" />
            </div>

            <div className={styles.comment_body}>
              <p>"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p>
            </div>

            <div className={styles.comment_publish_date}>
              <span>17.08.2023</span>
            </div>

          </div>

        </div>
      </section>

      <section className={styles.other_products}>
        <h1 className={styles.other_product_head}>You might also like</h1>

        <div className={styles.other_cards}>
          <div className={styles.render_card}>

            <div className={styles.card_image}>
              <img src={first} alt="Product photo" />
            </div>

            <div className={styles.card_name}>
              <span>Polo with Contrast Trims & Versace</span>
            </div>

            <div className={styles.card_review}>
              <div className={styles.card_stars}>
                <IoStarSharp color='#FFC633' />
                <IoStarSharp color='#FFC633' />
                <IoStarSharp color='#FFC633' />
                <IoStarSharp color='#FFC633' />
              </div>

              <div className={styles.card_total_rating}>
                <span>4.5/5</span>
              </div>

            </div>

            <div className={styles.card_prices}>
              <span className={styles.card_price_by_discount}>$212</span>
              <s className={styles.card_real_price}>$242</s>
              <span className={styles.card_discount}>-20%</span>
            </div>

          </div>

          <div className={styles.render_card}>

            <div className={styles.card_image}>
              <img src={first} alt="" />
            </div>

            <div className={styles.card_name}>
              <span>Polo with Contrast Trims & Versace</span>
            </div>

            <div className={styles.card_review}>
              <div className={styles.card_stars}>
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>

              <div className={styles.card_total_rating}>
                <span>4.5/5</span>
              </div>

            </div>

            <div className={styles.card_prices}>
              <span className={styles.card_price_by_discount}>$212</span>
            </div>

          </div>

          <div className={styles.render_card}>

            <div className={styles.card_image}>
              <img src={first} alt="Product photo" />
            </div>

            <div className={styles.card_name}>
              <span>Polo with Contrast Trims & Versace</span>
            </div>

            <div className={styles.card_review}>
              <div className={styles.card_stars}>
                <IoStarSharp color='#FFC633' />
                <IoStarSharp color='#FFC633' />
                <IoStarSharp color='#FFC633' />
                <IoStarSharp color='#FFC633' />
              </div>

              <div className={styles.card_total_rating}>
                <span>4.5/5</span>
              </div>

            </div>

            <div className={styles.card_prices}>
              <span className={styles.card_price_by_discount}>$212</span>
              <s className={styles.card_real_price}>$242</s>
              <span className={styles.card_discount}>-20%</span>
            </div>

          </div>

          <div className={styles.render_card}>

            <div className={styles.card_image}>
              <img src={first} alt="Product photo" />
            </div>

            <div className={styles.card_name}>
              <span>Polo with Contrast Trims & Versace</span>
            </div>

            <div className={styles.card_review}>
              <div className={styles.card_stars}>
                <IoStarSharp color='#FFC633' />
                <IoStarSharp color='#FFC633' />
                <IoStarSharp color='#FFC633' />
                <IoStarSharp color='#FFC633' />
              </div>

              <div className={styles.card_total_rating}>
                <span>4.5/5</span>
              </div>

            </div>

            <div className={styles.card_prices}>
              <span className={styles.card_price_by_discount}>$212</span>
              <s className={styles.card_real_price}>$242</s>
              <span className={styles.card_discount}>-20%</span>
            </div>

          </div>

          <div className={styles.render_card}>

            <div className={styles.card_image}>
              <img src={first} alt="Product photo" />
            </div>

            <div className={styles.card_name}>
              <span>Polo with Contrast Trims & Versace</span>
            </div>

            <div className={styles.card_review}>
              <div className={styles.card_stars}>
                <IoStarSharp color='#FFC633' />
                <IoStarSharp color='#FFC633' />
                <IoStarSharp color='#FFC633' />
                <IoStarSharp color='#FFC633' />
              </div>

              <div className={styles.card_total_rating}>
                <span>4.5/5</span>
              </div>

            </div>

            <div className={styles.card_prices}>
              <span className={styles.card_price_by_discount}>$212</span>
              <s className={styles.card_real_price}>$242</s>
              <span className={styles.card_discount}>-20%</span>
            </div>

          </div>


          <div className={styles.render_card}>

            <div className={styles.card_image}>
              <img src={first} alt="Product photo" />
            </div>

            <div className={styles.card_name}>
              <span>Polo with Contrast Trims & Versace</span>
            </div>

            <div className={styles.card_review}>
              <div className={styles.card_stars}>
                <IoStarSharp color='#FFC633' />
                <IoStarSharp color='#FFC633' />
                <IoStarSharp color='#FFC633' />
                <IoStarSharp color='#FFC633' />
              </div>

              <div className={styles.card_total_rating}>
                <span>4.5/5</span>
              </div>

            </div>

            <div className={styles.card_prices}>
              <span className={styles.card_price_by_discount}>$212</span>
              <s className={styles.card_real_price}>$242</s>
              <span className={styles.card_discount}>-20%</span>
            </div>

          </div>

          <div className={styles.render_card}>

            <div className={styles.card_image}>
              <img src={first} alt="Product photo" />
            </div>

            <div className={styles.card_name}>
              <span>Polo with Contrast Trims & Versace</span>
            </div>

            <div className={styles.card_review}>
              <div className={styles.card_stars}>
                <IoStarSharp color='#FFC633' />
                <IoStarSharp color='#FFC633' />
                <IoStarSharp color='#FFC633' />
                <IoStarSharp color='#FFC633' />
              </div>

              <div className={styles.card_total_rating}>
                <span>4.5/5</span>
              </div>

            </div>

            <div className={styles.card_prices}>
              <span className={styles.card_price_by_discount}>$212</span>
              <s className={styles.card_real_price}>$242</s>
              <span className={styles.card_discount}>-20%</span>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Detail