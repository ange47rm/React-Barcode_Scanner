import React from "react";

const OrderDetailsComponent = ({customerOrder}) => {

    if (customerOrder) {
        return (
            <>
                <div id='order-details'>
                    <h3>{customerOrder.orderNo}</h3>
                    <p>Customer: {customerOrder.customer.fullName}</p>
                    {customerOrder.customer.companyName && <p >Company: {customerOrder.customer.companyName}</p>}
                    <p>Address:{customerOrder.customer.address.street} {customerOrder.customer.address.houseNo} - {customerOrder.customer.address.postalCode} - {customerOrder.customer.address.country}</p>
                    <p>Phone: {customerOrder.customer.phoneNo}</p>
                    <p>Email: {customerOrder.customer.emailAddress}</p>
                    <p>Date ordered: {customerOrder.dateOrdered}</p>
                </div>
            </>
        )
    }
}

export default OrderDetailsComponent;
