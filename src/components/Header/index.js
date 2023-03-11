// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="web-logo"
        alt="website logo"
      />
    </div>
    <ul className="nav-items-container">
      <li>
        <Link to="/" className="home-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/products" className="products-link">
          Products
        </Link>
      </li>
      <li>
        <Link to="/cart" className="cart-link">
          Cart
        </Link>
      </li>
      <button className="logout-btn" type="button">
        Logout
      </button>
    </ul>
  </nav>
)

export default Header
