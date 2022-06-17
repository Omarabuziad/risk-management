import React, { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import {setItemState} from "../../redux/CustRisk";
import "./style.css";

function Item() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.customerResult);


  const [showInputs, setShowInputs] = useState(false);
  const [itemPercentage, setItemPercentage] = useState(0);

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handlePercentageChange = (itemPercentage)=>{
    if(itemPercentage>=0 && itemPercentage <5.1){
      return{
        style : { backgroundColor: "Green" } , 
        name : "منخفضة",
        type : "L",
        value : 1
      }
    }
    if(itemPercentage>=5.1 && itemPercentage <10.1){
      return{
        style : { backgroundColor: "yellow" } , 
        name : "متوسطة",
        type : "M" , 
        value : 2
      }
    }
    if(itemPercentage>=10.1 && itemPercentage <100){
      return{
        style : { backgroundColor: "red" } , 
        name : "مرتفعة",
        type : "H" , 
        value : 3
      }
    }
  }

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
              <input
                placeholder="###"
                value={input1}
                onChange={(e) => {
                  setInput1(e.target.value);
                  dispatch(setItemState({type : "I0" , value : "HHH"}))
                  setItemPercentage(
                    (
                      (Number(input1) / (Number(input1) + Number(input2))) *
                      100
                    ).toFixed(3)
                  );
                }}
              />
            </span>
            <span>
              <p>عدد عمليات العملاء الأفراد المقيمين</p>
              <input
                placeholder="###"
                value={input2}
                onChange={(e) => {
                  setInput2(e.target.value);
                  setItemPercentage(
                    (
                      (Number(input1) / (Number(input1) + Number(input2))) *
                      100
                    ).toFixed(3)
                  );
                }}
              />
            </span>
            <span>
              <p>إجمالى عدد عمليات عملاء الشركة الأفراد</p>
              <span>{Number(input1) + Number(input2)}</span>
            </span>
          </div>
        ) : null}
      </div>

      <span className="percentage">
        <p>النسبة</p>
        <span
          style={handlePercentageChange(itemPercentage)?.style}
        >
          {itemPercentage}
        </span>
      </span>

      <span className="results">
        <p>سلم (مدى) المخاطر المتأصلة</p>

        {handlePercentageChange(itemPercentage)?.type==="L"?<div>
          <p>منخفضه (0-5.1%)</p>
          <span
            style={handlePercentageChange(itemPercentage)?.style}
          >
            1
          </span>
        </div>:null}

        {handlePercentageChange(itemPercentage)?.type==="M"?<div>
          <p>متوسطة (5.1%-10.1%)</p>
          <span
            style={handlePercentageChange(itemPercentage)?.style}
          >
            2
          </span>
        </div>:null}

        {handlePercentageChange(itemPercentage)?.type==="H"?<div>
          <p>مرتفعة (10% فأكثر)</p>
          <span
            style={handlePercentageChange(itemPercentage)?.style}
          >
            3
          </span>
        </div>:null}

      </span>
    </div>
  );
}

export default Item;
