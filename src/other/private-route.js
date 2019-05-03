import React, { Component } from "react";
import { Route } from "react-router-dom";
import ErrorPage from '../components/error-page/error-page';


class PrivateRoute extends Component {
  state = {
    validated: true
  }

  async componentDidMount() {
      console.log('componentDidMount');
    if (this.props.validator) {
      this.setState({
        validated: await this.props.validator(this.props.computedMatch.params.id)
      });
      console.log(this.state)
    }
  }

  render() {
    if (!this.state.validated) {
      return <ErrorPage/>
    }

    return <Route {...this.props} />
  }
}

export default PrivateRoute;