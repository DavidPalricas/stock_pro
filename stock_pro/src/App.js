import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Stock from './pages/Stock';
import About from './pages/About';
import New_Product from './pages/New_Product';
import Import_Record from './pages/Import_Record';
import Sales_Record from './pages/Sales_Record';
import Product from './pages/Product';
import Profit from './pages/Profit';
import { useState } from 'react';
import WarningPopup from './components/WarningPopup';

// Import images for the histograms
import denim_skirt_month from './assets/graphs/img/Denim_Skirt/month.jpg';
import denim_skirt_6months from './assets/graphs/img/Denim_Skirt/half_year.jpg';
import denim_skirt_year from './assets/graphs/img/Denim_Skirt/year.jpg';

import bag_month from './assets/graphs/img/Women_Bag/month.jpg';
import bag_6months from './assets/graphs/img/Women_Bag/half_year.jpg';
import bag_year from './assets/graphs/img/Women_Bag/year.jpg';

import red_dress_month from './assets/graphs/img/Red_Dress/month.jpg';
import red_dress_6months from './assets/graphs/img/Red_Dress/half_year.jpg';
import red_dress_year from './assets/graphs/img/Red_Dress/year.jpg';

import jacket_month from './assets/graphs/img/Bomber_Jacket/month.jpg';
import jacket_6months from './assets/graphs/img/Bomber_Jacket/half_year.jpg';
import jacket_year from './assets/graphs/img/Bomber_Jacket/year.jpg';

/*
 product_info = [product_model, product_name, product_price, product_description, product_quantity, product_threshold]
 histograms = [month, 6months, year]
 supplier_info = [supplier_name, supplier_phone, supplier_iban, supplier_address, supplier_nif]
*/
export var initialState = [
  {   
    product_info: ["XA-B2-O9", "Denim Skirt", 10, "A beautiful denim skirt for the summer", 20, 5],
    histograms: [denim_skirt_month, denim_skirt_6months, denim_skirt_year],
    supplier_info: ["Glamour de SirKazzio", "+351 912345678", "PT50 1234 5678 9012 3456 7890 1", "Rua do Ouro", "123456789"]
  },
  {   
    product_info: ["KJ-09-LO", "Women Bag", 10, "This is a product description", 50, 10],
    histograms: [bag_month, bag_6months, bag_year],
    supplier_info: ["Fox Fashion", "+351 934674978", "PT50 1336 5279 9614 25416 7520 1", "Rua do Texugo", "234 567 890"]
  },
  {   
    product_info: ["N0-V2-XP", "Red Dress", 10, "Beautiful red dress for the summer", 70, 15],
    histograms: [red_dress_month, red_dress_6months, red_dress_year],
    supplier_info: ["Estilo Lusitano", "+351 923456789", "PT50 0056 7890 1234 5678 9012 3", "Rua de Ovar", "567 890 123"]
  },
  { 
    product_info: ["E4-Q1-AA", "Bomber Jacket", 10, "Very nice jacket for the winter", 100, 2],
    histograms: [jacket_month, jacket_6months, jacket_year],
    supplier_info: ["Vestuário de Almondêgas", "+351 912345678", "PT50 0002 0123 4567 8901 2345 6", "Rua das Gertrudes", "123456789"]
  }
];

function App() {
  const [products, setProducts] = useState(initialState); 
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const updateProductQuantity = (productName, newQuantity) => {
    const updatedProducts = products.map(product => {
      if (product.product_info[1] === productName) {
        product.product_info[2] = newQuantity;
        if (newQuantity < product.product_info[5]) {
          setShowWarning(true);
          setWarningMessage(`Warning: The quantity of ${productName} is below the threshold of ${product.product_info[5]}.`);
        } else {
          setShowWarning(false);
        }
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return (
    <>  
      <Router>
        <Routes>
          <Route index element={<Stock products={products} />} />
          <Route path="/stock" element={<Stock products={products} />} />
          <Route path="/new_product" element={<New_Product products={products} updateProducts={setProducts} />} />
          <Route path="/sale_record" element={<Sales_Record products={products} updateProducts={setProducts} />} />
          <Route path="/import_record" element={<Import_Record products={products} updateProducts={setProducts} />} />
          <Route path="/product/:name" element={<Product products={products} updateProductQuantity={updateProductQuantity} />} />
          <Route path="/profit/:name" element={<Profit />} />
        </Routes>
        {showWarning && (
          <WarningPopup
            message={warningMessage}
            onClose={() => setShowWarning(false)}
          />
        )}
      </Router>
    </>
  );
}

export default App;
