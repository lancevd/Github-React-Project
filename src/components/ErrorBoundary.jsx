import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props){
        super(props);
            this.state = {hasError:false};
    }

    static getDerivedStateFromError(error){
        return {hasError:true}
    }
    componentDidCatch(error, errorInfo) {
        console.log(error)
    }

  render() {
    if(this.state.hasError) {
        return <h3 className='text-center'>Something went wrong</h3>
    }

    return this.props.children;
  }
}

export default ErrorBoundary