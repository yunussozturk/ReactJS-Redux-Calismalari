import React , {useEffect, useState} from 'react'
import "./style.css";
import Product from './Product';
import { useSelector } from 'react-redux';

function Products() {

  const [filteredProductValue , setFilteredProductValue] = useState([])

  const productValue = useSelector((state) => state.product.items)
  const filtered = useSelector((state) => state.product.filtered)

  useEffect(() =>{
    setFilteredProductValue(productValue)
    if((filtered.includes("woman") === true) && (filtered.includes("man") === false)){ 
      setFilteredProductValue(productValue.filter((item) => item.gender === "woman"))

      if((filtered.includes("sweatshirt") === true) && (filtered.includes("jean") === false)){
          setFilteredProductValue(productValue.filter((item) => item.gender === "woman" && item.title === "sweatshirt")) 
      }else if((filtered.includes("sweatshirt") === false) && (filtered.includes("jean") === true)){
          setFilteredProductValue(productValue.filter((item) => item.gender === "woman" && item.title === "jean")) 
      }else if((filtered.includes("sweatshirt") === true) && (filtered.includes("jean") === true)){
          setFilteredProductValue(productValue.filter((item) => item.gender === "woman")) 
      }
    }

    else if((filtered.includes("man") === true) && (filtered.includes("woman") === false)){ 
        setFilteredProductValue(productValue.filter((item) => item.gender === "man"))

        if((filtered.includes("sweatshirt") === true) && (filtered.includes("jean") === false)){
            setFilteredProductValue(productValue.filter((item) => item.gender === "man" && item.title === "sweatshirt")) 
        }else if((filtered.includes("sweatshirt") === false) && (filtered.includes("jean") === true)){
            setFilteredProductValue(productValue.filter((item) => item.gender === "man" && item.title === "jean")) 
        }else if((filtered.includes("sweatshirt") === true) && (filtered.includes("jean") === true)){
            setFilteredProductValue(productValue.filter((item) => item.gender === "man"))
        }
    }

    else if((filtered.includes("woman") === true) && (filtered.includes("man") === true)){ 
        setFilteredProductValue(productValue.filter((item) => item.gender === "woman" || item.gender === "man"))
        if((filtered.includes("sweatshirt") === true) && (filtered.includes("jean") === false)){
            setFilteredProductValue(productValue.filter((item) => item.title === "sweatshirt")) 
        }else if((filtered.includes("sweatshirt") === false) && (filtered.includes("jean") === true)){
            setFilteredProductValue(productValue.filter((item) => item.title === "jean"))
        }else if((filtered.includes("sweatshirt") === true) && (filtered.includes("jean") === true)){
            setFilteredProductValue(productValue)
        }
    }

    else if((filtered.includes("woman") === false) && (filtered.includes("man") === false)){
        if((filtered.includes("sweatshirt") === true) && (filtered.includes("jean") === false)){
            setFilteredProductValue(productValue.filter((item) => item.title === "sweatshirt"))           
        }
        else if((filtered.includes("sweatshirt") === false) && (filtered.includes("jean") === true)){
            setFilteredProductValue(productValue.filter((item) => item.title === "jean"))         
        }
    }
  },[filtered])

  return (
    <>
      {filteredProductValue.map((data , key={key}) => (
        <Product data={data} key={data.id} />
      ))
      }
    </>
  ) 
}

export default Products
