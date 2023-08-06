import React from 'react'
import { toast } from 'react-hot-toast';
const img1 = "";
const img2 = "";
const Home = () => {
    const productList = [
        {
            name:"Mac Book",
            price: 12000,
            imgSrc: img1,
            id: "ahdjkdcdlk",
        },
        {
            name:"Black shoes",
            price: 800,
            imgSrc: img2,
            id: "ahdscsdvfgfjkdcdlk",
        },
    ];

    const addToCartHandler = (options) =>{
        console.log(options);
        toast.success("Added to Cart")
    };

  return (
    <div className='home'>
        {
            productList.map((i) => (
                <ProductCard key={i.id} imgSrc={i.imgSrc} name={i.name} price={i.price} id={i.id} handler={addToCartHandler} />
            ))
        }
    </div>
  )
}
const ProductCard = ({ name, id, price, handler, imgSrc}) =>(
    <div className='productCard'>
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>Add to Cart</button>
    </div>
)

export default Home