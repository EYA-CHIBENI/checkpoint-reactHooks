import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const MovieCard = ({el}) => {
const [show,setShow]=useState(false)
  return ( 
  <div>
  <Card style={{ width: '18rem' }}>
      <Link to={`/moviedescription/${el.id}`}>
      <Card.Img variant="top" src={el.posterURL} style={{width:"287px",height:"407px"}} />
      </Link> 
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
        {show===true ? el.description : el.description.substring(0,50) } 
        <button className="show" onClick={()=>setShow(!show)}>{show ? "SHOW LESS" : "SHOW MORE ..."}</button>
        </Card.Text>
        <Button variant="primary">{el.rating}</Button>
      </Card.Body>
  </Card>
  </div>
  )
 
}
export default MovieCard;
