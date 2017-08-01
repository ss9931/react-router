import React, { Component } from 'react';
import {BrowserRouter,Route,Link,Switch,Redirect} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import Product from './components/Product';
import NotFound from './components/NotFound';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            
              <Nav/>
              <hr/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/product" component={Product}/>
                <Redirect from="/guanyu" to="/about" />
                <Route component={NotFound}/>
            </Switch>
            
          </div>
        </BrowserRouter>

      </div>
      
      
    );
  }
}

export default App;
