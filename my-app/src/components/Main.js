import React from 'react'
import "./Main.css"
import Product from "./Product.js"
import {useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import {getProducts as listProducts} from "../redux/actions/productActions"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';




SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



function Main() {


    const dispatch = useDispatch()

    const getProducts = useSelector(state => state.getProducts)
    const {products, loading, error} = getProducts;

    useEffect(() => {
        dispatch(listProducts())



    }, [dispatch])


    

  

    return (
        <div className="Main">
            <div className="back">

            </div>
        <Swiper

        observer = {true}
        observeParents = {true}
        spaceBetween={20}
        slidesPerView={4}
       navigation
       pagination={{clickable: true}}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

            {loading ? (
                    <h1>Loading...</h1>
                ): error ? (
                    <h2>{error}</h2>
                ) : (
                    products.map((product) => 
                    <SwiperSlide  key={product._id}  className="swiperc">
                        <div >
                    
                    <Product className="Productsc"
                    key={product._id}
                    productId = {product._id}
                    name={product.name}
                    price={product.pice}
                    description={product.description}
                    imageUrl={product.imageUrl}
                    
                    /> 
                    </div>

                    </SwiperSlide>)


                )
            
            }







      
        ...
      </Swiper>
      </div>
      


  




        

       
    )
}

export default Main
