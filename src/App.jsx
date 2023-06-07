import NavBar from './Navbar.jsx'
import CartContainer from './CartContainer.jsx'
import Modal from './Modal.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {calculateTotal, getCartItems} from './features/cartslice.jsx'


function App() {
const {cart, isLoading} = useSelector((state)=>state.cart);
const {showModal} = useSelector((state)=>state.modal)
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(calculateTotal())
}, [cart])

useEffect(()=>{
  dispatch(getCartItems())
},[])

if (isLoading){
  return <div className='modal-container'>
    <h2>Loading...</h2>
  </div>
}
return (
<div className="container">
    {showModal && <Modal />}
    <NavBar/>
    <CartContainer />
 </div>)
}
export default App;
