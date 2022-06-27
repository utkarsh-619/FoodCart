import React from "react";
import ReactDOM from "react-dom";
import Card from "../Card/Card";
import Button from "../Button/Button";

import "./PopUp.scss";

const Backdrop = (props) => {
  return (
    <div className="backdraw" onClick={() => console.log(props.click())} />
  );
};

const Overlay = (props) => {
  let total_price = 0;
  const newArray = props.array.filter((e) => {
    total_price += e.amount * e.price;
    return e.amount > 0;
  });

  const createList = (data, idx) => {
    return <Card
      key={idx}
      array={props.array}
      data={data}
      setDetail={props.setArray}
    />
  }  
  const flag = newArray.length>0
  // const Price = total_price

  return (
    <div className="overlay">
      {flag && newArray.map(createList)}
      {!flag && <div className="notFound">You have not select any food</div>}

      {flag && <div className="totalPrice">
        <div className="checkOut">
          <h3>Total Price</h3>
          <h4>${total_price}</h4>
        </div>
        <div className="button">
          <Button onClick={console.log("ordring...")}>Order</Button>
        </div>
      </div>}
    </div>
  );
};

const PopUp = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop click={props.handleClose} />,
        document.getElementById("backdraw-root")
      )}
      {ReactDOM.createPortal(
        <Overlay array={props.array} setArray={props.setArray} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default PopUp;
