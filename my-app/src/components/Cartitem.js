import React from 'react'
import "./Cartitem.css"
import {Link} from "react-router-dom"
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

function Cartitem({item, qtyChangeHandler, removeHandler}) {
    return (
        <div className="cartitem">
            <div className="cartitem_image">
                <img src={item.imageUrl} alt={item.name}></img>


            </div>
            <Link to={`/product/${item.product}`} className="cartitem_name">
                <p>{item.name}</p>

            
            </Link>

            <p className="cartitem_price">${item.price} </p>

            <select className="cartitem_select" value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
                {
                    [...Array(item.countInStock).keys()].map((x) => (
                        <option value={x + 1} key={x+1}>{x + 1}</option>
                    ))


                }
               

            </select>
            <button className="cartitem_deleteBtn" onClick={() => removeHandler(item.product)}>
             <RemoveShoppingCartIcon />

            </button>


            
            
        </div>
    )
}

export default Cartitem
