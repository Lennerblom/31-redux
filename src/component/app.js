import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import createStore from '../lib/store';
import Dashboard from './dashboard';

const store = createStore();
console.log('state LOG: ', store.getState())

export default class App extends Component {

    render() {
        return(
            <div>
              <Provider store={store}>
                <BrowserRouter>
                  <Fragment>
                    <ul>
                      <li><Link to="/">Dashboard</Link></li>
                    </ul>
                    <div>
                      <Route exact path="/" component={Dashboard}/>
                    </div>
                  </Fragment>
                </BrowserRouter>
              </Provider>
            </div>
        );
    }
}