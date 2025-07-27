// import { useEffect, useState } from "react"
// import { useOutletContext } from "react-router-dom"


// function Homepage() {

//     const [products, setProducts] = useState([])
//     const {cartList, setCartList} = useOutletContext()

//     useEffect(() => {
//         fetch('https://dummyjson.com/products')
//             .then(res => res.json())
//             .then(data => {
//                 setProducts(data.products)
//             })
//     }, [])

//     const updateCartList = (item) => {
//         if (cart_list.length > 0) {
//             const exists = cart_list.some(i => i.title === item.title)
//             if (!exists){
//                 cart_list.push({ title: item.title, img: item.images[0], quantity: 1 })
//             }
//             if (exists){
//                 cart_list = cart_list.map(element => {
//                     if (element.title === item.title){
//                         return({...element, quantity: element.quantity + 1})
//                     }
//                     else{
//                         return element
//                     }
//                 })
//             }
//         }
//         else {
//             cart_list.push({ title: item.title, img: item.images[0], quantity: 1 })
//         }

//     }

//     return (
//         <div id="homepage">
//             {
//                 products.map(item => {
//                     return (
//                         <div className="product-card">
//                             <img src={item.images[0]} alt={item.title} />
//                             <p className="product-title">{item.title}</p>
//                             <p className="product-stock-status">In Stock: {item.stock}</p>
//                             <button onClick={() => { updateCartList(item) }}>Add to Cart</button>
//                         </div>
//                     )
//                 })}
//         </div>
//     )
// }

// export default Homepage

import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Homepage = () => {

    const { cartList, setCartList } = useOutletContext()

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => { setCartList(data.products) })
    }, [])

    return (
        <div id="homepage">
            {
                cartList.map(item => {
                    return (
                        <div className="product-card" key={item.title}>
                            <img src={item.images[0]} alt={item.title} />
                            <p className="product-title">{item.title}</p>
                            <p className="product-stock-status">In Stock: {item.stock}</p>
                            <button>Add to Cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Homepage