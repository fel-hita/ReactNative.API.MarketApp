//import liraries
import React from 'react';
import { StyleSheet, Text, TextInput, AsyncStorage, TouchableOpacity, StatusBar, ActivityIndicator, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AwesomeButton from 'react-native-really-awesome-button/src/themes/rick';

// create a component
export default class LoginScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
      token:''
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <LinearGradient
        style={{position: 'absolute', width: '100%', height: '100%'}}
        colors={['#58D68D', '#186A3B']}>
        </LinearGradient>
        <View style={styles.welcome}>
          <Text>
            <Text style={styles.welcomeLog}>LOG</Text><Text style={styles.welcomeTextIn}>IN</Text>
          </Text>
        </View>
        <TextInput style={styles.input}
          autoCapitalize = 'none'
          placeholder="Username"
          editable={true}
          multiline={true}
          maxLength={40}
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
        />
        <TextInput style={styles.input}
          placeholder="Password"
          password={true}
          secureTextEntry={true}
          returnKeyType='go'
          autoCorrect={false}
          maxLength={40}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <View>
            <AwesomeButton
              style={styles.btnEnter}
              type="anchor"
              onPress={this._signin}>
              <Text style={styles.btnEnterText}>ENTER</Text>
            </AwesomeButton>
        </View>
        <Text style={styles.Notmember}>BECOME MEMBER</Text>
        <View>
          <AwesomeButton
            style={styles.btnRegister}
            type="anchor"
            onPress={this._register}
          >
            <Text style={styles.btnEnterText}>REGISTER</Text>
          </AwesomeButton>
        </View>
      </View>
    );
  }

  _register = async () => {
    this.props.navigation.navigate('RegisterPage');
  }

  _signin = async () => {
    const user = "hrazani";
    const pass = "qwerty";
    const api_url = "http://10.12.9.7:8000/api/api-token-auth/";

    await fetch( api_url, {
      method: "POST",
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': user,
        'password': pass
      })
    })
    .then(response => response.json()
      .then(data => ({
        token: data,
      }))
      .then(res => {
        this.props.navigation.navigate('HomeScreen', {
          token: res.token
        })
    }));
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  welcomeTextIn: {
    fontSize: 20,
    textAlign: 'center',
    color: '#068A28',
    textShadowColor: '#00FF42',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 3,
  },
  welcomeLog: {
    fontSize: 20,
    textAlign: 'center',
  },
  welcome: {
    flexDirection: 'row',
    marginTop: 150,
    margin: 10,
  },
  Notmember: {
    color: '#005B18',
    textShadowColor: '#00FF42',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 3,
    marginTop: 100,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    margin: 15,
    width: '50%',
    height: 40,
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#42ffa8',
    textAlign: 'center'
  },
  btnEnter: {
    width: 100,
  },
  btnEnterText: {
    width: 100,
    color: '#007F21',
    fontWeight: '700',
    textAlign: 'center'
  },
  btnRegister: {
    width: 100,
  },
});
