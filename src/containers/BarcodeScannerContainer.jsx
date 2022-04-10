import React, {useState, useEffect} from "react"

const BarcodeScannerContainer = () => {

    const [orders, setOrders] = useState([
        {orderNo: "ANG001", orderLines: [
            {scanned: false, partNo: "X001", description: "BTG Fanny Pack", price: 25 },
            {scanned: false, partNo: "X002", description: "Armanov Supporto Asta Inneschi", price: 8.8 },
            {scanned: false, partNo: "X003", description: "Armanov Maniglia Ergonomica Rotante", price: 39 },
        ]},
        {orderNo: "ANG002", orderLines: [
            {scanned: false, partNo: "Y001", description: "Helikon-Tex Competition Triple Carbine Insert", price: 19.5 },
            {scanned: false, partNo: "Y002", description: "Tasmanian Tiger QR SK Anfibia Plate Carrier", price: 139 },
        ]},
        {orderNo: "ANG003", orderLines: [
            {scanned: false, partNo: "Z001", description: "UTG Ultra Slim Handstop M-LOK", price: 15 },
            {scanned: false, partNo: "Z002", description: "BCM M-LOK Picatinny Rail Section Nylon Black 3in.", price: 23 },
            {scanned: false, partNo: "Z003", description: "Leatherman Raptor Emergency Medical Scissor", price: 29 },
            {scanned: false, partNo: "Z004", description: "Leatherman Surge Silver Multitool Premium Holster.", price: 85 },
        ]},
    ]);

    useEffect(() => {
        console.log ("Use effect triggered")
        console.log("Orders:", orders);},[]) 
}

const orderNodes = orders.map(orderLine => {
    return (
        (<OrderLineComponent 
            // loaded={loaded} 
            // artist= {song["im:artist"].label} 
            // title={song["im:name"].label} 
            // key={song.id.attributes["im:id"]} 
            // image={song["im:image"][2].label}
            orderNo={orderLine.description}>
            </OrderLineComponent>)
    )
})