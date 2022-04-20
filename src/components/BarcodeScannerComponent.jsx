import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import OrderDetailsComponent from './OrderDetailsComponent'

const BarcodeScannerComponent = ({ captureOrderNo, loading, customerOrder }) => {

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
            return (
                <OrderDetailsComponent customerOrder={customerOrder}></OrderDetailsComponent>
            )
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
                <div>
                    {showCustomerOrderDetails()}
                </div>
            </div>
        </>
    )
}

export default BarcodeScannerComponent;