import React from "react";
import "./Slider.scss";
import { Card, Button, ListGroupItem, ListGroup } from "react-bootstrap";
import {addtocart} from '../../redux/action'
import {connect} from 'react-redux'

const Card2 = (props) => {
  const {prod} = props
  const handleclick = () => {
    props.dispatch(addtocart(prod))
  }

  return (
    <div className="card">
      <Card>
        <Card.Img variant="top" src={prod.pic}/>
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text>
            {prod.desc}
          </Card.Text>
          <Card.Text>
            {prod.price}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <Button onClick={handleclick}>اضافه به سبد خرید</Button>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch:dispatch
})

export default connect(mapDispatchToProps)(Card2)
