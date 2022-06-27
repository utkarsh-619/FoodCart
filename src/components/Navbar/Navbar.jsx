import "./Navbar.scss";
import PopUp from "../UI/CartPopUp/PopUp";

import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const getTotalNum = () => {
    let total = 0;
    
    for(let i=0;i<props.dishDetail.length;i++)
      total+=props.dishDetail[i].amount;
      
    return total
  }

  return (
    <nav>
      {isOpen && <PopUp handleClose={()=>{setIsOpen(false)}} array={props.dishDetail} setArray={props.setDishDetail}/>}
      <h1>ReactMeals</h1>
      <div className="cart" onClick={()=>setIsOpen(true)}>
        <div className="cartHeading">
          <FaShoppingCart className="cartIcon" />
          <h3>Your Cart</h3>
        </div>
        <div className="dishCount">{getTotalNum()}</div>
      </div>
    </nav>
  );
};

export default Navbar;
