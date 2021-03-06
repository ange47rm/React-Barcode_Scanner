import React from 'react';
import { Link } from "react-router-dom";
import BarcodeScannerImage from '../assets/barcode-scanner1.png';


const HeaderComponent = () => {

    return (
        <>
            <header id='header'>
                <img id='company-logo' src='data:image/png;base64,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' alt='Company_Logo'></img>
                <h1 id='app-title'>Barcode Scanner</h1>
                <img id='barcodeScannerImage' src={BarcodeScannerImage} alt='barcode'></img>
            </header>
            <nav>
                <ul id='navbar'>
                    <li>
                        <Link to="/" className="navlink">BARCODE SCANNER</Link>
                    </li>
                    <li>
                        <Link to='/scanned-orders' className="navlink">SCANNED ORDERS</Link>
                    </li>
                    <li>
                        <Link to='/help' className="navlink">HELP</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default HeaderComponent;
