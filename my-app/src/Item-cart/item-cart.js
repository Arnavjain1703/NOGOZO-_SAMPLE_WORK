import React,{Component} from 'react';
import Item from './item-cart-item/body'
class Item_cart extends Component{
    state={
        image:[
            {image:'/assets/vegetable.jpg',
             name:'Fruits & Vegetables',
            },
            {image:'/assets/diwali.svg',
             name:'Diwali Special',
            },
            {image:'/assets/fashion.jpg',
             name:'Fashion and Personal Care',
            },
            {image:'/assets/electronics.jpg',
             name:'Electrical And Electronics',
            },
            {image:'/assets/stationary.jpg',
             name:'Stationary & Books',
            },
            {image:'/assets/dairy.jpg',
             name:'Dairy Products',
            },
            {image:'/assets/grocerries.jpg',
             name:'Groceries and Essential',
            },
            {image:'/assets/food.jpg',
             name:'Food & Restaurants',
            },
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