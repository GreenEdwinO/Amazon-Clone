import React from 'react'
import "./Footer.css"
import { Link, useHistory } from 'react-router-dom'


function Footer() {
  return (
    <footer>
      <div className="section-p1">
        <div className="col">
          <img className="logu" src="https://p.kindpng.com/picc/s/17-172380_transparent-white-amazon-logo-png-amazon-fba-logo.png" style={{ width: "100px", borderRadius: "10px" }} alt="" />
          <h4>Head Office</h4>
          <p><strong>Addresss:</strong> 18 Street, D/Line, PH, Rivers State</p>
          <p><strong>Phone:</strong> +23480123456789</p>
          <p><strong>Hours:</strong> 09:00 - 18:00, Mon - Sat</p>
          <div className="follow">
            <h4>Follow us</h4>
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>


        <div className="col">
          <h4>My Account</h4>
          <Link to={'/login'}>
            <a>Sign in</a>
          </Link>
          <Link to={'/checkout'}>
            <a>View Cart</a>
          </Link>
          <Link to={'/checkout'}>
            <a>My Wishlist</a>
          </Link>
          <Link to={'/checkout'}>
            <a>Track My Order</a>
          </Link>
          <a href="#">Help</a>
        </div>

        <div className="col">
          <h4>About</h4>
          <a href="#">About Us</a>
          <Link to={'/checkout'}>
            <a href="#">Delivery Information</a>
          </Link>
          <a href="#">Privacy Policy</a>
          <a href="#">Teams & Conditions</a>
          <a href="https://greenojegwo.netlify.app/contact.html">Contact Us</a>
        </div>

        <div className="col install">
          <h4>Install the App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <a href="https://apps.apple.com/us/app/amazon-shopping/id297606951"><img src="https://www.pngmart.com/files/10/Download-On-The-App-Store-PNG-Image.png" alt="" /></a>
            <a href="https://play.google.com/store/apps/details?id=com.amazon.mShop.android.shopping&hl=en&gl=US"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_GSGDneF42Y3lPYO4HHsKm8pyRHyWRJM7er0t0T381hvQAc_ii7Hme_O_Ym6G4fSbAg&usqp=CAU" alt="" /></a>
          </div>
          <p>Secure Payment Gateways</p>
          <img src="https://www.kindpng.com/picc/m/52-524533_secure-payment-png-shopify-guaranteed-safe-checkout-transparent.png" style={{ width: "300px" }} alt="" />
        </div>

        <div className="copyright">

          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Interest-Based Ads</a>

          <p className='green'>© 2022. Amazon Clone Build By <a href="http://greenojegwo.netlify.app/">Green Edwin</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer