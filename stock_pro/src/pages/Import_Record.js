import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import PageTitle from "../components/page_title";
import DataField from "../components/data_field";
import SubmitButton from "../components/submit_button";
import SearchBar from "../components/search_bar";
import "../css/import_record.css";

export default function Import_Record({ products, updateProducts }) {
    const navigate = useNavigate();
    const [productName, setProductName] = useState("");
    const [productModel, setProductModel] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [supplierName, setSupplierName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [iban, setIban] = useState("");
    const [address, setAddress] = useState("");
    const [nif, setNif] = useState("");

    const [errors, setErrors] = useState({});

    const validateFields = () => {
        let tempErrors = {};
        if (!productName) tempErrors.productName = "Product Name is required";
        if (!productModel) {
            tempErrors.productModel = "Product Model is required";
        } else if (!/^[A-Z0-9]{2}-[A-Z0-9]{2}-[A-Z0-9]{2}$/.test(productModel)) {
            tempErrors.productModel = "Product Model must be in the format XX-XX-XX";
        }
        if (!productQuantity) {
            tempErrors.productQuantity = "Product Quantity is required";
        } else if (!/^\d+$/.test(productQuantity)) {
            tempErrors.productQuantity = "Product Quantity must be a number";
        }
        if (!supplierName) tempErrors.supplierName = "Supplier Name is required";
        if (!phoneNumber) {
            tempErrors.phoneNumber = "Phone number is required";
        } else if (!/^\+\d{1,3}\d{9}$/.test(phoneNumber)) {
            tempErrors.phoneNumber = "Phone number must be in the format +CCCXXXXXXXXX";
        }
        if (!iban) {
            tempErrors.iban = "IBAN is required";
        } else if (!/^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/.test(iban)) {
            tempErrors.iban = "IBAN must be in the correct format";
        }
        if (!address) tempErrors.address = "Address is required";
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
            window.alert("Successfully imported product!");

            // Update the last product
            updateProducts((prevProducts) => {
                const updatedProducts = [...prevProducts];
                let product = updatedProducts[0];
                
                product.product_info[2] += parseInt(productQuantity, 10); //product_info[2] -> product_quantity
                console.log(updatedProducts);
                return updatedProducts;
            });
            navigate("/stock");
        } else {
            setErrors(tempErrors);
        }
    };

    return (
        <>
            <Sidebar active="import_record" />
            <SearchBar/>
            <div className="import-general-container">
                <PageTitle title="Import Record" />
                <DataField
                    name="Product Name:"
                    placeholder="Input product name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
                {errors.productName && <div className="error">{errors.productName}</div>}
                
                <DataField
                    name="Product Model:"
                    placeholder="Input product model"
                    value={productModel}
                    onChange={(e) => setProductModel(e.target.value)}
                />
                {errors.productModel && <div className="error">{errors.productModel}</div>}
                
                <DataField
                    name="Product Quantity:"
                    placeholder="Input product quantity"
                    value={productQuantity}
                    onChange={(e) => setProductQuantity(e.target.value)}
                />
                {errors.productQuantity && <div className="error">{errors.productQuantity}</div>}
                
                <DataField
                    name="Supplier Name:"
                    placeholder="Input supplier's name"
                    value={supplierName}
                    onChange={(e) => setSupplierName(e.target.value)}
                />
                {errors.supplierName && <div className="error">{errors.supplierName}</div>}
                
                <DataField
                    name="Phone number:"
                    placeholder="Input supplier's phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
                
                <DataField
                    name="IBAN:"
                    placeholder="Input supplier's IBAN"
                    value={iban}
                    onChange={(e) => setIban(e.target.value)}
                />
                {errors.iban && <div className="error">{errors.iban}</div>}
                
                <DataField
                    name="Address:"
                    placeholder="Input supplier's address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                {errors.address && <div className="error">{errors.address}</div>}
                
                <DataField
                    name="NIF:"
                    placeholder="Input supplier's NIF"
                    value={nif}
                    onChange={(e) => setNif(e.target.value)}
                />
                {errors.nif && <div className="error">{errors.nif}</div>}
                
                <SubmitButton text="Submit" onClick={handleSubmit} />
            </div>
        </>
    );
}
