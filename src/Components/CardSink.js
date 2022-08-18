import React from "react";
import { Link } from "react-router-dom";
import {
  CardGroup,
  Card,
  ListGroup,
  ListGroupItemProps,
  ListGroupItem,
} from "react-bootstrap";

function CardSink(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.images} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{props.listItem}</ListGroupItem>
        <ListGroupItem>{props.listItem1}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">{props.cagetory}</Card.Link>
        <Card.Link href="#">{props.sub}</Card.Link>
      </Card.Body>
    </Card>
  );
}
export default CardSink;
