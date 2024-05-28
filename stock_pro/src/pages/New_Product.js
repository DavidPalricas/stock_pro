import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import PageTitle from "../components/page_title";
import SearchBar from "../components/search_bar";
import DataField from "../components/data_field";
import SubmitButton from "../components/submit_button";
import '../css/new_product.css';

import { initialState } from "../App";

export default function New_Product({ products, updateProducts }) {
    const navigate = useNavigate();
    
    const [productName, setProductName] = useState("");
    const [productModel, setProductModel] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [productCategory, setProductCategory] = useState("clothing");
    const [productDescription, setProductDescription] = useState("");
    const [productImage, setProductImage] = useState(null);
    const [quantityThreshold, setQuantityThreshold] = useState("");

    const [errors, setErrors] = useState({});

    const validateFields = () => {
        let tempErrors = {};
        if (!productName) tempErrors.productName = "Product Name is required";
        if (!productModel) {
            tempErrors.productModel = "Product Model is required";
        } else if (!/^[A-Z0-9]{2}-[A-Z0-9]{2}-[A-Z0-9]{2}$/.test(productModel)) {
            tempErrors.productModel = "Product Model must be in the format XX-XX-XX";
        }
        if (!productPrice) {
            tempErrors.productPrice = "Product Price is required";
        } else if (!/^\d+(\.\d{1,2})?$/.test(productPrice)) {
            tempErrors.productPrice = "Product Price must be a valid number";
        }
        if (!productQuantity) {
            tempErrors.productQuantity = "Product Quantity is required";
        } else if (!/^\d+$/.test(productQuantity)) {
            tempErrors.productQuantity = "Product Quantity must be a number";
        }
        if (!productDescription) tempErrors.productDescription = "Product Description is required";
        if (!productImage) tempErrors.productImage = "Product Image is required";
        if (!quantityThreshold) {
            tempErrors.quantityThreshold = "Quantity Threshold is required";
        } else if (!/^\d+$/.test(quantityThreshold)) {
            tempErrors.quantityThreshold = "Quantity Threshold must be a number";
        }
        return tempErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const tempErrors = validateFields();
        if (Object.keys(tempErrors).length === 0) {
            console.log("Product added successfully!");
            window.alert("Product added successfully!");

            // // Update the product list
            //const newProduct = {
            //product_info: [productModel, productName, parseFloat(productPrice), productDescription, parseInt(productQuantity, 10), parseInt(quantityThreshold, 10)],
            //histograms: [],
            //supplier_info: []
            //};
            //updateProducts([...products, newProduct]);
            navigate("/stock");
        } else {
            setErrors(tempErrors);
        }
        console.log("Product added successfully!");
        //window.alert("Product added successfully!");

        // Get the last product
        let lastProduct = initialState[initialState.length - 1];

        // Change the model of the last product
        lastProduct.product_info[0] = "E4-Q1-AB"; 
    };

    return (
        <>
            <Sidebar active="new_product" />
            <SearchBar />
            <div className="new-product-container">
                <PageTitle title="Add a new product to your catalog!" />
                <div className="form-container">
                    <form>
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
                            name="Price (€):"
                            placeholder="Input product price"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                        />
                        {errors.productPrice && <div className="error">{errors.productPrice}</div>}

                        <DataField
                            name="Quantity:"
                            placeholder="Input product quantity"
                            value={productQuantity}
                            onChange={(e) => setProductQuantity(e.target.value)}
                        />
                        {errors.productQuantity && <div className="error">{errors.productQuantity}</div>}

                        <DataField
                            name="Quantity Threshold to send an alert:"
                            placeholder="Input quantity threshold"
                            value={quantityThreshold}
                            onChange={(e) => setQuantityThreshold(e.target.value)}
                        />
                        {errors.quantityThreshold && <div className="error">{errors.quantityThreshold}</div>}

                        <div className="form-group">
                            <label htmlFor="product-category">Category</label>
                            <select
                                id="product-category"
                                name="product-category"
                                value={productCategory}
                                onChange={(e) => setProductCategory(e.target.value)}
                            >
                                <option value="clothing">Clothing</option>
                                <option value="accessories">Accessories</option>
                                <option value="shoes">Shoes</option>
                            </select>
                        </div>

                        <DataField
                            name="Description:"
                            placeholder="Input product description"
                            value={productDescription}
                            onChange={(e) => setProductDescription(e.target.value)}
                            textarea
                        />
                        {errors.productDescription && <div className="error">{errors.productDescription}</div>}

                        <div className="form-group">
                            <label htmlFor="product-image">Image</label>
                            <input
                                type="file"
                                id="product-image"
                                name="product-image"
                                onChange={(e) => setProductImage(e.target.files[0])}
                                required
                            />
                            {errors.productImage && <div className="error">{errors.productImage}</div>}
                        </div>

                        <div className="submit-button-container">
                            <button className="submit-button" type="submit" onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
