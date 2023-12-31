import React from 'react'

const Cart = () => {
  return (
    <div className='cart'>
        <main><CartItem /></main>
        <aside>
            <h2>Subtotal: ${2000}</h2>
            <h2>Shipping: ${200}</h2>
            <h2>Tax: ${20}</h2>
            <h2>Total: ${1220}</h2>
        </aside>
    </div>
  );
}
const CartItem = ({imgSrc, name, price, qty, decrement,  increment, deteleteHandler, id,}) =>(
    <div className='cartItem'>
        <img src = {imgSrc} alt="Item" />
        <article>
            <h3>{name}</h3>
            <p>${price}</p>
        </article>
        <div>
            <button onClick={() => decrement(id)}>-</button>
            <p>{qty}</p>
            <button onClick={() => increment(id)}>+</button>

        </div>
        <AiFillDelete onClick={() => deteleteHandler(id)} />
    </div>

)

export default Cart