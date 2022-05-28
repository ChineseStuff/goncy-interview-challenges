
import React from 'react';
import propTypes from 'prop-types';
import DefaultErrorComponent from './DefaultError';

class ErrorBoundary extends React.Component {
  static propTypes = {
    children: propTypes.node.isRequired,
    ErrorComponent: propTypes.func,
    onCatch: propTypes.func,
  };

  static defaultProps = {
    ErrorComponent: DefaultErrorComponent,
    onCatch: () => {},
  };

  state = {
    hasError: false,
    error: '',
  };

  componentDidCatch(error) {
    this.setState({ hasError: true, error });
    console.error(error);
    this.props.onCatch();
  }

  render() {
    const { children, ErrorComponent } = this.props;
    return this.state.hasError ? <ErrorComponent /> : children;
  }
}

// Renamed for debugging xpurposes. To prevent all propType warnings to show up in console when filtering by "error" text
ErrorBoundary.displayName = 'FailureBoundary';
export default ErrorBoundary;