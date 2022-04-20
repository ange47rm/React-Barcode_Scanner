import React, { MouseEventHandler } from 'react';
import Button from 'react-bootstrap/Button';


type Props = {
    onClick: MouseEventHandler,
    text: string,
}


const ScannedOrdersComponent = ({ onClick, text }: Props) => {

    return (
        <>
            <Button variant="danger">{text}</Button>
        </>
    )
}

export default ScannedOrdersComponent;