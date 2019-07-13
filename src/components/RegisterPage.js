import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Divider from 'react-native-divider';

export default class RegisterPage extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.topview}>
                    <LinearGradient
                        style={{ position: 'absolute', width: '100%', height: '100%' }}
                        colors={['#ffCE00', '#fff']}>

                        <TouchableOpacity
                            style={styles.Buyer}
                            onPress={this._registerBuyer}
                        >
                            <Image
                                source={require('../../assets/coins.png')}
                            />
                            <Text style={styles.buyerTxt} >BUYER</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <Divider borderColor="#000" color="#000" orientation="center">
                 Register As
                </Divider>
                <View style={styles.botview}>
                    <LinearGradient
                        style={{ position: 'absolute', width: '100%', height: '100%' }}
                        colors={['#fff', '#adf3e2']}>
                        <TouchableOpacity
                            style={styles.Seller}
                            onPress={this._registerSeller}
                        >
                            <Image
                                source={require('../../assets/price-tag.png')}
                            />
                            <Text style={styles.sellerTxt} >SELLER</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        )
    }
    _registerBuyer = async() => {
        this.props.navigation.navigate('RegisterBuyer');
      }

    _registerSeller = async() => {
        this.props.navigation.navigate('RegisterSeller');
    }
} 

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column'
    },
    welcome: {
        position: 'absolute',
        alignSelf: 'center'

    },
    Seller: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    Buyer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buyerTxt: {
        color: '#FFCE00',
        textShadowColor: '#000',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 3,
        marginTop: 20,
        fontSize: 50,
        textAlign: 'center',
        margin: 10,
    },
    sellerTxt: {
        color: '#14CFEC',
        textShadowColor: '#000',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 3,
        marginTop: 20,
        fontSize: 50,
        textAlign: 'center',
        margin: 10,
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