import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import BackButton from "../../components/BackButton";
import { Wrapper } from "./ShowOrder.styles";

const ShowOrder = () => {
  const [order, setOrder] = useState({});
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const { clientId } = useParams(); // get the client id from the url

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/order/${clientId}`)
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  console.log(order);
  console.log(order.client_Id);
  console.log(clientId);
  return (
    <Wrapper>
      <BackButton />
      <h1
        style={{
          color: "black",
          margin: "2rem",
        }}
      >
        Order
      </h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>ID</th>
            <th>Item</th>
            <th>Order Date</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <Spinner />
          ) : (
            orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{order._id}</td>
                <table
                style = {{
                    width: '100%',
                }}
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                  {order.items.map((item) => (
                      <tr key={item}
                      className="item-row"
                      >
                        <td
                        style={{
                            width: '40%',
                        }}
                        >{item.name}</td>
                        <td
                        style={{
                            width: '40%',
                        }}>{item.quantity}</td>
                        <td>${item.price}</td>
                      </tr>
                  ))}
                  </tbody>
                </table>
                <td>{order.orderDate}</td>
                <td>${order.total}</td>
                <td>{order.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default ShowOrder;
