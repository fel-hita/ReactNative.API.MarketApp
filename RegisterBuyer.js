import React from 'react';
import { StyleSheet, Text, TextInput, AsyncStorage, TouchableOpacity, StatusBar, ActivityIndicator, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class RegisterScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {username:'',firstname:'',lastname:'',password:''}
  }

    render(){
      return(
        <View style={styles.container}>
          <Text style={styles.welcome} >
            Buyer REGISTRATION.
          </Text>
          <ScrollView style={styles.scrollinput}>
          <TextInput  style={styles.input}
              placeholder="Username"
              onChangeText={(username)=>this.setState({username})}
            />
            <TextInput  style={styles.input}
              placeholder="Firstname"
              onChangeText={(firstname)=>this.setState({firstname})}
            />
            <TextInput  style={styles.input}
              placeholder="Lastname"
              onChangeText={(lastname)=>this.setState({lastname})}
            />
            <TextInput style={styles.input}
              password={true}
              secureTextEntry={true}
              returnKeyType='go'
              autoCorrect={false}
              maxLength={40}
              placeholder="Password"
              onChangeText={(password)=>this.setState({password})}
            />
          </ScrollView>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      alignItems: 'center',
      
    },
    welcome: {
        marginTop: 20,
        fontSize: 20,
    },
    registerTxt: {
        position: 'absolute',
        top: 600
    },input: {
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
