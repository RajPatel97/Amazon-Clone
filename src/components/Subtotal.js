import './styles/Subtotal.css'
import { useStateValue } from '../StateProvider';
import { getCartTotal } from '../Reducer';

const Subtotal = () => {
    const [{cart}] = useStateValue();

    return ( 
        <div className="subtotal">
        <p className="subtotal__heading">
            Subtotal({cart.length} items): 
            <strong>${getCartTotal(cart).toFixed(2)}</strong>
        </p>
        <small className="subtotal__gift">
            <input type="checkbox" />This order is a gift
        </small>
            <button>Proceed to checkout</button>

        </div>
     );
}
 
export default Subtotal;