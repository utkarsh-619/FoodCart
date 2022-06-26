import Card from "../Card/Card";

import "./List.scss"


const  List = (props) => {
  const createList = (data, idx) => {
    return <Card key={idx} data={data} />
  }

  return (
    <div className='list'>
      {props.dishDetail.map(createList)}
    </div>
  )
}

export default List;