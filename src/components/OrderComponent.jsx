import React from "react";
import OrderLineComponent from './OrderLineComponent';

const OrderComponent = ({ orderLines }) => {

    const orderLinesNodes = orderLines.map(orderLine => {
        return (
                <OrderLineComponent scanned={orderLine.scanned} partNo={orderLine.partNo} description={orderLine.description} price={orderLine.price} key={orderLine.objId}/>
        )
    })

    return (
        <>
            {orderLinesNodes}
        </>
    )
}

export default OrderComponent;
