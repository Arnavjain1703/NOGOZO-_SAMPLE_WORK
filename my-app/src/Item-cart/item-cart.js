import React,{Component} from 'react';
import Item from './item-cart-item/body'
class Item_cart extends Component{
    state={
        image:[
            'A',
            'A',
            'A',
            'A',
            'A',
            'A',
            'A',
            'A'

        ]
    }
   render()
   {
      
       return (
        <div class="item-cart">
            <div className="row">
           {
               this.state.image.map((elements)=>
               {
                    return (
                        <Item element={elements}></Item>
                    )
               }
               )
           } 
        </div>
        </div>

       )
   }
}
export default Item_cart