import React, { Component } from "react";

type Props = {};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  readonly state: State = {
    hasError: false
  };

  componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Oops! Something went wrong!</h1>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
