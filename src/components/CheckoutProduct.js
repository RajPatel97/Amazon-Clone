import './styles/CheckoutProduct.css'
import { useStateValue } from '../StateProvider';

const CheckoutProduct = ({id, title, image, price, rating}) => {

    const [{cart}, dispatch] = useStateValue();

    const removeFromCart = ()=>{
        //removing items from cart
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id : id,
        })
    }

    return ( 
        <div className="checkoutProduct">
        <img className = "checkoutProduct__image" src={image} alt="" />
        <div className="checkoutProduct__info">
        <p className = "checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
        </p>

        <dic className="checkoutProduct__rating">
            {
                Array(rating).fill().map((item =>(
                    <p>⭐</p>
                )))
            }
        </dic>

        <button onClick = {removeFromCart} className ="checkoutProduct__button">Remove from Cart</button>

        </div>
        </div>
     );
}
 
export default CheckoutProduct;