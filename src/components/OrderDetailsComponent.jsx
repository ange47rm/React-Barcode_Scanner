import React from "react";
import Button from 'react-bootstrap/Button';

const OrderDetailsComponent = ({customerOrder}) => {

    if (customerOrder) {
        return (
            <>
                <div id='order-details' className="box">
                    <h3>Order No: <b>{customerOrder.orderNo}</b></h3>
                    <p>Customer: {customerOrder.customer.fullName}</p>
                    {customerOrder.customer.companyName && <p >Company: {customerOrder.customer.companyName}</p>}
                    <p>Address: {customerOrder.customer.address.street} {customerOrder.customer.address.houseNo} - {customerOrder.customer.address.postalCode} - {customerOrder.customer.address.country}</p>
                    <p>Phone: {customerOrder.customer.phoneNo}</p>
                    <p>Email: {customerOrder.customer.emailAddress}</p>
                    <p>Date ordered: {customerOrder.dateOrdered}</p>
                    <div className='centered'>
                        <Button variant="danger" className="button">Clear Order No.</Button>
                    </div>
                </div>
            </>
        )
    }
}

export default OrderDetailsComponent;
