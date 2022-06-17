import React, { useState } from "react";
import "./style.css";

function Item() {
  const [showInputs, setShowInputs] = useState(false);

  const showInputsHandler = () => {
    if (showInputs) {
      setShowInputs(false);
    } else {
      setShowInputs(true);
    }
  };

  return (
    <div className="itemContainer">
      <span className="itemNumber">1</span>
      <p>عدد عمليات العملاء الأفراد غير المقيمين</p>
      <div className="inputsContainer">
        <p onClick={showInputsHandler}>إدخال القيم</p>
        {showInputs ? (
          <div>
            <span>
              <p>عدد عمليات العملاء الأفراد غيرالمقيمين</p>
              <input placeholder="###"/>
            </span>
            <span>
              <p>عدد عمليات العملاء الأفراد المقيمين</p>
              <input placeholder="###"/>
            </span>
            <span>
              <p>إجمالى عدد عمليات عملاء الشركة الأفراد</p>
              <input placeholder="###" />
            </span>
          </div>
        ) : null}
      </div>

      <span className="percentage">

      </span>


    </div>
  );
}

export default Item;
