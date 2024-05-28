import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import PageTitle from "../components/page_title";
import DataField from "../components/data_field";
import NifOption from "../components/nif_option";
import SubmitButton from "../components/submit_button";
import SearchBar from "../components/search_bar";
import "../css/sales_record.css";

export default function Sales_Record({ products, updateProducts }) {
    const [productName, setProductName] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nif, setNif] = useState("");

    const [errors, setErrors] = useState({});

    const validateFields = () => {
        let tempErrors = {};
        if (!productName) tempErrors.productName = "Product Name is required";
        if (!productQuantity) {
            tempErrors.productQuantity = "Product Quantity is required";
        } else if (!/^\d+$/.test(productQuantity)) {
            tempErrors.productQuantity = "Product Quantity must be a number";
        }
        if (!firstName) tempErrors.firstName = "First Name is required";
        if (!lastName) tempErrors.lastName = "Last Name is required";
        if (!nif) {
            tempErrors.nif = "NIF is required";
        } else if (!/^\d{9}$/.test(nif)) {
            tempErrors.nif = "NIF must be 9 digits";
        }
        return tempErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const tempErrors = validateFields();
        if (Object.keys(tempErrors).length === 0) {
            console.log("Record successful!");
            window.alert("Product added successfully!");

            // Update the product quantity
            const new_product = products[products.length - 1];
            new_product.product_quantity -= parseInt(productQuantity, 10);
            products.splice(products.length - 1, 1);
            products.push(new_product);
            updateProducts(products);
        } else {
            setErrors(tempErrors);
        }
    };

    return (
        <>
            <Sidebar active="sale_record" />
            <SearchBar />
            <div className="general-container">
                <PageTitle title="Sales Record" />
                <DataField
                    name="Product Name:"
                    placeholder="Input product name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
                {errors.productName && <div className="error">{errors.productName}</div>}
                
                <DataField
                    name="Product Quantity:"
                    placeholder="Input product quantity"
                    value={productQuantity}
                    onChange={(e) => setProductQuantity(e.target.value)}
                />
                {errors.productQuantity && <div className="error">{errors.productQuantity}</div>}
                
                <DataField
                    name="First Name:"
                    placeholder="Input client's first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && <div className="error">{errors.firstName}</div>}
                
                <DataField
                    name="Last Name:"
                    placeholder="Input client's last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && <div className="error">{errors.lastName}</div>}
                
                <NifOption
                    name="NIF:"
                    placeholder="Input client's NIF"
                    value={nif}
                    onChange={(e) => setNif(e.target.value)}
                />
                {errors.nif && <div className="error">{errors.nif}</div>}
                
                <SubmitButton text="Submit" onClick={handleSubmit} />
            </div>
        </>
    );
}
