import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Template = (props) => (
  <div>
    <Helmet defaultTitle="jey3dayo.net" />
    {props.children}
  </div>
);

Template.propTypes = {
  children: PropTypes.shape.isRequired,
};

export default Template;
