const React = require('react');

function handleProps(props) {
  const newProps = {};

  Object.keys(props).map(item => newProps[item] = React.PropTypes[props[item]]);

  return newProps;
}


module.exports = handleProps;
