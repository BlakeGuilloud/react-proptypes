const PropTypes = require('prop-types');

function handleProps(props) {
  const newProps = {};

  Object.keys(props).map(item => newProps[item] = PropTypes[props[item]]);

  return newProps;
}


module.exports = handleProps;
