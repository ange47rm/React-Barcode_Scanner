import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

import BarcodeScannerComponent from '../components/BarcodeScannerComponent';
import HeaderComponent from '../components/HeaderComponent';
import ScannedOrdersComponent from '../components/ScannedOrdersComponent';
import HelpComponent from '../components/HelpComponent';


const BarcodeScannerContainer = () => {

    const [orders, setOrders] = useState([]);
    const [loaded, setLoaded] = useState(false);

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
        <>
            <HeaderComponent />
            <Switch>
                <Route exact path="/" render={() => <BarcodeScannerComponent orders={orders} loaded={loaded}/>}/>
                <Route path="/scanned-orders" component={ScannedOrdersComponent} />
                <Route path="/help" component={HelpComponent} />
            </Switch>
        </>
    </Router>
    )
}

export default BarcodeScannerContainer;