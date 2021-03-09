import React from 'react'
import "./Nav.css"
import { Link } from "react-router-dom"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useSelector} from "react-redux"
import MenuIcon from '@material-ui/icons/Menu';




function Nav({click}) {

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
                <div className="nav_link">
                <Link to="/">
           

            <button className="navbut">   <h3 className="droph3" id="addressh3">Home</h3>    </button>
            </Link>
            </div>
              
            
           
       
      

                


             <div  id="aboutus">


                 <div className="dropdowns_wrapper">


                 <div className="nav_link">
  
         
    

                <button className="navbutabout" ><h3 className="droph3">About Us</h3></button>
                <div className="dropdown-about" id="topdrop">
                    <Link to="/company" ><button className="dropdownb">Company</button></Link>
                  <Link to="/team"><button className="dropdownb">Team</button></Link>  
                   <Link to="/founders"> <button className="dropdownb">Founders</button></Link>
                </div>
                </div>
                </div>
                </div>




                <div  id="aboutus">

                    <div className="dropdowns_wrapper" >
  
         
                    


<div className="nav_link">

  <button className="navbutabout"><h3 className="droph3">Contact Us</h3></button>
  <div className="dropdown-about" id="topdrop">
     <Link to="/offices"> <button className="dropdownb">Offices</button></Link>
      <Link to="/warehouses"><button className="dropdownb">Warehouses</button></Link>
    <Link to="/support">  <button className="dropdownb">Support</button></Link>
  </div>
  </div>
  </div>
  </div>
              

                    
                <div className="sec3">

                    <div className="nav_link">



                    <Link to="/store">

            
               <button className="navbut"  id="droph3s"><h3 >Store</h3></button>
               </Link>
               </div>
               
                </div>
              



           

                <div className="sec33">
                    <div className="nav_linker">
                    <Link to="/cart">

                    <button className="navbutcart"> <ShoppingCartIcon /><h3  id="droph3ss">Cart</h3><h2>{getCartCount()}</h2> </button>
                    </Link>
                
                  

                    </div>
               
                </div>

                <div  className="hamburger_menu" onClick={click}>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>



                    
                    
                    </div>
              
               
                



            </div>


        </div>



       
       






    </div>
  

   
   


       
        
    )
}

export default Nav