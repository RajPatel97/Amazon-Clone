import "./styles/Home.css"
import Product from "./Product";

const Home = () => {
    return ( 
        <div className = 'home'>
        <img className = 'home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

        <div className="home__row">
        <Product
        id = '12321233'
        title = "the lean startup"
        price = {11.93}
        rating = {5}
        image = "https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY436_FMwebp_QL65_.jpg"
        />
        <Product
        id = '12321233'
        title = "the lean startup"
        price = {11.93}
        rating = {5}
        image = "https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY436_FMwebp_QL65_.jpg"
        />
        </div>
        


        </div>
     );
}
 
export default 
Home;