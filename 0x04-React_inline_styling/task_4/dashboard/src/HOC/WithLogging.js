import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
  class WithLoggingComponent extends Component {
    componentDidMount() {
      console.log(`Component ${this.getDisplayName()} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${this.getDisplayName()} is going to unmount`);
    }

    getDisplayName() {
      return WrappedComponent.displayName || WrappedComponent.name || 'Component';
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  // Set the display name for debugging purpose
  WithLoggingComponent.displayName = `WithLogging(${WithLoggingComponent.displayName || WithLoggingComponent.name || 'Component'})`;

  return WithLoggingComponent;
};

export default WithLogging;
