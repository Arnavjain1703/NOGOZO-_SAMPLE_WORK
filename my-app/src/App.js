import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom'
import {Route,Switch} from 'react-router-dom'
import Frontpage from './Frontpage/frontpage'
import Shop from './shops/shops'
import './App.css';

function App() {
  return (
    <div className="row">
      <BrowserRouter>
      <Switch>
       <Route path={'/'} exact component={Frontpage}></Route>
       <Route path={'/shop'} exact component={Shop}></Route>
       </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
