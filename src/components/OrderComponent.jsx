import React from "react";
import OrderLineComponent from './OrderLineComponent';

const OrderComponent = ({ orderNo, orderLines }) => {

    const orderLinesNodes = orderLines.map(orderLine => {
        return (
            <>
                <OrderLineComponent key={orderLine.objId} scanned={orderLine.scanned} partNo={orderLine.partNo} description={orderLine.description} price={orderLine.price}/>
            </>
        )
    })

    return (
        <>
            <h3>Order No: {orderNo}</h3>
            {orderLinesNodes}
        </>
    )
}

export default OrderComponent;
