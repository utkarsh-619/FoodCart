import "./Navbar.scss";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
        <h1>ReactMeals</h1>
        <div className="cart">
            <div className="cartHeading">
                <FaShoppingCart className="cartIcon"/>
                <h3>Your Cart</h3>
            </div>
            <div className="dishCount">5</div>
        </div>
    </nav>
  )
}

export default Navbar