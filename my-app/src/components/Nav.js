import React from 'react'
import "./Nav.css"
import { Link } from "react-router-dom"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useSelector} from "react-redux"




function Nav() {

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty,item) => qty + Number(item.qty), 0)
    }
    return (
        <div >
        <div className="Nav">
            <div>
                <img className="logoimg" src="https://i.ibb.co/G2c79h0/amz-removebg-preview.png"/>
            </div>

   
            <div className="loc">
                <Link to="/">
           

            <button className="navbut">   <h3 className="droph3" id="addressh3">Home</h3>    </button>
            </Link>
              
            </div>
           
            <div className="search">
                

                <input id="sinput" placeholder="Search"/>
      

                
              
             


             <div  id="aboutus">
  
         
                    




                <button className="navbutabout"><h3 className="droph3">About Us</h3></button>
                <div class="dropdown-about">
                    <a href="/company"><button className="dropdownb">Company</button></a>
                    <a href="/team"><button className="dropdownb">Team</button></a>
                    <a href="/founders"><button className="dropdownb">Founders</button></a>
                </div>
                </div>




                <div  id="aboutus">
  
         
                    




  <button className="navbutabout"><h3 className="droph3">Contact Us</h3></button>
  <div class="dropdown-about">
      <a href="/offices"><button className="dropdownb">Offices</button></a>
      <a href="/warehouses"><button className="dropdownb">Warehouses</button></a>
      <a href="/support"><button className="dropdownb">Support</button></a>
  </div>
  </div>
              

                    
                <div className="sec3">



                    <Link to="/store">

            
               <button className="navbut"><h3 className="droph3" id="droph3s">Store</h3></button>
               </Link>
               
                </div>
              



           

                <div className="sec3">
                    <Link to="/cart">
                
                
                    <button className="navbutcart"> <ShoppingCartIcon /><h3 className="droph3" id="droph3s">Cart</h3><h2>{getCartCount()}</h2> </button>
                    </Link>
               
                </div>
              
               
                



            </div>


        </div>



       
       






    </div>
  

   
   


       
        
    )
}

export default Nav
