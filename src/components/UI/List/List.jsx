import { useState } from "react";
import Card from "../Card/Card"

import "./List.scss"


const  List = () => {

  const [dishDetail, setDishDetail] = useState([
    {
      name: "Sushi",
      discription: "Finest fish and veggies",
      price: 22.99,
      amount: 0,
    },
    {
      name: "Schnitzel",
      discription: "A german specialty",
      price: 16.5,
      amount: 0,
    },
    {
      name: "Barbecue Burger",
      discription: "American raw, meaty",
      price: 12.99,
      amount: 0,
    },
    {
      name: "Green Bowl",
      discription: "Healthy...and green",
      price: 18.99,
      amount: 0,
    },
  ]);

  return (
    <div className='list'>
      {dishDetail.map(Card)}
    </div>
  )
}

export default List;