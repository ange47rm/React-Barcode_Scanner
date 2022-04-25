import React from "react";
import { Checkmark } from 'react-checkmark'

const OrderLinesComponent = ({ orderLines }) => {

    const orderLineNodes = orderLines.map((orderLine) => {
        return <p key={orderLine.objId}><input type="checkbox" readOnly checked={orderLine.scanned}></input> {orderLine.partNo} - {orderLine.description} - {orderLine.price}€</p>
    })

    return (
        <>
            {orderLineNodes}
        </>
    )
}

export default OrderLinesComponent;