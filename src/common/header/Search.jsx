import React from 'react'
import logo from './assets/images/logo.svg'
import './header.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Search = ({cartItem})=>{
    window.addEventListener("scroll",function(){
        const search=document.querySelector(".search")
        search.classList.toggle("active",window.scrollY>100)

    })
    return (
        <>
            <section className='search'>
                <div className="container c_flex">
                    <div className='logo width'>
                        <img src="./images/logo.png" alt='' ></img>
                    </div>
                    <div className="search-box f_flex">
                        <i className="fa fa-search"></i>
                        <input type='text' placeholder="Search and hit enter..."/>
                        <span>All category</span>
                    </div>
                    <div className="icon f_flex width">
                        
                        <Link to='/auth'>
                              <i className="fa fa-user icon-circle"></i>
                                
                             </Link>
                        <div className="cart">
                             <Link to='/cart'>
                                <i className="fa fa-shopping-bag icon-circle"></i>
                                <span>{cartItem.length===0? "":cartItem.length}</span>
                             </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
export default Search;