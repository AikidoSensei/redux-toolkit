import { ChevronDown, ChevronUp } from './icons'
import { remove, increase, decrease } from './features/cartslice'
import { useDispatch } from 'react-redux'
const CartItem = ({ cart }) => {
  const dispatch = useDispatch()
  const { id, title, img, price, amount } = cart
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button className='remove-btn' onClick={() => dispatch(remove(id))}>
          remove
        </button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => dispatch(increase(id))}>
          <ChevronUp />
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn' onClick={() => {
          if (amount === 1){
            dispatch(remove(id));
            return
          }
          dispatch(decrease(id))}}>
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}
export default CartItem
