import React, {Fragment} from 'react';
import propTypes from 'prop-types';

function Visibility({visible, children}) {
  return visible && children ? children : <Fragment />;
}



Visibility.propTypes = {
  visible: propTypes.bool || propTypes.any,
};
export default Visibility;
