import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom'
import {Route,Switch} from 'react-router-dom'
import Frontpage from './Frontpage/frontpage'
import './App.css';

function App() {
  return (
    <div className="row">
      <BrowserRouter>
      <Switch>
       <Route path={'/'} exact component={Frontpage}></Route>
       </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
