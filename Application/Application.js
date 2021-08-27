import React, {PureComponent} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from '../Navigation/Navigation';
import {connect} from 'react-redux';
import * as ACTIONS from './Actions';

class Application extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = props => {
    this.props.handleAuto();
  };

  componentDidUpdate = (prevProps, prevState) => {};

  render() {
    return (
      <NavigationContainer independent={true}>
        <Navigation />
      </NavigationContainer>
    );
  }
}

let mapStateToProps = () => {
  return {};
};

let mapDispatchToProps = dispatch => {
  return {
    handleAuto: () => dispatch(ACTIONS.Auto()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);
