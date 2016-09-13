import React from 'react';
import { View, Alert, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import InspectionList from './Inspections';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  handleToggle(){
    if (this.props.menuState){
      this.props.toggle();
    }
  }

  render(){
    return (
      <View>
        <Icon.ToolbarAndroid style={{height: 60, backgroundColor: '#FF4081'}}
          title="Challenge App"
          titleColor="white"
          navIconName="md-menu"
          onIconClicked={this.props.toggle}
        />

        <TouchableHighlight>
          <View style={{backgroundColor: 'white', flex: 1}} >
            <InspectionList
              list={this.props.data}
              />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default App;
