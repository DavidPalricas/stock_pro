import React from 'react';
import '../css/side_button.css';

function Button({ onClick, text, id, isActive }) {
  // Determina a classe a ser aplicada com base na prop isActive
  const buttonClassName = isActive ? "side_btn_active" : "side_btn";

  return (
    <button className={buttonClassName} onClick={onClick} id={id}>
      {text}
    </button>
  );
}

export default Button;
