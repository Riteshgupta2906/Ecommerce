import React from 'react'
import Footer from '../common/Footer/Footer';
import Annocument from '../component/announcement/Announce';
import Discount from '../component/discount/Discount';
import FlashDeals from '../component/FlashDeals/flashDeals';
import Home from '../component/mainPage/Home'
import NewArrival from '../component/newArrivals/NewArrival';
import Shop from '../component/shop/Shop';
import TopCate from '../component/top/TopCate';
import Wrapper from '../component/Wrapper/Wrapper';

const Pages = ({productItems,cartItem,addToCart,shopItems})=>{
    return (
        <>
            <Home cartItem={cartItem}/>
            <FlashDeals productItems={productItems} addToCart={addToCart}/>
            <TopCate/>
            <NewArrival/>
            <Discount/>
          
            <Shop shopItems={shopItems} addToCart={addToCart}/>
            <Annocument/>
            <Wrapper/>
            <Footer/>
        </>
    )

}
export default Pages;