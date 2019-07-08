//import liraries
import React from 'react';
import { StyleSheet, Text, TextInput, AsyncStorage, TouchableOpacity, StatusBar, ActivityIndicator, View } from 'react-native';

const userInfo = {username: 'A',password:'a'};

// create a component
export default class LoginScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {username:'',password:''}
  }

    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>Login.</Text>
              <TextInput style={styles.input}
                placeholder="Username"
                editable={true}
                multiline={true}
                maxLength={40} 
                onChangeText={(username)=>this.setState({username})}
                value={this.state.username}
              />
              <TextInput style={styles.input}
                placeholder="Password"
                password={true}
                secureTextEntry={true}
                returnKeyType='go'
                autoCorrect={false}
                maxLength={40}
                onChangeText={(password)=>this.setState({password})}
                value={this.state.password}
              />
              <TouchableOpacity
                style={styles.btnEnter}
                onPress={this._signin}
                >
                <Text style={styles.btnEnterText}>ENTER.</Text>
              </TouchableOpacity>
              <Text style={styles.Notmember}>Not a member yet ?</Text>
              <TouchableOpacity
                style={styles.btnRegister}
                onPress={this._register}
                >
                <Text style={styles.btnEnterText}>Register.</Text>
              </TouchableOpacity>
            </View>
          );
    }

    _register = async() => {
      this.props.navigation.navigate('RegisterPage');
    }
    
    _signin = async () => {
      if(userInfo.username===this.state.username && userInfo.password===this.state.password)
      {
        await AsyncStorage.setItem('logged','1');
        this.props.navigation.navigate('HomeScreen');
      } else {
        alert('Invalid Login/Password !')
      }
    }

}

class AuthLoadingScreen extends React.Component {

  constructor(props){
      super(props);
      this._loadData();
  }

  render() {
      return(
          <View style={styles.container}>
              <ActivityIndicator/>
              <StatusBar barStyle='default'/>
          </View>
      );
  }

  _loadData = async() => {
    const logged = await AsyncStorage.getItem('logged');
    this.props.navigation.navigate(logged !== '1' ? 'Auth' : 'App');
  }
}

/*class HomeScreen extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          LOGGED IN PAGE.
        </Text>
      </View>
    )
  }
}*/

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    marginTop: 150,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  Notmember: {
    marginTop: 100,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    margin: 15,
    height: 40,
    padding: 5,
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#428AF8'
  },
  btnEnter: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#428AF8',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    padding: 10
  },
  btnEnterText: {
    color: '#ffffff',
    fontWeight: '700',
  },
  btnRegister: {
    backgroundColor: '#428AF8',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10
  },
});
