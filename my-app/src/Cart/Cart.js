import React,{Component, component} from 'react'
import { withRouter } from "react-router-dom";
import './Cart.css'
import Navbar from '../Navbar/Navbar'
import Cart_Product from './Cart_Product_Item/Cart_Product_Item'
class Body extends Component{
      state={
          Products:[
              {image:'/assets/product.jpg',name:'Product 1',price:'422 RS'},
              {image:'/assets/product4.jpg',name:'Product 5',price:'422 RS'},
              {image:'/assets/product5.jpg',name:'Product 5',price:'422 RS'},
              {image:'/assets/product6.jpg',name:'Product 6',price:'422 RS'},
              {image:'/assets/product.jpg',name:'Product 7',price:'422 RS'},
          ]
      }
    render()
    {  
        return (
          
            <div className="Cart">
                  <Navbar></Navbar>
                    <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                       {
                           this.state.Products.map((element)=>
                           {
                              return ( <Cart_Product element={element}></Cart_Product>)
                           })
                       }  
                    </div>
                    <div className="col-lg-3"></div>
                    </div>
            </div>
        )
    }
}
export default withRouter(Body)