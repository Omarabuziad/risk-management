import React from 'react';
import "./style.css";

import Item from "../Item/Item";












function CustomerRisk() {
  return (
    <div className="CustomerRiskContainer">

      <nav className='CustomerRiskContainer_nav'>
      <ul>
         <li>Items</li>
         <li>Conclusion</li>
      </ul>
      </nav>

      <div>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      </div>




    </div>
  )
}

export default CustomerRisk