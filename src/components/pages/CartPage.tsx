import React, { useContext, useEffect, useState } from 'react'
import SinglePage from './SinglePage';
import { Cart } from '../ProductContext';

interface Props{
    cart:any
    setCart:any
}

const CartPage:React.FC = () => {
    const {cart,setCart} = useContext(Cart)
    const [total,setTotal] = useState('');

    useEffect(()=>{
        setTotal(cart.reduce((acc:any,curr:any)=>acc+Number(curr.price),0))
    },[cart])

  return (
    <div className='cart__container'>
        <span style={{fontSize:30}}>My Cart</span>
        <span style={{fontSize:30}}>Total:{total}</span>
        <div className="productContainer">
            {
                cart.map((product:any)=>(
                    <SinglePage product={product} key={product.id}/>
                ))
            }
        </div>
    </div>
  )
}

export default CartPage