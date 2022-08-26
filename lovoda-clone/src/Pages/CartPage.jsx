import React from "react";
import styles from "./Cart.module.css";
import { useState } from "react";
import AddedProduct from "./AddedProduct";
import axios from "axios"
import { useEffect } from "react";
import { Link } from "react-router-dom";
const CartPage = () => {
  const [cartData, setCartData] = useState([])
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(1)
   const getCart = () => {
    axios.get("http://localhost:8080/Cart")
    .then((r) => {
      setCartData(r.data)
      
      console.log(r.data);
      let tot = 0;
      for(let i=0; i<r.data.length; i++){
        tot += r.data[i].price
      }
      setTotal(tot)
    })
  }

  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8080/Cart/${id}`)
    .then(() => {
      getCart();
    })
  }

  useEffect(() => {
    getCart();
  },[])
 
  return (
    <>
        <div className={styles.ProductContainerTwo}>
          <div className={styles.Yourcart}>Your Cart</div>
          <div>Continue to Shipping</div>
        </div>
        <hr style={{ width: "70%" }}></hr>
        {
          cartData.length > 0 && cartData.map((item) => {
            return <AddedProduct setTotal={setTotal} total={total} data={item} setQuantity={setQuantity} deleteCartData={handleDelete} key={item.id}/>
          })
        }
      <div className={styles.btn}>
        <div>
          <p>{`Subtotal $ ${total}`}</p>
        </div>
        <div> or 4 interest-free payments of $ 45.00 with</div>
        <div className={styles.afterPay}>
          <img src={"https://www.altfi.com/images/companies/afterpay.png"} />
        </div>
        <div>Taxes and shipping calculated at checkout</div>
        <div>
          <br />
          <Link to="/cart/payment"><button>check out</button></Link>
        </div>
        <br />
        <div className={styles.btn2}>
          <button>
            <img
              src={
                "https://cdn.shopify.com/s/files/1/0065/7650/4896/articles/Screen_Shot_2021-07-14_at_11.26.52_AM_540x.png?v=1626287226"
              }
            />
          </button>
        </div>
        <br />
        <div className={styles.btn3}>
          <button>
            <img
              src={"https://newsroom.paypal-corp.com/image/Library_PayPal.png"}
            />
          </button>
        </div>
        <br />
        <div className={styles.btn5}>
          <button>
            <img
              src={
                "https://d2csxpduxe849s.cloudfront.net/media/F44207E3-1DDE-4798-B0FCC94F6227FCB7/5178B7EE-CB0A-4958-8639A1B0028E2F56/webimage-10B13DE9-ABD9-4318-B33EF188C9F552F5.jpg"
              }
            />
          </button>
        </div>
        <br />
      </div>
      <div className={styles.FeaturedContainer}>
        <div>
          <h3>Featured Collection</h3>
        </div>
        <div className={styles.imageContainerTwo}>
          <div>
            <img
              src={
                "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010100309-1__20452_360x.jpg?v=1645111798"
              }
            />
            <p>10mm Palette Earrings (14k Gold)</p>
            <p>$12.00</p>
          </div>
          <div>
            <img
              src={
                "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010100310-3__23072_360x.jpg?v=1645111847"
              }
            />
            <p>10mm Palette Earrings (14k Rose Gold)</p>
            <p>$12.00</p>
          </div>
          <div>
            <img
              src={
                "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010100440-3__37743_360x.jpg?v=1645113344"
              }
            />
            <p>10mm Palette Earrings | Bubble Gum Pink (14k)</p>
            <p>$12.00</p>
          </div>
          <div>
            <img
              src={
                "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010100443-1__54184_360x.jpg?v=1645113115"
              }
            />
            <p>10mm Palette Earrings | Neon Pink (14k)</p>
            <p>$12.00</p>
          </div>
        </div>
        <div className={styles.viewbtn}>
          <button>View all</button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
