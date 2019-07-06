//import liraries
import React from 'react';
import { StyleSheet, Text, TextInput, AsyncStorage, TouchableOpacity, StatusBar, ActivityIndicator, View } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

const userInfo = {username: 'Admin',password:'123'};

// create a component
class LoginScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {username:'',password:''}
  }

    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>Login.
              </Text>
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
            </View>
          );
    }


    
    _signin = async () => {
      if(userInfo.username===this.state.username && userInfo.password===this.state.password)
      {
        await AsyncStorage.setItem('logged','1');
        this.props.navigation.navigate('App');
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

class HomeScreen extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          HELLO SEXY
        </Text>
      </View>
    )
  }
}

const AppStack = createStackNavigator({Home: HomeScreen});
const AuthStack = createStackNavigator({Login: LoginScreen});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: LoginScreen,
      App: AppStack,
      Auth: AuthStack
    },{
      initialRouteName: 'AuthLoading'
    }
  )
);

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
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
  }
});
