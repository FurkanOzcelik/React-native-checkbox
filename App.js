import React, {Component} from 'react';
import {View} from 'react-native';
import Checkbox from './Checkbox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  checkClicked() {
    this.setState({checked: !this.state.checked});
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Checkbox
          checked={this.state.checked}
          onPress={() => this.checkClicked()}
        />
      </View>
    );
  }
}

export default App;
