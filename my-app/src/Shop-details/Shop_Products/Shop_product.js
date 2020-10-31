import React,{Component, component} from 'react'
import { withRouter } from "react-router-dom";
import './Shop_Product.css'
import Product from './Shop_product_item/Shop_product_item'
class Body extends Component{
      state={
          Products:[
              {image:'/assets/product.jpg',name:'Product 1',price:'422 RS'},
              {image:'/assets/product2.jpg',name:'Product 2',price:'422 RS'},
              {image:'/assets/product3.jpg',name:'Product 3',price:'422 RS'},
              {image:'/assets/product4.jpg',name:'Product 5',price:'422 RS'},
              {image:'/assets/product5.jpg',name:'Product 5',price:'422 RS'},
              {image:'/assets/product6.jpg',name:'Product 6',price:'422 RS'},
              {image:'/assets/product.jpg',name:'Product 7',price:'422 RS'},
              {image:'/assets/product2.jpg',name:'Product 8',price:'422 RS'},
          ]
      }
    render()
    {  
        return (
            <div className="Product">
                <div className="row">
                {
                    this.state.Products.map((product)=>
                    {
                        return(
                        <Product element={product}></Product>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}
export default withRouter(Body)