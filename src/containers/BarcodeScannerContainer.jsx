import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import LandingPageComponent from '../components/LandingPageComponent';
import HeaderComponent from '../components/HeaderComponent';
import HelpComponent from '../components/HelpComponent';
import ScannedOrdersComponent from '../components/ScannedOrdersComponent';
import Alert from 'react-bootstrap/Alert';

const BarcodeScannerContainer = () => {

    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [inputOrderNo, setInputOrderNo] = useState('');
    const [barcode, setBarcode] = useState('');
    const [validOrder, setValidOrder] = useState(undefined);
    const [errorMessage, setErrorMessage] = useState('');

    async function fetchOrder(inputOrderNo) {
        let match = false;
        setLoading(true);
        inputOrderNo = inputOrderNo.toUpperCase();
        await fetch("./orders.json")
            .then(res => res.json())
            .then((data) => {
                for (let order of data) {
                    if (inputOrderNo === order.orderNo) {
                        setValidOrder(order);
                        match = true;
                        break;
                    }
                }
            })
        if (!match) {
            setErrorMessage(`Order No "${inputOrderNo}" does not match any existing order. Please try again.`);
        }
        setLoading(false);
    }

    function retrieveCustomerOrder(inputOrderNo) {
        inputOrderNo.trim();
        setInputOrderNo(inputOrderNo);// needed?
        fetchOrder(inputOrderNo);
    }

    function scanBarcode(inputBarcode) {
        let match = false;
        setLoading(true);
        inputOrderNo.trim();
        setBarcode(inputBarcode);

        for (let index = 0; index < validOrder.orderLines.length; index++) {
            if (inputBarcode === validOrder.orderLines[index].barcode) {                                                                     // THIS WILL NEED TO BE orderLine.barcode
                let updatedValidOrder = { ...validOrder }
                updatedValidOrder.orderLines[index].scanned = !updatedValidOrder.orderLines[index].scanned;             // change scanned property from "true" to "false" or vice versa
                setValidOrder(updatedValidOrder);
                match = true;
            }
        }
        if (!match) {
            setErrorMessage(`Barcode "${inputBarcode}" does not match any of the products on Order No "${validOrder.orderNo}". Please try again.`);
        }
        setLoading(false);
    }

    function showErrorAlert() {
        return (
            <Alert variant="danger" onClose={() => hideErrorAlert()} dismissible>
                <Alert.Heading>Error</Alert.Heading>
                <p>{errorMessage}</p>
            </Alert>
        );
    }

    function hideErrorAlert() {
        setErrorMessage('');
    }


    return (
        <Router>
            <HeaderComponent />
            {errorMessage != '' &&
                <div>{showErrorAlert()}</div>
            }
            <Switch>
                <Route exact path="/" element={<LandingPageComponent captureOrderNo={retrieveCustomerOrder} loading={loading} customerOrder={validOrder} scanBarcode={scanBarcode} />} />
                <Route path="/scanned-orders" element={<ScannedOrdersComponent />} />
                <Route path="/help" element={<HelpComponent />} />
            </Switch>
            <footer><p className="centered" id="copyright">Copyright © 2022 Angelo Di Massimo. All rights reserved.</p></footer>
        </Router>

    )
}

export default BarcodeScannerContainer;