import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

import BarcodeScannerComponent from '../components/BarcodeScannerComponent';
import HeaderComponent from '../components/HeaderComponent';
import ScannedOrdersComponent from '../components/ScannedOrdersComponent';
import HelpComponent from '../components/HelpComponent';


const BarcodeScannerContainer = () => {

    const [orders, setOrders] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [barcode, setBarcode] = useState('');     // the barcode that the BarcodeScannerComponent component will "pass up"


    async function fetchOrders() {
        await fetch("./orders.json")
            .then(res => res.json())
            .then((data) => {
                setOrders(data);
                setLoaded(true);
            })
    }


    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <Router>
            <HeaderComponent />
            <Switch>
                <Route exact path="/" element={<BarcodeScannerComponent orders={orders} loaded={loaded} captureBarcode={inputBarcode => setBarcode(inputBarcode)}/>} />
                <Route path="/scanned-orders" element={<ScannedOrdersComponent />} />
                <Route path="/help" element={<HelpComponent />} />
            </Switch>
        </Router>
    )
}

export default BarcodeScannerContainer;