import Button from "../Button/Button"

import "./Card.scss"


const Card = (props) => {

  const changeState = (value) => {
    if(value<0) value=0;
    const newobj = { ...props.data, amount: value };

    const newArray = props.array.map((e) => {
      if (e.id === newobj.id) return newobj;
      else return e;
    });
    props.setDetail(newArray);
  }

  const handleChange = (event) => {
    changeState((event.target.value * 1));
  }

  const handlePlus = ()=>{
    changeState(props.data.amount + (+1))
  }

  return (
    <div className="card">
      <div className="container">
        <div className="left">
          <h3 className="name">{props.data.name}</h3>
          <p className="discripction">{props.data.discription}</p>
          {/* <p className="discripction">{JSON.stringify(props.data)}</p> */}

          <div className="price">${props.data.price}</div>
        </div>

        <div className="right">
          <div className="amount">
            <h5>Amount</h5>
            <input type="text" 
              value={props.data.amount}
              onChange={handleChange}
            />

          </div>

          <Button onClick={handlePlus}>Add</Button>
        </div>
      </div>
    </div>
  );
}

export default Card