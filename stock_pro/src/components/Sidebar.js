import "../css/sidebar.css";
import Button from "./side_button";
import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ active }) {
  return (
    <>
      <div className="sidebar">
        <img src={require('../assets/img/Logo.png')} id="logo" alt="Stock Pro Logo"></img>
        <Link to="/stock">
          <Button text="Stock" id="stock" isActive={active === "stock"} />
        </Link>
        <Link to="/new_product">
          <Button text="New Product" id="new product" isActive={active === "new_product"} />
        </Link>
        <Link to="/sale_record">
          <Button text="Sale-Record" id="sale record" isActive={active === "sale_record"} />
        </Link>
        <Link to="/import_record">
          <Button text="Import-Record" id="import record" isActive={active === "import_record"} />
        </Link>
        <Link href="">
          {/*<Button text="About" onClick={()=> window.alert("O nosso sitema não garante backup de dados.")}/>*/}
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
