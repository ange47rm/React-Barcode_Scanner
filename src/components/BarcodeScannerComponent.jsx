import {React, useState} from 'react';
import OrderComponent from './OrderComponent';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const BarcodeScannerComponent = ({ orders, loaded, captureBarcode }) => {

    const [inputBarcode, setInputBarcode] = useState('');

    // const orderNodes = orders.map(order => {
    //     return (
    //         <OrderComponent orderNo={order.orderNo} key={order.objId} orderLines={order.orderLines} />
    //     )
    // })

    // FORM SUBMIT HANDLER
    const handleBarcodeSubmit = (event) => {    // when the form is submitted...
        event.preventDefault();             // ... prevent the page from being refreshed...
        captureBarcode(inputBarcode);           // ... run captureVin using the inputVin ...
        event.target.reset();               // ... and finally reset form field.
    } 


    if (!loaded) {
        return (
            <>
                <h1>Orders</h1>
                <p>Loading orders...</p>
            </>)
    }

    return (
        <>
            <Form className='whiteText' onSubmit={handleBarcodeSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Scan/Enter a barcode</Form.Label>
                    <Form.Control id="barcodeInput" type="text" placeholder="Barcode" onChange={e => setInputBarcode(e.target.value)} required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <h2  className='whiteText'> {inputBarcode}</h2>
        </>
    )
}

export default BarcodeScannerComponent;