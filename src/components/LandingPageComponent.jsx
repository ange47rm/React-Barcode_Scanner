import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OrderDetailsComponent from './OrderDetailsComponent';
import OrderLinesComponent from './OrderLinesComponent';
import BarcodeScannerComponent from './BarcodeScannerComponent';


const LandingPageComponent = ({ captureOrderNo, loading, customerOrder, setCustomerOrder, scanBarcode, showErrorAlert, hideErrorAlert }) => {

    const [inputOrderNo, setInputOrderNo] = useState('');

    const handleOrderNoSubmit = (event) => {
        event.preventDefault();
        captureOrderNo(inputOrderNo);
        event.target.reset();
    }

    const renderOrderNoField = () => {
        if (!customerOrder) {
            return (
                <>
                    <div id='orderNoField'>
                        <Form className="whiteText" onSubmit={handleOrderNoSubmit}>
                            <Form.Group className="mb-3 centered">
                                <h1>Enter Customer Order No.</h1>
                                <Form.Control type="text" onChange={e => setInputOrderNo(e.target.value)} required />
                            </Form.Group>
                            {renderSubmitButton()}
                        </Form>
                    </div>
                </>
            )
        }
    }

    const renderSubmitButton = () => {
        if (loading) {
            return <Button loading={true} variant="warning" className='button' id='submitBtn' type="submit"><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Fetching Order...</Button>
        } else {
            return <Button loading={false} variant="warning" className='button' id='submitBtn' type="submit">Submit Order No.</Button>
        }
    }

    const showCustomerOrderDetails = () => {
        if (customerOrder) {
            return <OrderDetailsComponent customerOrder={customerOrder} setCustomerOrder={setCustomerOrder}></OrderDetailsComponent>
        }
    }

    const showOrderLines = () => {
        if (customerOrder && customerOrder.orderLines.length > 0) {
            return (<>
                <h3>Order Lines</h3>
                <OrderLinesComponent orderLines={customerOrder.orderLines}></OrderLinesComponent>
            </>
            )
        }
    }

    return (
        <>
            <div id="main-screen">
                {renderOrderNoField()}

                    {customerOrder &&
                        <div id="scanning-area">
                            {showCustomerOrderDetails()}
                            < BarcodeScannerComponent customerOrder={customerOrder} scanBarcode={scanBarcode} loading={loading} />
                            <div id='order-lines' className='box'>{showOrderLines()}</div>
                        </div>
                    }
            </div>
        </>
    )
}

export default LandingPageComponent;