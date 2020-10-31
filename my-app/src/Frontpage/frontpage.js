import React,{Component} from 'react';
import Landing from '../landing/landing';
import Navbar from '../Navbar/Navbar'
import Item from '../Item-cart/item-cart'
class Frontpage extends Component{
   render()
   {
       return (
        <div>
            <Navbar></Navbar>
            <Landing image={"/assets/landing.jpg"}></Landing>
            <Item></Item>
        </div>

       )
   }
}
export default Frontpage