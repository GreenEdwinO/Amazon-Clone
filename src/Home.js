import React from 'react'
import "./Home.css"
import Product from "./Product.js"

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className='home__image'
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />


        <div className="home__row">
          <Product
            id="1"
            title='Computers & Accessories'
            price={29.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg" />
          <Product
            id="2"
            title='New arrivals in Toys'
            price={19.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg"
          />
          <Product
            id="22"
            title='Fasionable Dresses'
            price={22.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg"
          />
          <Product
            id="222"
            title='Health & Personal Care'
            price={12.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title='For your Fitness Needs'
            price={199.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"
          />
          <Product
            id="4"
            title='Create with strip lights'
            price={129.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
          />
          <Product
            id="5"
            title='Top Deal'
            price={19.99}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61L5MeFhxBL.._AC_SY230_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title='International top sellers in Home'
            price={44.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61DUO0NqyyL._SX3000_.jpg"
          />
          <Product
            id="77"
            title='Beauty Products'
            price={154.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/717OO5QwJnL._SX3000_.jpg"
          />
          <Product
            id="7"
            title='Beauty Products'
            price={14.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71qid7QFWJL._SX3000_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="8"
            title='Speaker Products'
            price={44.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/714dK+uZTUL._AC_SY200_.jpg"
          />
          <Product
            id="9"
            title='Rechargable Lightings Products'
            price={4.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61WZ0jZfZQL._AC_SY200_.jpg"
          />
          <Product
            id="9"
            title='Disco Lightings Products & Designs'
            price={124.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61lz3ChoBFL._AC_SY200_.jpg"
          />
          <Product
            id="10"
            title='Emban Lightings'
            price={4.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81d88KpwEIL._AC_SY200_.jpg"
          />
          <Product
            id="11"
            title='Ceiling Designs'
            price={2.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81UM-bL6wnL._AC_SY200_.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home