import React, { useContext } from 'react'
import { Cart } from '../ProductContext'
interface Props {
    product:any
    
}
const SinglePage:React.FC<Props> = ({product}) => {
    const {cart,setCart} = useContext(Cart)
  return (
    <>
    <div className="products__detail">
                <img src={product.image} alt={product.name} />
                <div className="productDesc">
                    <span>{product.name}</span>
                    <span>{product.price}.substring(0,3)</span>
                </div>

                {
                     cart.includes(product) ? <button className='remove'onClick={()=>setCart(
                        cart.filter((c:any)=>c.id !== product.id)
                    )}>Remove from Cart</button>

                    : <button className='add' onClick={()=>setCart([...cart,product])}>Add to Cart</button>

                }


                
                
                </div>
    </>
  )
}

export default SinglePage