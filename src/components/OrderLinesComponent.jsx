import React from "react";
import { Checkmark } from 'react-checkmark'

const OrderLinesComponent = ({ orderLines }) => {

    const orderLineNodes = orderLines.map((orderLine) => {
        return <p>{orderLine.scanned.toString()} - {orderLine.partNo} - {orderLine.description} - {orderLine.price}€</p>
    })

    return (
        <>
            {orderLineNodes}
        </>
    )
}

export default OrderLinesComponent;