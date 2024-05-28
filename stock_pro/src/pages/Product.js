import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import "../css/product.css";
import Sidebar from '../components/Sidebar';
import BackButton from '../components/back_button';
import { useNavigate } from 'react-router-dom';


function Product({ products, updateProductQuantity }) {
    const navigate = useNavigate();
    const { name } = useParams();
    const product = products.find(p => p.product_info[1] === name);
    const { product_info, histograms, supplier_info } = product;
    const [product_model, product_name, product_quantity, product_description, product_price, product_threshold] = product_info;
    const [supplier_name, supplier_phone, supplier_iban, supplier_address, supplier_nif] = supplier_info;

    const [quantity, setQuantity] = useState(product_quantity);
    const [show_quantity, setShowQuantity] = useState("Quantity: x" + product_quantity);

    const product_title = product_model;
    const show_product_name = '(' + name + ')';
    const price = "Price: " + product_price + " €";
    const description = "Description: " + product_description;

    const AddProduct = () => {
        if (quantity === 0) {
            
            const remove_stock = document.getElementById("remove-stock");
            const show_quantity = document.getElementById("quantity");
            remove_stock.style.display = "block";
            show_quantity.style.color = "black";
        }

        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        setShowQuantity("Quantity: x" + newQuantity);
        updateProductQuantity(product_name, newQuantity);
    };

    const RemoveProduct = () => {
        if (quantity > 0) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            setShowQuantity(newQuantity === 0 ? "Produto Esgotado" : "Quantity: x" + newQuantity);
            updateProductQuantity(product_name, newQuantity);

            const remove_stock = document.getElementById("remove-stock");
            const show_quantity = document.getElementById("quantity");
            if (quantity === 1) {
                alert("Produto Esgotado");
                remove_stock.style.display = "none";
                show_quantity.style.color = "red";
                show_quantity.style.color = "#f30d0d";

             }else{
                setShowQuantity("Quantity: x" + (quantity - 1));

             }
            setQuantity(quantity - 1);
        }
    };

    const redirectToProfitPage = () => {
        navigate(`/profit/${product_name}`, { state: { histograms } });
    };

    function findImage(name) {
        return require("../assets/img/" + name + ".jpg");
    }

    return (
        <>
            <Sidebar />
            <BackButton />
            <div className="general-container">
                <div className="product-container">
                    <img className="product-img" src={findImage(name)} alt={name} />
                    <div className="product-data">
                        <h2 align="center">
                            <p>{product_title}</p>
                            <p>{show_product_name}</p>
                            <p id="quantity">{show_quantity}</p>
                            <p>{price}</p>
                            <p>{description}</p>
                        </h2>
                        <div className="button-container">
                            <button className="stock-button" id="add-stock" onClick={AddProduct}>Add Product</button>
                            <button className="stock-button" id="remove-stock" onClick={RemoveProduct}>Remove Product</button>
                        </div>
                    </div>
                    <div className="supplier-data">
                        <h1>Supplier Information</h1>
                        <h3>
                            <p>Supplier Name: {supplier_name}</p>
                            <p>Supplier Phone: {supplier_phone}</p>
                            <p>Supplier IBAN: {supplier_iban}</p>
                            <p>Supplier Address: {supplier_address}</p>
                            <p>Supplier NIF: {supplier_nif}</p>
                        </h3>
                    </div>
                </div>
                <button id="show-profit" onClick={redirectToProfitPage}>Show Profit</button>
            </div>
        </>
    );
}

export default Product;
