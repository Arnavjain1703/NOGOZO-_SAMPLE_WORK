import React,{Component, component} from 'react'
import './body.css'
import { withRouter } from "react-router-dom";
class Body extends Component{
    call=()=>
    {
        this.props.history.replace('/shop')
    }
    render()
    {   
        return (
            
            <div  className="item">
                <div className="width">
                <div onClick={this.call} className="card">
                 <div className="image">
                    <img src={this.props.element.image}></img>
                  </div>  
                    <div className="center name">
                        {this.props.element.name}
                    </div>
                 
                 </div>
                </div>
            </div>
        );
    }

}
export default withRouter(Body)