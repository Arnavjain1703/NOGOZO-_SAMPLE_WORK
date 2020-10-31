import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom'
import {Route,Switch} from 'react-router-dom'
import Frontpage from './Frontpage/frontpage'
import Shop from './shops/shops'
import Shop_details from './Shop-details/Shop_details'
import Cart from './Cart/Cart'
import './App.css';

function App() {
  return (
    <div className="row">
      <BrowserRouter>
      <Switch>
       <Route path={'/'} exact component={Frontpage}></Route>
       <Route path={'/shop'} exact component={Shop}></Route>
       <Route path={'/cart'} exact component={Cart}></Route>
       <Route path={'/shop_details/:id/:id2'} exact component={Shop_details}></Route>
       </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
