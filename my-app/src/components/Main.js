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
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {useState, useRef} from "react"




SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);



function Main() {


    const dispatch = useDispatch()


    const getProducts = useSelector(state => state.getProducts)


    const {products, loading, error} = getProducts;









    const [slide,setSlide] = useState(products.slice(4,8))
    const [init,setInit] = useState(products)






    useEffect(() => {
        dispatch(listProducts())
        console.log(slide)
        console.log(init)



    }, [dispatch])

    

    const [start,setStart] = useState(0)
    const [end,setEnd] = useState(4)


    const [num,setNum] = useState(0)

    const [numslide,setNumslide] = useState(1)

    
    const [auto,setAuto] = useState(true)


    /*
    useEffect(() => {
        
        setStart(prevStart => prevStart + 4)
setEnd(prevEnd => prevEnd + 4)
 setStart(prevStart => prevStart )
 setEnd(prevEnd => prevEnd )
 
setStart(4)
setEnd(8)
    }, [num])
    */
   


    const isInitialMount = useRef(true);

useEffect(() => {
  if (isInitialMount.current) {
     isInitialMount.current = false;
  } else {



    
 setStart( prevStart => prevStart +4)
 setEnd(prevEnd => prevEnd + 4)
 setAuto(false)
 



    


      
  
}}, [num]);


   


    

  

    return (
        <div className="Main">
            <div className="back">

            </div>
        <Swiper


observer = {true}


observeParents = {true}



actionClickable = {true}
pagination





autoplay = {  {disableOnInteraction: false, delay: 1000 }}




centeredSlides = {true}

preventClicks = {true}



loop = {true}
loopedSlides = {4}















 
       
        spaceBetween={10}
        slidesPerView={numslide}
        direction = "horizontal"
     
        
        

        
        navigation = {{
            nextEl: '.swiper-button-next',
                 prevEl: '.swiper-button-prev',
               }}
   
     


      

       
  
        


      
          
      
        /*
          onClick={() =>{
            setStart(start + 4)
            setEnd(end + 4)
            
            
             console.log("done")
             
             } }
             */

  

      
        onSlideChange={() =>{
            console.log(start,end)
       
            
             console.log("done")}}

        onSwiper={(swiper) => console.log(swiper)}
      
      >

       

            {loading ? (
                    <h1>Loading...</h1>
                ): error ? (
                    <h2>{error}</h2>
                ) : (
                    products.slice(start,end).map((product) => 
                    <SwiperSlide  key={product._id}  className="swiperc">
                        <div >
                    
                    <Product className="Productsc"
                    key={product._id}
                    productId = {product._id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    imageUrl={product.imageUrl}

                  
                            
                    
                    /> 
                    </div>
               



                 <div







                 onClick = { () =>{


                
        

                
           
            
                    
                      
                  
                
          

                  setNum(prevNum => prevNum + 1)
                    console.log(num) 
                     
                     
                  
                    
               
                  

                    /*
               
    
    
 setStart(prevStart => prevStart + 4)
setEnd(prevEnd => prevEnd + 4)
 setStart(prevStart => prevStart )
 setEnd(prevEnd => prevEnd )
       
 window.location.reload();
 
 
 console.log(start,end)
 */



    
    
     console.log("done")}}
     
                    
                    
                    
                    id="swiper-button-next" className="swiper-button-next"> </div>
                    <div onClick={() =>{
                      
                      

                        if (start === 0){
                            console.log("Cant go back")


                        } else {


                        setStart(start - 4)
                        setEnd(end - 4)

                        }


                    }



                    } className="swiper-button-prev"> </div>
                                       <div className="swiper-pagination"></div>
                                      
                    </SwiperSlide>)


                )
            
            }







      
      
      </Swiper>
      </div>
      


  




        

       
    )
}

export default Main