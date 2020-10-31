import React,{Component, component} from 'react'
import './body.css'
class Body extends Component{
    render()
    {   console.log(this.props.element)
        return (
            
            <div  className="item">
                <div className="width">
                <div className="card">
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
export default Body