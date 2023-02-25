import { Component, ErrorInfo, ReactNode } from "react";

import { Link } from "react-router-dom";

export class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // We'll log the error for now but we'll also want to report it to an error handler (api service or something)
    console.error(error, errorInfo);
  }

  private resetError = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h2>Ups, something went wrong.</h2>
          <Link to="/" onClick={this.resetError}>
            Go back to home
          </Link>
        </>
      );
    }

    return this.props.children;
  }
}
