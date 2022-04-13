import React from 'react';
import OrderComponent from './OrderComponent';

const BarcodeScannerComponent = ({orders, loaded}) => {

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

export default BarcodeScannerComponent;