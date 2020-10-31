import React,{Component} from 'react';
import Landing from './landing/landing';
import Navbar from '../Navbar/Navbar'
class Frontpage extends Component{
   render()
   {
       return (
        <div>
            <Navbar></Navbar>
            <Landing></Landing>
        </div>

       )
   }
}
export default Frontpage