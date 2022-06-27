import { useState } from "react";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import List from "./components/List/List"

import "./index.scss";

function App() {

   const [dishDetail, setDishDetail] = useState([
     {
       id:0,
       name: "Sushi",
       discription: "Finest fish and veggies",
       price: 22.99,
       amount: 0,
      },
      {
       id:1,
       name: "Schnitzel",
       discription: "A german specialty",
       price: 16.5,
       amount: 0,
      },
      {
       id:2,
       name: "Barbecue Burger",
       discription: "American raw, meaty",
       price: 12.99,
       amount: 0,
      },
      {
       id:3,
       name: "Green Bowl",
       discription: "Healthy...and green",
       price: 18.99,
       amount: 0,
     },
   ]);

  return (
    <>
      <Navbar dishDetail={dishDetail} setDishDetail={setDishDetail} />
      <Main />
      <List dishDetail={dishDetail} setDishDetail={setDishDetail} />
    </>
  );
}

export default App;
