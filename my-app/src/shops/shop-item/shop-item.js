import React,{Component, component} from 'react'
import { withRouter } from "react-router-dom";
import './shop-item.css'
class Body extends Component{
    call=()=>
    {    
        this.props.history.replace('/shop_details'+this.props.element.image)
    }
    render()
    {   
        return (
            
            <div  className="shop-item">
                <div className="width">
                <div onClick={this.call} className="card">
                 <div className="image">
                    <img src={this.props.element.image}></img>
                  </div>  
                    <div className="center name">
                        {this.props.element.name}
                    </div>
                    <div className="center address">
                        {this.props.element.address}
                    </div>
                    <div className="center address">
                        {this.props.element.contact}
                    </div>
                     
                 </div>
                </div>
            </div>
        );
    }

}
export default withRouter(Body)