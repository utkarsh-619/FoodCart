import Button from "../Button/Button"

import "./Card.scss"


const Card = (props) => {
  return (
    <div className="card">
      <div className="container">
        <div className="left">
          <h3 className="name">{props.data.name}</h3>
          <p className="discripction">{props.data.discription}</p>
          <div className="price">${props.data.price}</div>
        </div>

        <div className="right">
          <div className="amount">
            <h5>Amount</h5>
            <input type="number" />
            {/* value={props.data.amount} */}
          </div>

          <Button onClick={() => console.log("+")}>+</Button>
          <Button onClick={() => console.log("-")}>-</Button>
        </div>
      </div>
    </div>
  );
}

export default Card