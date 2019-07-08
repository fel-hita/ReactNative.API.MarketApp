import React from 'react';
import { Text, View, Button, Image } from 'react-native';

export default class SellerTab extends React.Component {
  
    static navigationOptions = {
      tabBarLabel: 'Tab1'
    }
    
    render(){
      return (
        <View>This is Seller Tab</View>
      )
    }
}