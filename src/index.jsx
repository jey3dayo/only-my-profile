import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Template from '../containers/Template';
import App from '../containers/App';
import './main.css';

window.React = React;
ReactGA.initialize('UA-88340287-1');

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  return null;
};

injectTapEventPlugin();
ReactDOM.render(
  <Template>
    <Router>
      <div>
        <Route path="/" component={logPageView} />
        <Switch>
          <Route exact path="/" component={App} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </Router>
  </Template>,
  document.getElementById('root'),
);
