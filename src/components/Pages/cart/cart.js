import React from "react";
import { connect } from "react-redux";
import "./cart.scss";
import Table from "react-bootstrap/Table";
import { addtocart, removefromcart } from "../../redux/action";

const Cart = (props) => {
  if (props.state11.length === 0) {
    return <div id="empty">Cart is Empty</div>;
  } else {
    let sum = 0;
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>نام محصول</th>
              <th>قیمت</th>
              <th>تعداد</th>
              <th>حذف / اضافه</th>
            </tr>
          </thead>
          <tbody>
            {props.state11.map((product) => {
              return (
                <tr>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.count}</td>
                  <td>
                    <button
                      id="but2"
                      onClick={() => props.dispatch(removefromcart(product))}
                    >
                      -
                    </button>
                    <button
                      id="but1"
                      onClick={() => props.dispatch(addtocart(product))}
                    >
                      +
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div>
          {props.state11.map((pro) => {
            sum += pro.count * parseInt(pro.price.slice(4, 20));
          })}
          Total Price : {sum}
        </div>
      </>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
});

const mapStateToProps = (state12) => ({
  state11: state12,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
