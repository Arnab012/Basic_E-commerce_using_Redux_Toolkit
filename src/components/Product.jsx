import React from "react";

// import axios from "axios";
import {Alert} from "react-bootstrap"

import { useEffect } from "react";
import { Card, Button } from "react-bootstrap";

import { useDispatch,useSelector } from "react-redux";
import { add } from "./redux_toolkit/cardSlice";
import {getProduct} from "../components/redux_toolkit/productSlice";
const Product = () => {
  const dispatch = useDispatch();
  const {data:product,status}=useSelector(state=>state.products)

  useEffect(() => {
    dispatch(getProduct());

  }, []);

  if(status==='loading'){
    return <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <Alert key="danger" variant="success">Loading...</Alert>
  </div>
    
  }
  if(status==='error'){
  return <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <Alert key="danger" variant="danger">Something went Wrong !!! Try Again Later</Alert>
  </div>
  }

  const addtocart = (product) => {
    // dispath a add  isAction...//

    dispatch(add(product));
  };

  const card = product.map((product) => {
    return (
      <div
        className="col-md-3"
        key={product.id}
        style={{ marginBottom: "10px" }}
      >
        <Card style={{ width: "18rem" }}>
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text style={{ maxLines: "5" }}>₹:{product.price}</Card.Text>
          </Card.Body>

          <Card.Footer className="d-flex justify-content-center">
            <Button
              variant="primary"
              style={{ display: "flex", justifyContent: "center" }}
              onClick={() => addtocart(product)}
            >
              Add to Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "100px",
        }}
      >
        Product
      </h1>
      <div className="row">{card}</div>
    </>
  );
};

export default Product;
