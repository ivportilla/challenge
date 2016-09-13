import React from 'react';
import { List, ListElement } from 'react-native-elements';
import { View, Text, Switch, Alert } from 'react-native';

class InspectionComponent extends React.Component {
  handleSwitch(){
    Alert.alert(this.props.title, 'Aquí se debería desplegar el modal además de cambiar el estado de la inspección')
  }

  render(){
    const containerStyle = {
      height: 80,
      borderBottomWidth: 0.5,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }

    const leftStyle = {
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginLeft: 10,
      marginTop: 5,
      marginBottom: 5,
    }

    const rightStyle = {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 5,
    }

    return (
      <View style={containerStyle}>
        <View style={leftStyle}>
          <Text style={{fontWeight: 'bold'}}>{this.props.title}</Text>
          <Text>{this.props.subtitle}</Text>
          <Text>{this.props.category}</Text>
        </View>

        <View style={rightStyle}>
          <Switch
            onValueChange={this.handleSwitch.bind(this)}
            value={this.props.state}/>
        </View>
      </View>
    );

  }
}

class InspectionList extends React.Component {
  render(){
    let state = this;
    return (
      <List>
        {
          this.props.list.map( function(cat){
            return cat.items.map(function(item, i){
              return <InspectionComponent
                key={i}
                title={item.name}
                category={cat.name}
                subtitle={item.comment}
                index={i}
                state={item.state}
                />
            })
          })
        }
      </List>
    );
  }
}

export default InspectionList;
