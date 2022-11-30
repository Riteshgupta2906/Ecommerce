import React from 'react'
import FlashCards from './flashCard';


const FlashDeals = ({productItems,addToCart})=>{
    return (
        <>
           <section className='flash background'>
            <div className='container '>
            <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
                <h1>FlashDeals</h1>
            </div>
               <FlashCards productItems={productItems} addToCart={addToCart} />
            </div>
           </section>
        </>
    )

}
export default FlashDeals;