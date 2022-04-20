import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import OrderDetailsComponent from './OrderDetailsComponent'
import OrderLinesComponent from './OrderLinesComponent'

const LandingPageComponent = ({ captureOrderNo, loading, customerOrder }) => {

    const [inputOrderNo, setInputOrderNo] = useState('');

    const handleOrderNoSubmit = (event) => {
        event.preventDefault();
        captureOrderNo(inputOrderNo);
        event.target.reset();
    }

    const renderSubmitButton = () => {
        if (loading) {
            return <Button loading={true} variant="warning" type="submit"><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Fetching Order...</Button>
        } else {
            return <Button loading={false} variant="warning" type="submit">Submit</Button>
        }
    }

    const showCustomerOrderDetails = () => {
        if (customerOrder) {
            return <OrderDetailsComponent customerOrder={customerOrder}></OrderDetailsComponent>
        }
    }

    const showOrderLines = () => {
        if (customerOrder && customerOrder.orderLines.length > 0) {
            return <OrderLinesComponent orderLines={customerOrder.orderLines}></OrderLinesComponent>
        }
    }

    return (
        <>
            <div id="main-screen">
                <div id="customerOrderInput">
                    <Form className="whiteText d-grid gap-2" onSubmit={handleOrderNoSubmit}>
                        <Form.Group className="mb-3">
                            <h2>Enter Customer Order No.</h2>
                            <Form.Control type="text" placeholder="Customer Order No." onChange={e => setInputOrderNo(e.target.value)} required />
                        </Form.Group>

                        {renderSubmitButton()}
                    </Form>
                </div>
                {customerOrder &&
                    <div id='order-mgmt'>
                        {showCustomerOrderDetails()}
                        
                        <div id='order-lines'>{showOrderLines()} </div>
                    </div>
                }
            </div>
        </>
    )
}

export default LandingPageComponent;