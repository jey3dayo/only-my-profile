import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Template from '../containers/Template';
import App from '../containers/App';

window.React = React;
ReactGA.initialize('UA-88340287-1');

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

injectTapEventPlugin();
ReactDOM.render((
  <Router history={browserHistory} onUpdate={logPageView}>
    <Route path="/" component={Template}>
      <IndexRoute component={App} />
    </Route>
  </Router>
), document.getElementById('root'));
