import React from 'react';
import './App.css';
import LoginPage from './components/loginPage'
import MarketPage from './components/marketPage'
import CartPage from './components/cartPage'
import createHistory from "history/createBrowserHistory";
import { Provider } from 'react-redux';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import store from './reducers/index';

const history = createHistory()
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.login &&  localStorage.password 
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)


function App() {
  return (
    <div className="App">
        <Provider store={store}>
        <Router history={history}>
          <div className='main-wrapper'>
            {/* <Header /> */}
            <div className='content-wraper'>
              {/* <Sider /> */}
              <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/" component={localStorage.login && localStorage.password ? MarketPage :LoginPage } exact />
                <PrivateRoute path="/market" exact component={MarketPage} />
                <PrivateRoute path="/cart"  component={CartPage} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
