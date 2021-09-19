import './styles/Checkout.css'
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
    const [{cart}] = useStateValue();

    return ( 
        <div className="checkout">
        <img className ='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg" alt="" />

        {cart?.length === 0 ? (
            <div className="s">
                <h2>Your Cart is Empty</h2>
                <p>You have no items in your shopping cart. To add one or more items to your cart, click the "Add to Cart" button at the bottom of an item </p>
            </div>
        ):(
            <div className="s">
                <h2 className ="checkout__title">Your Cart</h2>
                {cart.map(item=>(
                    <CheckoutProduct
                    id = {item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}

                    />
                ))}
            </div>
        )}

        </div>
     );
}
 
export default Checkout;
