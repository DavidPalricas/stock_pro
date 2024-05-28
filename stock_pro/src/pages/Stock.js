import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/product_card';
import SearchBar from "../components/search_bar";
import '../css/stock.css';
import WarningPopup from '../components/WarningPopup';

export default function Stock({ products }) {
    const [showWarning, setShowWarning] = useState(false);
    const [warningMessage, setWarningMessage] = useState("");

    useEffect(() => {
        products.forEach(product => {
            const [product_model, product_name, product_price, product_description, product_quantity, product_threshold] = product.product_info;
            if (product_quantity < product_threshold) {
                setShowWarning(true);
                setWarningMessage(`Warning: The quantity of ${product_name} is below the threshold of ${product_threshold}.`);
            }
        });
    }, [products]);

    return (
        <>
            <Sidebar active="stock" />
            <SearchBar />
            <div className="general-container">
                <div className="stock_container">
                    {products.map((product, index) => {
                        if (product.product_info[0] === "E4-Q1-AA") {
                            return null;
                        } else {
                            return (
                                <Card key={index}
                                    product_info={product.product_info}
                                    histograms={product.histograms}
                                    supplier_info={product.supplier_info}
                                />
                            );
                        }
                    })}
                </div>
            </div>
            {showWarning && (
                <WarningPopup
                    message={warningMessage}
                    onClose={() => setShowWarning(false)}
                />
            )}
        </>
    );
}
