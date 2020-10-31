import React,{Component, component} from 'react'
import { withRouter } from "react-router-dom";
import './Shop_product_item.css'
class Body extends Component{
    call=()=>
    {    
        
    }
    render()
    {   
        return (
            
            <div  className="product-item">
                <div className="width">
                <div onClick={this.call} className="card">
                 <div className="image">
                    <img src={this.props.element.image}></img>
                  </div>  
                    <div className="center name">
                        {this.props.element.name}
                    </div>
                    <div className="center address">
                        {this.props.element.price}
                    </div> 
                    <button className="btn-4">Add to cart</button>
                 </div>
                </div>
            </div>
        );
    }

}
export default withRouter(Body)