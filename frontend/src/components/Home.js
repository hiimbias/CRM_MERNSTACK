import React, { useEffect, useState } from 'react';
import axios from "axios";
import Table from './TableClient';
import Spinner from './Spinner';
import BackButton from './BackButton';

const Home = () => {
    const [clients, setClients] = useState([]);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      axios
        .get(`http://localhost:4000/client`)
        .then((res) => {
        setClients(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }, []);

    useEffect(() => {
      setLoading(true);
      axios
        .get(`http://localhost:4000/order`)
        .then((res) => {
        setOrders(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }, []);
    console.log(clients);
    return (
      <div>
            {loading ? (<Spinner />) : <Table clients={clients} />}
        </div>
    )
}

export default Home;