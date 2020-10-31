import React,{Component, component} from 'react'
import './shop.css'
import Navbar from '../Navbar/Navbar'
import Shop_Item from './shop-item/shop-item'
class Body extends Component{
    state={
        A:[
           {image:'/assets/shop1.jpg', name:"Shop1",address:"Sarla Bagh ext, Dayal Bagh -282005",contact:"123456789"},
           {image:'/assets/shop2.jpg',name:"Shop2",address:"Sarla Bagh ext, Dayal Bagh -282005",contact:"123456789"},
           {image:'/assets/shop3.jpg',name:"Shop3",address:"Sarla Bagh ext, Dayal Bagh -282005",contact:"123456789"},
           {image:'/assets/shop4.jpg',name:"Shop4",address:"Sarla Bagh ext, Dayal Bagh -282005",contact:"123456789"},
           {image:'/assets/shop5.jpg',name:"Shop5",address:"Sarla Bagh ext, Dayal Bagh -282005",contact:"123456789"},
           {image:'/assets/shop6.jpg',name:"Shop6",address:"Sarla Bagh ext, Dayal Bagh -282005",contact:"123456789"},
           {image:'/assets/shop7.jpg',name:"Shop7",address:"Sarla Bagh ext, Dayal Bagh -282005",contact:"123456789"},
           {image:'/assets/shop8.jpg',name:"Shop8",address:"Sarla Bagh ext, Dayal Bagh -282005",contact:"123456789"},

        ]
    }
    render()
    {  
        return (
            <div class="shop">
                <Navbar></Navbar>
                <div class="row">
               {
                   this.state.A.map((element)=>
                   {  return(
                      <Shop_Item element={element}></Shop_Item>
                   )
                   }
                   )
               }
               </div>
            </div>
        )
    }
}
export default Body