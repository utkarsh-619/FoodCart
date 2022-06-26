import "./Navbar.scss";
import ReactDOM from "react-dom";
import PopUp from "../UI/CartPopUp/PopUp"

import { FaShoppingCart } from "react-icons/fa";
// import { useState } from "react";

const Navbar = () => {

  // const [isPopUp, setIsPopUp] = useState(false);



  // const popUpHanddler = ()=>{
    ReactDOM.createPortal(<>helo</>, document.getElementById('popup'))
  // }

  return (

    <nav>
        <h1>ReactMeals</h1>
        <div className="cart" onClick={""}>
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