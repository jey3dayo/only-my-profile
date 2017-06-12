import React from 'react';
import 'grommet/grommet.min.css';
import App from 'grommet/components/App';

import '../src/main.css';
import Profile from '../components/Profile';

const app = () =>
  (<App centered={false}>
    <Profile />
  </App>);

export default app;
