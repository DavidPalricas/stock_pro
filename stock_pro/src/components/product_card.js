import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
import "../css/product_card.css";


function Card({product_info, histograms, supplier_info}) {
    const [product_model, product_name, product_quantity, product_description, product_price] = product_info;
    const image = findImage(product_name);
    const image_name = product_name + " Image";

    //const graphs_images = findGraphsImage(name);


    const navigate = useNavigate(); // Inicialize o useNavigate

   
    const price = "Price: " + product_price + "€";

    const model = "Model: " + product_model;

    


    useEffect(() => {
       
    }, []); 




    const redirectToProductPage = () => {
        navigate(`/product/${product_name}`, { state: {product_info,histograms,supplier_info,image} });
    };
    
    

    

    return (
        <button className="button-card" onClick={redirectToProductPage}>
            <div  className="card">
                <h2 className="quantity">{"x" + product_quantity}</h2>
                <img className="product-image" src={image} alt={image_name} />
                <hr />
                <h2 className="product-model">{model}</h2>
                <h4 className="product-name">{product_name}</h4>
                <hr />
                <p className="product-price">{price}</p>
                <p id="product-data">Get product Data</p>
            </div>
        </button>
    );
}

function findImage(name) {
    return require("../assets/img/" + name + ".jpg");
}


// hide the card 
function hideCard() {
    const card = document.querySelector('.card');
    card.style.display = "none";
}


export default Card;
