import React from 'react';
import "./style.css";
import AnimatedNumber from "react-animated-number";

import { useSelector } from 'react-redux';

function Header() {

  const money = useSelector((state) => state.product.money)
  const total = useSelector((state) => state.product.total)

  return (
    <div className="header">
      Harcamak için{" "} 
      <AnimatedNumber 
      value={money - total} 
      formatValue={n => n.toFixed(0)} 
      duration={300}
      />{" "}  
      TL paranız var !
    </div>
  )
}

export default Header