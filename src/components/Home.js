import "./styles/Home.css"
import Product from "./Product";

const Home = () => {
    return ( 
        <div className = 'home'>
        <img className = 'home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

        <div className="home__row">
        <Product
        id = '12234321233'
        title = "Kindle Paperwhite – Now Waterproof with 2x the Storage – Ad-Supported"
        price = {129.99}
        rating = {2}
        image = "https://m.media-amazon.com/images/I/61O-eq1gqxL._AC_SL1000_.jpg"
        />
        <Product
        id = '12321233'
        title = "the lean startup"
        price = {11.93}
        rating = {5}
        image = "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        </div>
        <div className="home__row">
        <Product
        id = '12321233'
        title = "the lean startup"
        price = {11.93}
        rating = {5}
        image = "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
        />
        <Product
        id = '12321232343'
        title = "Apple AirPods Max - Sky Blue"
        price = {499.99}
        rating = {5}
        image = "https://m.media-amazon.com/images/I/81Tw0pLYUQL._AC_SL1500_.jpg"
        />
        <Product
        id = '12321233'
        title = "the lean startup"
        price = {11.93}
        rating = {3}
        image = "https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY436_FMwebp_QL65_.jpg"
        />
        </div>
        <div className="home__row">
        <Product
        id = '12321223'
        title = "SAMSUNG CJ890 Series 49-Inch Ultrawide QHD (3840x1080) Computer Monitor, 144Hz, Curved, HDMI, USB-C, Height Adjustable Stand, 3 Yr WRNTY (LC49J890DKNXZA)"
        price = {1247.94}
        rating = {5}
        image = "https://m.media-amazon.com/images/I/61Hh-0F7AbL._AC_SL1000_.jpg"
        />
        </div>
        


        </div>
     );
}
 
export default 
Home;