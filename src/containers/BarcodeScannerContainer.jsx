import React, { useState, useEffect } from "react";
import OrderComponent from '../components/OrderComponent';

const BarcodeScannerContainer = () => {

    const [orders, setOrders] = useState([]);
    const [loaded, setLoaded] = useState(false);

    async function fetchOrders() {
        await fetch("./orders.json")
          .then(res => res.json())
          .then((data) => {
            setOrders(data);
            setLoaded(true);
          })
      }

    useEffect(() => {
        fetchOrders();
      }, []);

    

    const orderNodes = orders.map(order => {
        return (
            <OrderComponent orderNo={order.orderNo} key={order.objId} orderLines={order.orderLines} />
        )
    })

    if (!loaded) {
        return (
            <>
                <h1>Orders</h1>
                <p>Loading orders...</p>
            </>)
    }

    return (
        <>
            <h1>Orders</h1>
            {orderNodes}
        </>
    )
}

export default BarcodeScannerContainer;