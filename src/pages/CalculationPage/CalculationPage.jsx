import React , {useState} from 'react';
import "./style.css"
import CustomerRisk from "../../components/CustomerRisk/CustomerRisk";
import CountryRisk from "../../components/CountryRisk/CountryRisk";
import ProductsAndCountries from "../../components/ProductsAndCountries/ProductsAndCountries";
import ServiceChannels from "../../components/ServiceChannels/ServiceChannels";


const navCategory = [
    "قنوات تقديم الخدمة",
    "المنتجات و البلدان",
    "مخاطر البلدان",
    "مخاطر العملاء",
  ];

function CalculationPage() {

    const [navSelected, setNavSelected] = useState(3)

  const navBarShow = (i)=>{
    setNavSelected(i)
  }




  return (
    <div className='calculationContainer'>
     <nav>
      <ul className='category'>
        {navCategory.map((elem,i)=>{
          return <li key={i} style={ i === navSelected ? {borderBottom : "3px solid black"} : null} onClick={()=>{navBarShow(i)}}>{elem}</li>
        })}
      </ul>
     </nav>

     {navSelected === 3 ? <CustomerRisk /> : null}
     {navSelected === 2 ? <CountryRisk /> : null}
     {navSelected === 1 ? <ProductsAndCountries /> : null}
     {navSelected === 0 ? <ServiceChannels /> : null}
    </div>
  )
}

export default CalculationPage