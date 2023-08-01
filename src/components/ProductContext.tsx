import React, { useState } from 'react'
import { createContext } from 'react'
interface Props{
    children:any
}
export const Cart = createContext('' as any)

const ProductContext:React.FC<Props> = ({children}) => {
    const [cart,setCart] = useState([])
  return (
    <Cart.Provider value={{cart,setCart}}>
        {children}
    </Cart.Provider>
  )
}

export default ProductContext