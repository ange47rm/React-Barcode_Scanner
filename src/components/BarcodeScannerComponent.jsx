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
            return (
                <>
                    <div className='centered'>
                        <Button loading={true} variant="warning" className='button' id='submitBtn' type="submit"><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Validating Barcode...</Button>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className='centered'>
                        <Button loading={false} variant="warning" className='button' id='submitBtn' type="submit">Submit Barcode</Button>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <div>
                <Form className="whiteText" onSubmit={handleBarcodeScan}>
                    <Form.Group className="mb-3 centered">
                        <h1>Scan/Enter Barcode</h1>
                        <Form.Control type="text" placeholder="(Example: 978020137962)" onChange={event => setInputBarcode(event.target.value)} required />
                    </Form.Group>
                    {renderSubmitButton()}
                </Form>
            </div>
        </>
    )
}

export default BarcodeScannerComponent;
