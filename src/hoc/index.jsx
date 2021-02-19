import React, { Component } from 'react'
export const header = (WrapperComponent) => {
  return class extends Component {
    render() {
      return (
        <React.Fragment>
          <div>高阶组件</div>
          <WrapperComponent />
        </React.Fragment>
      );
    }
  }
}