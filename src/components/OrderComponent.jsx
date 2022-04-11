import React, { useEffect } from "react";

const OrderComponent = ({ orderNo, orderLines }) => {

    return (
        <>
            <h3>{orderNo}</h3>
            <p>{JSON.stringify(orderLines)}</p>
        </>
    )
}

export default OrderComponent;
