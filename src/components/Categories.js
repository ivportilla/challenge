import React from 'react';
import { List, ListItem } from 'react-native-elements';
import { Alert } from 'react-native';

class Categories extends React.Component {
  constructor(){
    super();
  }

  handleItemClick(name){
    this.props.filter(name);
  }

  render(){
    return (
      <List containerStyle={{marginTop: 0}}>
        {
          this.props.list.map((cat, i) =>
            <ListItem key={i} title={cat.name} icon={{name: 'bubble-chart', color: cat.color}}
              onPress={this.handleItemClick.bind(this, cat.name)}/>
          )
        }
      </List>
    );
  }
}

export default Categories;
