import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import LandingPageComponent from '../components/LandingPageComponent';
import HeaderComponent from '../components/HeaderComponent';
import HelpComponent from '../components/HelpComponent';
import ScannedOrdersComponent from '../components/ScannedOrdersComponent';

const BarcodeScannerContainer = () => {

    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [inputOrderNo, setInputOrderNo] = useState('');
    const [barcode, setBarcode] = useState('');
    const [validOrder, setValidOrder] = useState(undefined);

    async function fetchOrder(inputOrderNo) {
        setLoading(true);
        inputOrderNo = inputOrderNo.toUpperCase();
        await fetch("./orders.json")
            .then(res => res.json())
            .then((data) => {
                for (let order of data) {
                    if (inputOrderNo === order.orderNo) {
                        setValidOrder(order);
                    }
                }
            })
        setLoading(false);
    }

    function retrieveCustomerOrder(inputOrderNo) {
        inputOrderNo.trim();
        setInputOrderNo(inputOrderNo);// needed?
        fetchOrder(inputOrderNo);
    }

    return (
        <Router>
            <HeaderComponent />
            <Switch>
                <Route exact path="/" element={<LandingPageComponent captureOrderNo={retrieveCustomerOrder} loading={loading} customerOrder={validOrder} />} />
                <Route path="/scanned-orders" element={<ScannedOrdersComponent />} />
                <Route path="/help" element={<HelpComponent />} />
            </Switch>
        </Router>
    )
}

export default BarcodeScannerContainer;