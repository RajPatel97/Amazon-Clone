import { useStateValue } from '../StateProvider';
import './styles/Product.css'

const Product = ({id, title, image,price, rating}) => {

    const [{}, dispatch] = useStateValue();

    const addToBasket =()=>{
        //add item to backet
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title: title, 
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return ( 
        <div className="product">
        <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
        <small>$</small>
        <strong>{price}</strong>
        </p>
        <dic className="product__rating">
            {
                Array(rating).fill().map((item =>(
                    <p>⭐</p>
                )))
            }
        </dic>
        
        </div>

        <img src={image} alt="" />
        <button onClick = {addToBasket}>Add to Cart</button>
        </div>
     );
}
 
export default Product;