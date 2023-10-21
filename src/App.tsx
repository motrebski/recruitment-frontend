import React from 'react';
import { Home } from './pages/Home/Home';
import { NotFound } from '../src/pages/NotFound/NotFound';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../src/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
