import { useOutletContext } from "react-router-dom"

function Cart() {

  const { cartList, setCartList } = useOutletContext()

  return (
    <div>
      <div>
        <h1>Products in cart</h1>
        <div>
          {
            cartList.map(item => {
              return (
                <div>
                  <div>
                    <p>{item.title}</p>
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div>
                    <button>-</button>
                    <p>{item.quantity}</p>
                    <button>+</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div>Checkout</div>
    </div>
  )
}

export default Cart