import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem'
import { clearCart } from './features/cartslice';
import { openModal } from './features/modalslice';
const CartContainer = () => {
  const {cart, total, amount }= useSelector((state)=>state.cart)
  const dispatch = useDispatch();
 if (cart.length < 1){ 
  return (
   <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
   }
  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} cart={item} />
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => {
            dispatch(openModal())
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  )
       }

export default CartContainer
