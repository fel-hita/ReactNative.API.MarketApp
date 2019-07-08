import React from 'react';
import { Text, View, Button, Image } from 'react-native';

export default class BuyerTab extends React.Component {
    
    static navigationOptions = {
      tabBarLabel: 'Tab2'
    }
    
    render(){
      return (
        <View>This is Buyer Tab</View>
      )
    }
}