import './App.css';
import Header from './common/header/Header'
import Pages from './pages/Pages'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Data from "./component/data"
import Sdata from "./component/shop/Sdata"
import { useState } from 'react';
import Cart from "./common/Cart/Cart"
import UnderConstruct from './pages/underConstruct';
import AuthForm from './component/Auth/AuthForm';
import Swal from "sweetalert2";

function App() {
  const {productItems}=Data;
  const {shopItems}=Sdata;
  const [cartItem,setCartItem]=useState([]);
  const addToCart=(product)=>{
    //console.log("Add to cart");
    Swal.fire({
      icon: "success",
      text: "Item Added To the Cart",
    });
    const producExit= cartItem.find((item)=>item.id===product.id);
    if(producExit)
     {
      setCartItem(cartItem.map((item)=>(item.id===product.id?{...producExit,qty:producExit.qty+1}:item)))
     }else{
      setCartItem([...cartItem,{...product,qty:1}])
     }
  }

  const decreaseQty=(product)=>{
    
    const producExit= cartItem.find((item)=>item.id===product.id);
    if(producExit.qty===1)
     {
      Swal.fire({
        icon: "success",
        text: "Item Got Deleted From Cart",
      });
      setCartItem(cartItem.filter((item)=> item.id !==product.id));
     }
     else{
      setCartItem(cartItem.map((item)=>(item.id===product.id?{...producExit,qty:producExit.qty-1}:item)))
     }

  }
  return (
   <>
   
    
    <Router>
        <Header cartItem={cartItem} />
           <Switch>
            <Route path='/' exact>
                <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}/ >
              </Route>
              <Route path='/cart' exact>
                <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty}/ >
              </Route>
              <Route path='/auth' exact>
                <AuthForm/>
              </Route>
              <Route path='/pages' exact>
                <UnderConstruct/>
              </Route>
              <Route path='/user' exact>
                <UnderConstruct/>
              </Route>
              <Route path='/vendor' exact>
                <UnderConstruct/>
              </Route>
              <Route path='/track' exact>
                <UnderConstruct/>
              </Route>
              <Route path='/contact' exact>
                <UnderConstruct/>
              </Route>

           </Switch> 
        
      </Router>
     
    
   </>
  );
}

export default App;
