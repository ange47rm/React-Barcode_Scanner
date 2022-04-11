import React from "react";

const OrderLineComponent = ({scanned, partNo, description, price}) => {

    return (
        <>
            <p>{scanned.toString()} - {partNo} - {description} - {price}€</p>
        </>
    )
}

export default OrderLineComponent;