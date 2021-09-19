import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import './styles/Header.css'


const Header = () => {
    
    const [{cart}] = useStateValue();
    console.log(cart)
    return ( 
        <nav className = "header">
        <Link to = "/">
        <img className = "header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>
        <div className="header__search">
            <input type='text' className="header__searchInput"/>
            <img className = "header__searchIcon" src="https://cravegalleria.com/wp-content/themes/CraveLocationsTheme/img/searchIcon.png" alt="" />
        </div>
        
        <div className="header__nav">
        <Link to = "/login" className = 'header__link'>
        <div className="header__option">
            <span className = 'header__optionLineOne'>Hello</span>
            <span className = 'header__optionLineTwo'>Sign in </span>
        </div>
        </Link>
        {/* */}
        <Link to = "/" className = 'header__link'>
        <div className="header__option">
            <span className = 'header__optionLineOne'>Returns</span>
            <span className = 'header__optionLineTwo'>& Orders</span>
        </div>
        </Link>
        {/* */}
        <Link to = "/" className = 'header__link'>
        <div className="header__option">
            <span className = 'header__optionLineOne'>Your</span>
            <span className = 'header__optionLineTwo'>Prime</span>
        </div>
        </Link>
        {/* */}
        <Link to = "/checkout" className = 'header__link'>
        <div className="header__optionBasket">
        <img className = "header__searchIcon baskeyCount" src="https://cdn-icons-png.flaticon.com/512/34/34568.png" alt="" />
            <span className = 'header__optionLineTwo baskeyCount'>{cart?.length}</span>
        </div>
        </Link>

        </div>

        </nav>
     );
}
 
export default Header;