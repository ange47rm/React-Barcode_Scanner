import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const BarcodeScannerComponent = ({ customerOrder, scanBarcode, loading }) => {

    const [inputBarcode, setInputBarcode] = useState('');

    const handleBarcodeScan = (event) => {
        event.preventDefault();
        scanBarcode(inputBarcode);
        event.target.reset();
    };

    const renderSubmitButton = () => {
        if (loading) {
            return <Button loading={true} variant="warning" className='button' type="submit"><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Validating Barcode...</Button>
        } else {
            return <Button loading={false} variant="warning" className='button' type="submit">Submit Barcode</Button>
        }
    }

    return (
        <>
            <div id='order-scanning'>
                <Form className="whiteText d-grid gap-2" onSubmit={handleBarcodeScan}>
                    <Form.Group className="mb-3">
                        <h3>Scan/Enter Barcode</h3>
                        <Form.Control type="text" placeholder="(Example: 978020137962)" onChange={event => setInputBarcode(event.target.value)} required />
                    </Form.Group>
                    {renderSubmitButton()}
                </Form>
            </div>
        </>
    )
}

export default BarcodeScannerComponent;
