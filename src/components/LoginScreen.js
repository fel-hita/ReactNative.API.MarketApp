import React from 'react';
import { StyleSheet, Text, TextInput, View, Animated, Easing, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import { Platform } from '@unimodules/core';

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
        <ImageBackground
          style={styles.backStyle}
          source={require('../../assets/backdown.jpg')}
          resizeMode='contain'>
        </ImageBackground>
          <View style={styles.headerStyle}>
            <Text
            style={{ fontSize: 30, color: "#2B86CE"}}>
              WASTE{"\n"}TO{"\n"}RESOURCES</Text>
            <Animated.Image
          style={{
            width: 100,
            height: 100,
            marginLeft: 15,
            transform: [{ rotate: RotateData }],
          }}
          source={require('../../assets/recycle.png')}
        />
          </View>
        <View style={styles.welcome}>
          <Text>
            <Text style={styles.welcomeLog}></Text><Text style={styles.welcomeTextIn}>Welcome</Text>
          </Text>
        </View>
        <TextInput style={styles.input}
          autoCapitalize='none'
          placeholder="Username"
          placeholderTextColor="#085f63" 
          autoCorrect={false}
          editable={true}
          multiline={true}
          maxLength={40}
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
        />
        <TextInput style={styles.input}
          placeholder="Password"
          placeholderTextColor="#085f63" 
          password={true}
          secureTextEntry={true}
          returnKeyType='go'
          autoCorrect={false}
          maxLength={40}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ right: 20 }}>
            <Button
              type="clear"
              color="#000"
              title="LOGIN"
              style={styles.btnEnterText}
              onPress={this._signin}>
            </Button>
          </View>
          <View style={{ position: 'absolute', right: 10 }}>
            <Button
              type="clear"
              color="#000"
              title="REGISTER"
              style={styles.btnEnterText}
              onPress={this._register}
            >
            </Button>
          </View>
        </View>
      </View>
    );
  }

  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);
    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 10000,
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
    this.props.navigation.navigate('HomeScreen');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  welcomeTextIn: {
    fontSize: 23,
    textAlign: 'center',
    color: '#03CB69',
    textShadowColor: '#000',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  welcomeLog: {
    color: '#03CB69',
    fontSize: 23,
    textAlign: 'center',
  },
  welcome: {
    flexDirection: 'row',
    marginTop: 80
  },
  Notmember: {
    color: '#00d600',
    textShadowColor: '#000',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
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
    borderBottomColor: '#18A558',
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
  backStyle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 225
  },
  newText: {
    color:"#085f63",
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  headerStyle: {
    flex:1,
    position: 'absolute',
    flexDirection:'row',
    top: Platform.OS === 'ios' ? 100 : 90
  }
});
