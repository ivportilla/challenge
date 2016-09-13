import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';
import Categories from './src/components/Categories';
import { SideMenu, ListItem, List } from 'react-native-elements';
import { getAllData, getCategory } from './src/data/base'
import App from './src/components/App';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getAllData(),
      toggled: false,
      categoryData: getAllData()
     };
  }

  toggleMenu(){
    this.setState({
      toggled: !this.state.toggled
    });
  }

  handleFilter(filter){
    if (filter == 'ALL'){
      this.setState({categoryData: getAllData()})
    }
    else {
      this.setState({categoryData: [getCategory(filter)]})
    }
  }

  render() {
    const titleStyle = {
      color: '#fff',
      fontSize: 20,
      fontWeight:'bold',
      fontFamily: 'Helvetica'
    }

    const headerStyle = {
      height: 80,
      backgroundColor: '#3F51B5',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }

    const MenuComponent = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={headerStyle}>
          <Text style={titleStyle}>Challenge App</Text>
        </View>
        <Categories filter={this.handleFilter.bind(this)} list={this.state.data} />
      </View>
    );

    return (
      /* SideMenu receives a MenuComponent for their content */
      <SideMenu
        MenuComponent={MenuComponent}
        toggled={this.state.toggled}
        >
        <App toggle={this.toggleMenu.bind(this)} menuState={this.state.toggled}
          data={this.state.categoryData} />
      </SideMenu>
    );
  }
}

AppRegistry.registerComponent('awProject', () => Main);
