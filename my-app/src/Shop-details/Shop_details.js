import React,{Component, component} from 'react'
import { withRouter } from "react-router-dom";
import './Shop_details.css'
import Navbar from '../Navbar/Navbar'
import Langing from '../landing/landing' 
import Product from './Shop_Products/Shop_product'
class Body extends Component{
      
    render()
    {  console.log('/'+this.props.match.params.id+'/'+this.props.match.params.id2)
        return (
            <div class="shop_details">
            <Navbar></Navbar>
            <div>
               <Langing image={'/'+this.props.match.params.id+'/'+this.props.match.params.id2}></Langing>
               <Product></Product>
            </div>
            </div>
        )
    }
}
export default withRouter(Body)