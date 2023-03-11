// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="main-container">
      <div className="text-container">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <p className="about">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button className="shop-btn" type="button">
          Shop Now
        </button>
      </div>
      <div className="img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="clothes-img"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </>
)

export default Home
