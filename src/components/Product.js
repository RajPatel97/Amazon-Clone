import './styles/Product.css'

const Product = ({id, title, image,price, rating}) => {

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
        <button>Add to Cart</button>
        </div>
     );
}
 
export default Product;