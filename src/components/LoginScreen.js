import React from 'react';
import { StyleSheet, Text, TextInput, View, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';

export default class LoginScreen extends React.Component {

  constructor(props){
    super(props);
    this.RotateValueHolder = new Animated.Value(0);
    this.state = {
      username:'',
      password:'',
      token:'',
      isValid:''
    }
  }

  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View style={styles.container}>
        <LinearGradient
          style={{ position: 'absolute', width: '100%', height: '100%' }}
          colors={['#fff', '#adf3e2']}>
        </LinearGradient>
          <View style={{ flex:1, flexDirection:'row', position: 'absolute', top: 100}}>
            <Text style={{ fontSize: 30, color: "#0786ea",  }}>Resources{"\n"}To{"\n"}Waste</Text>
            <Animated.Image
          style={{
            width: 90,
            height: 90,
            marginTop: 10,
            transform: [{ rotate: RotateData }],
          }}
          source={require('../../assets/recycle.png')}
        />
          </View>
        <View style={styles.welcome}>
          <Text>
            <Text style={styles.welcomeLog}>LOG</Text><Text style={styles.welcomeTextIn}>IN</Text>
          </Text>
        </View>
        <TextInput style={styles.input}
          autoCapitalize='none'
          placeholder="Username"
          autoCorrect={false}
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
          <Button
            type="outline"
            title="LOGIN"
            style={styles.btnEnterText}
            onPress={this._signin}>
          </Button>
        </View>
        <Text style={styles.Notmember}>NEW VISITOR ?</Text>
        <View>
          <Button
            type="outline"
            title="REGISTER"
            style={styles.btnEnterText}
            onPress={this._register}
          >
          </Button>
        </View>
      </View>
    );
  }

  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);
    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => this.StartImageRotateFunction());
  }

  componentDidMount() {
    this.StartImageRotateFunction();
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
    .then(response => {
      isValid= response.ok
      return response.json()
    })
      .then(data => ({
        token: data,
      }))
      .then(res => {
        if (isValid)
        {
          SecureStore.setItemAsync('token',res.token.token);
          this.props.navigation.navigate('HomeScreen')
        }
        else
        {
          alert('Invalid Login/Password');
        }
    });
  }
}

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
    color: '#14CFEC',
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
    color: '#14CFEC',
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
    borderBottomColor: '#0786ea',
    textAlign: 'center'
  },
  btnEnter: {
    height: 100,
    width: 100,
  },
  btnEnterText: {
    width: 100,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center'
  },
});
