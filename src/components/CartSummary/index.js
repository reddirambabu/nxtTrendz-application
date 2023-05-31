// Write your code here
import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let totalAmount = 0
      cartList.forEach(eachItem => {
        const total = eachItem.quantity * eachItem.price
        totalAmount += total
      })
      console.log(totalAmount)

      return (
        <div className="summary-container">
          <div className="amount-section">
            <h1 className="amount-side-heading">
              Order Total: <span className="amount">{totalAmount}/-</span>
            </h1>
            <p className="cartList-length">{cartList.length} Items in cart</p>
          </div>

          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
