import './styles/CheckoutProduct.css'


const CheckoutProduct = ({id, title, image, price, rating}) => {
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

        <button className ="checkoutProduct__button">Remove from Cart</button>

        </div>
        </div>
     );
}
 
export default CheckoutProduct;