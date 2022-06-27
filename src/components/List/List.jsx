import Card from "../UI/Card/Card";

import "./List.scss"


const  List = (props) => {
  const createList = (data, idx) => {
    return (
      <Card
        key={idx}
        array={props.dishDetail}
        data={data}
        setDetail={props.setDishDetail}
      />
    );
  }

  return (
    <div className='list'>
      {props.dishDetail.map(createList)}
    </div>
  )
}

export default List;