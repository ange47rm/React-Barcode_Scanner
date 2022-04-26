import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import OrderDetailsComponent from './OrderDetailsComponent'
import OrderLinesComponent from './OrderLinesComponent'
import BarcodeScannerComponent from './BarcodeScannerComponent';

const LandingPageComponent = ({ captureOrderNo, loading, customerOrder, scanBarcode }) => {

    const [inputOrderNo, setInputOrderNo] = useState('');

    const handleOrderNoSubmit = (event) => {
        event.preventDefault();
        captureOrderNo(inputOrderNo);
        event.target.reset();
    }

    const renderSubmitButton = () => {
        if (loading) {
            return <Button loading={true} variant="warning" className='button' type="submit"><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Fetching Order...</Button>
        } else {
            return <Button loading={false} variant="warning" className='button' type="submit">Submit Order No.</Button>
        }
    }

    const showCustomerOrderDetails = () => {
        if (customerOrder) {
            return <OrderDetailsComponent customerOrder={customerOrder}></OrderDetailsComponent>
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
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <Form className="whiteText d-grid gap-2" id='orderNoField' onSubmit={handleOrderNoSubmit}>
                                <Form.Group className="mb-3">
                                    <h3>Enter Customer Order No.</h3>
                                    <Form.Control type="text" placeholder="Customer Order No." onChange={e => setInputOrderNo(e.target.value)} required />
                                </Form.Group>
                                {renderSubmitButton()}
                            </Form>
                        </div>
                        {customerOrder &&
                            <div id='order-mgmt' className='col'>
                                {showCustomerOrderDetails()}
                            </div>
                        }
                    </div>

                    {customerOrder &&
                        <div className='row'>
                            <div className='col'>
                                <BarcodeScannerComponent customerOrder={customerOrder} scanBarcode={scanBarcode} loading={loading} />
                            </div>
                            <div className='col'>
                                <div id='order-lines' className='box'>{showOrderLines()}</div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default LandingPageComponent;