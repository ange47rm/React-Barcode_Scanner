import { React, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const BarcodeScannerComponent = ({ captureBarcode, loading }) => {

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

    const renderSubmitButton = () => {
        if (loading) {
            return <Button loading={true} variant="warning" type="submit">Fetching Order... <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></Button>
        } else {
            return <Button loading={false} variant="warning" type="submit">Submit</Button>
        }
      }

    return (
        <>
            <div id="barcodeScanner">
                <Form className="whiteText d-grid gap-2" onSubmit={handleBarcodeSubmit}>
                    <Form.Group className="mb-3" id="barcodeInput">
                        <h2>Enter Customer Order No.</h2>
                        <Form.Control type="text" placeholder="Customer Order No." onChange={e => setInputBarcode(e.target.value)} required />
                    </Form.Group>

                    {renderSubmitButton()}
                </Form>
            </div>
        </>
    )
}

export default BarcodeScannerComponent;