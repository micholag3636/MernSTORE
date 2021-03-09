import React from 'react'
import "./SideDrawer.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"


function SideDrawer({show, click}) {

    const sideDrawerClass = ["sidedrawer"];
    
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty,item) => qty + Number(item.qty), 0)
    }





    if(show){
        sideDrawerClass.push("show")

    }






    return (
        <div className={sideDrawerClass.join(" ")}>
            <div className="sidedrawer_links" onClick={click}>




                

                
                  

<Link to="/">


<button className="navbut">   <h3 className="droph3" id="addressh3">Home</h3>    </button>
</Link>





                    
        

                    
                   



                        <Link to="/cart">



<button className="navbutcart" ><ShoppingCartIcon /><h3  id="droph3ss">Cart</h3><h2>{getCartCount()}</h2></button>




</Link>




<Link to="/store">



<button  className="navbutcarts"><h3 className="droph3" id="droph3s">Store</h3></button>




</Link>



<span>

   
        
    <div  id="aboutus">
  
         
                    


 
  
    <button className="navbutabout"><h3 className="droph3">Contact Us</h3></button>
    <div class="dropdown-about">
       <Link to="/offices"> <button className="dropdownb">Offices</button></Link>
        <Link to="/warehouses"><button className="dropdownb">Warehouses</button></Link>
      <Link to="/support">  <button className="dropdownb">Support</button></Link>
    </div>
    </div>

                


    </span>





    <span>
    <div  id="aboutus">







<button className="navbutabout"><h3 className="droph3">About Us</h3></button>
<div class="dropdown-about">
   <Link to="/company" ><button className="dropdownb">Company</button></Link>
 <Link to="/team"><button className="dropdownb">Team</button></Link>  
  <Link to="/founders"> <button className="dropdownb">Founders</button></Link>
</div>

</div>




    </span>







                  


             
               </div>
            </div>
     
    )
}

export default SideDrawer

