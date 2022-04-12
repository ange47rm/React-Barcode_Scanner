import React, { useEffect } from "react";
import OrderLineComponent from './OrderLineComponent';

const OrderComponent = ({ orderNo, orderLines }) => {

    const orderLinesNodes = orderLines.map(orderLine => {
        return (
                <OrderLineComponent scanned={orderLine.scanned} partNo={orderLine.partNo} description={orderLine.description} price={orderLine.price} key={orderLine.objId}/>
        )
    })

    useEffect(() => {
        console.log(orderNo)
        console.log(orderLines)
    }, [])

    return (
        <>
            <h3>Order No: {orderNo}</h3>
            {orderLinesNodes}
        </>
    )
}

export default OrderComponent;
