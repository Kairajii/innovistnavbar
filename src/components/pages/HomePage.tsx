import React, { useContext, useState } from 'react'
import { faker } from '@faker-js/faker'
import '../style.css'
import SinglePage from './SinglePage';
import { Cart } from '../ProductContext';


faker.seed(100)
const HomePage:React.FC = () => {
    const {cart,setCart} = useContext(Cart)
    const productsArray = [...Array(20)].map(()=>(
        {
            id:faker.datatype.uuid(),
            name:faker.commerce.productName(),
            price:faker.commerce.price(),
            image:faker.image.image(),
        }
    ));
    const [products] = useState(productsArray)
  return (
       
     <div className='productsConteiner'>
        {
            products.map((product)=>(
                <SinglePage product={product} 
                 key={product.id}/>
            ))
        }
    </div>
  

  )
}

export default HomePage