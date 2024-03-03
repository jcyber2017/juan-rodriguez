import { Component, ErrorInfo, ReactNode } from 'react';

type Props = {
  componentName: string;
  children: ReactNode;
}

class ErrorThrower extends Component<Props> {
  public componentDidCatch(error: Error, _errorInfo: ErrorInfo) {
    if (error.toString().includes('|')) {
      throw new Error(`${this.props.componentName} | ${error.message}`);
    } else {
      throw new Error(`${this.props.componentName} | ${error}`);
    }
  }

  public render() {
    return this.props.children;
  }
}

export default ErrorThrower;

