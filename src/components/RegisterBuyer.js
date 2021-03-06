import React from 'react';
import { StyleSheet, Text, TextInput, AsyncStorage, TouchableOpacity, StatusBar, ActivityIndicator, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Divider from 'react-native-divider';

export default class RegisterBuyer extends React.Component {

  static navigationOptions = {
    hheaderTintColor: 'black',
    headerStyle: {
        backgroundColor: '#ffce00'
    }
  };


  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
      cpassword:'',
      email: '',
      category:'',
      Price:'',
      cellphone:'',
      address:'',
      town:'',
      postcode:'',
      country:''
    }
  }

    render(){
      return(
        <View style={styles.container}>
          <ScrollView style={styles.scrollinput} contentContainerStyle={{ flexGrow: 1}}>
          <TextInput
              style={styles.input}
              autoCapitalize='none'
              placeholder="Username"
              autoCorrect={false}
              editable={true}
              multiline={true}
              maxLength={40}
              placeholder="Username"
              value={this.state.username}
              onChangeText={(username)=>this.setState({username})}
          />
          <TextInput
              style={styles.input}
              password={true}
              secureTextEntry={true}
              returnKeyType='go'
              autoCapitalize='none'
              placeholder="Password"
              autoCorrect={false}
              editable={true}
              multiline={true}
              maxLength={40}
              value={this.state.password}
              onChangeText={(password)=>this.setState({password})}
          />
          <TextInput
              style={styles.input}
              password={true}
              secureTextEntry={true}
              returnKeyType='go'
              autoCapitalize='none'
              placeholder="Confirm Password"
              autoCorrect={false}
              editable={true}
              multiline={true}
              maxLength={40}
              value={this.state.cpassword}
              onChangeText={(cpassword)=>this.setState({cpassword})}
          />
          <TextInput
              style={styles.input}
              autoCapitalize='none'
              placeholder="Email"
              autoCorrect={false}
              editable={true}
              multiline={true}
              maxLength={40}
              value={this.state.email}
              onChangeText={(email)=>this.setState({email})}
          />
          <TextInput
              style={styles.input}
              autoCapitalize='none'
              placeholder="category"
              autoCorrect={false}
              editable={true}
              multiline={true}
              maxLength={40}
              value={this.state.category}
              onChangeText={(category)=>this.setState({category})}
            />
            <TextInput
              style={styles.input}
              autoCapitalize='none'
              autoCorrect={false}
              editable={true}
              multiline={true}
              maxLength={40}
              value={this.state.Price}
              placeholder="Price"
              onChangeText={(Price)=>this.setState({Price})}
            />
            <TextInput
              style={styles.input}
              autoCapitalize='none'
              autoCorrect={false}
              editable={true}
              multiline={true}
              maxLength={40}
              value={this.state.cellphone}
              placeholder="Cellphone"
              onChangeText={(cellphone)=>this.setState({cellphone})}
            />
            <TextInput
              style={styles.input}
              autoCapitalize='none'
              autoCorrect={false}
              editable={true}
              multiline={true}
              maxLength={40}
              placeholder="Address"
              value={this.state.address}
              onChangeText={(address)=>this.setState({address})}
            />
          <TextInput
              style={styles.input}
              autoCapitalize='none'
              autoCorrect={false}
              editable={true}
              multiline={true}
              maxLength={40}
              value={this.state.town}
              placeholder="Town"
              onChangeText={(town)=>this.setState({town})}
          />
          <TextInput
              style={styles.input}
              autoCapitalize='none'
              autoCorrect={false}
              editable={true}
              multiline={true}
              maxLength={40}
              value={this.state.postcode}
              placeholder="Post Code"
              onChangeText={(postcode)=>this.setState({postcode})}
          />
          <TextInput
              style={styles.input}
              autoCapitalize='none'
              autoCorrect={false}
              editable={true}
              multiline={true}
              maxLength={40}
              placeholder="Country"
              value={this.state.country}
              onChangeText={(country)=>this.setState({country})}
          />
          </ScrollView>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
    },
    welcome: {
        marginTop: 20,
        fontSize: 20,
    },
    registerTxt: {
        position: 'absolute',
        top: 600
    },
    input: {
      margin: 15,
      height: 40,
      padding: 5,
      fontSize: 16,
      borderBottomWidth: 2,
      borderBottomColor: '#ffce00'
    },
    scrollinput: {
      marginTop: 10,
    }
})
