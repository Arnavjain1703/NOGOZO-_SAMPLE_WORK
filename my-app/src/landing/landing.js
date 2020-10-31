import React from 'react';
import './landing.css';
class Landing extends React.Component{
    render(){
        console.log(this.props.image)
        return(
            <div className="landing">
            <div className="layer">

            </div>
            <div className='img' style={{'background-image':'url('+this.props.image+')'}}>
               
            </div>
            </div>
        )
    }
} 
export default Landing