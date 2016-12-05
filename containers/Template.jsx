import React from 'react';
import Helmet from 'react-helmet';

const title = 'jey3dayo.net';

const Template = props => (
  <div>
    <Helmet
      defaultTitle={title}
      titleTemplate={`%s - ${title}`}
    />
    {props.children}
  </div>
);

Template.propTypes = {
  children: React.PropTypes.shape(),
};

export default Template;

