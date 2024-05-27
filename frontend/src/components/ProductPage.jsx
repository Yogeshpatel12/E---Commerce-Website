import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";
import products from "../products";
import Rating from "./Rating";

function ProductPage() {
  const { id } = useParams();
  const SingleProductData = products.find((product) => {
    return product._id === id;
  });
  return (
    <div className="">
      <Link className="btn btn-dark m-2 " to="/">
        <i className="fa-solid fa-arrow-left m-1 pr-2"></i>Go Back
      </Link>
      <Row > 
        <Col md={6}>
          <Image
            className="rounded m-2 ml-auto w-full "
            src={SingleProductData.image}
            fluid
          />
        </Col>
        <Col md={3}>
          <ListGroup className="m-2 text-x">
            <ListGroup.Item>{SingleProductData.name}</ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={SingleProductData.rating}
                text={`${SingleProductData.numReviews} reviews`}
              />
            </ListGroup.Item >
            <ListGroup.Item>Price : Rs {SingleProductData.price} /-</ListGroup.Item>
            <ListGroup.Item>Description : {SingleProductData.description}</ListGroup.Item>
            <ListGroup.Item>Brand : {SingleProductData.brand}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className="mr-2">
        <Card md={3} className="m-2">
          <ListGroup >
            <ListGroup.Item>
              <Row>
                <Col>Price :</Col>
                <Col>Rs.{SingleProductData.price} /-</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>{SingleProductData.countInStock > 0 ? "InStock" : "Out Of Stock"}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className="btn btn-dark" disabled={SingleProductData.countInStock === 0}>Add To Cart</Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductPage;
