import React,{Component, component} from 'react'
import './Cart_Product_Item.css'
class Body extends Component{
    render()
    {   console.log(this.props.element.image)
        return(
           <div id="Cart_Item">
               <div className="row">
                   <div className="col-xs-4">
                        <img src={this.props.element.image}></img>
                   </div>
                    <div className="col-xs-4">
                   <div className="center">
                       {this.props.element.name}
                   </div>
                   </div>
                </div>
            </div>
        )
    }
}
export default Body