import React from 'react';
import { StyleSheet, Text, TextInput, AsyncStorage, TouchableOpacity, StatusBar, ActivityIndicator, View } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import RegisterSeller from './RegisterSeller';
import RegisterBuyer from './RegisterBuyer';

class RegisterPage extends React.Component {
    render () {
        return (
            <View style={styles.container}>
            <View style={styles.topview}>
                <TouchableOpacity
                style={styles.BuyerTxt}
                onPress={this._registerBuyer}
                >
                <Text style={{fontSize: 30}} >BUYER</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.botview}>
              <TouchableOpacity
                style={styles.SellerTxt}
                onPress={this._registerSeller}
                >
                <Text style={{fontSize: 30}} >SELLER</Text>
              </TouchableOpacity>
              </View>
              </View>
        )
    }
    _registerBuyer = async() => {
        this.props.navigation.navigate('Buy');
      }

    _registerSeller = async() => {
        this.props.navigation.navigate('Sell');
    }
} 

const SellerP = createStackNavigator({Seller: RegisterSeller});
const BuyerP = createStackNavigator({Buyer: RegisterBuyer});

export default createAppContainer(
    createSwitchNavigator(
      {
        RegisterPage: RegisterPage,
        Buy: BuyerP,
        Sell: SellerP,
      },{
        initialRouteName: 'RegisterPage'
      }
    )
  );

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column'
    },
    welcome: {
        position: 'absolute',
        alignSelf: 'center'

    },
    SellerTxt: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 150
        
    },
    BuyerTxt: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 180
        
    },
    topview: {
        height: '50%',
        backgroundColor: '#f00'
    },
    botview: {
        height: '50%',
        backgroundColor: '#0f0'
    },
    input: {
      margin: 15,
      height: 40,
      padding: 5,
      fontSize: 16,
      borderBottomWidth: 2,
      borderBottomColor: '#00c217'
    },
    scrollinput: {
      marginTop: 10,
      height: 500
    }
})