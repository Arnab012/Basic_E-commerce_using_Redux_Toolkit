import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import {remove} from "./redux_toolkit/cardSlice"
const Cart = () => {
  
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    // dispatch a remove action
    dispatch(remove(id));
  };

  const product = useSelector((state) => state.cart);
  const card = product.map((product) => {
    return (
      <div
        className="col-md-12"
        key={product.id}
        style={{ marginBottom: "10px", display: "flex", justifyContent: "center" }}
      >
        <Card style={{ width: "18rem" }}>
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px", margin: "0 auto" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text style={{ maxLines: "5" }}>₹:{product.price}</Card.Text>
          </Card.Body>

          <Card.Footer className="d-flex justify-content-center">
            <Button
              variant="danger"
              style={{ display: "flex", justifyContent: "center" }}
              onClick={() => removeToCart(product.id)}
            >
              Remove Item
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });
  return (
    <>
      <div className="row">{card}</div>
    </>
  );
};

export default Cart;
