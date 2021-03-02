import React from 'react'
import "./Store.css"
import Product from "./Product.js"
import {useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import {getProducts as listProducts} from "../redux/actions/productActions"

function Store() {

    const dispatch = useDispatch()

    const getProducts = useSelector(state => state.getProducts)
    const {products, loading, error} = getProducts;

    useEffect(() => {
        dispatch(listProducts())



    }, [dispatch])


    return (
        <div className="storescreen">
            <h2 className="storetitle">All Products</h2>
            <div className="store_products">
                {loading ? (
                    <h1>Loading...</h1>
                ): error ? (
                    <h2>{error}</h2>
                ) : (
                    products.map((product) => <Product 
                    key={product._id}
                    productId = {product._id}
                    name={product.name}
                    price={product.pice}
                    description={product.description}
                    imageUrl={product.imageUrl}
                    
                    />)


                )
            
            }


            </div>




        </div>


  






        
          
   
    )
}

export default Store

