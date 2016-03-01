/**
 * @author Matthias Pfefferle
 */

import React, {PropTypes} from 'react';

export default class OpenWebIcon extends React.Component {

  displayName: 'OpenWebIcons',

  propTypes: {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    colored: PropTypes.bool,
    Component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  },

  defaultProps: {
    Component: 'i'
  },

  render() {
    let {
      Component,
      name, colored, className, ...props
    } = this.props;
    let classNames = `openwebicons-${name}`;
    if (colored) {
      classNames = `${classNames}-colored`;
    }
    return <{Component} {...props} className={classNames}></{Component}>;
  }
}
