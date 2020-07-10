import React from 'react';
import { useParams } from 'react-router-dom'

export default function Suzuki() {
    let { productId } = useParams();
    return (
        <div className="App">
            <header className="App-header">
                Suzuki {productId}
            </header>
        </div>
    )
}