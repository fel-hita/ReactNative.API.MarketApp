import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { ImagePicker, Permissions } from 'expo'

export default class AddProduct extends React.Component {

  static navigationOptions = {
    hheaderTintColor: 'black',
    headerStyle: {
      backgroundColor: '#57A0BE'
    }
  };


  constructor(props) {
    super(props);
    this.state = {
      checkmark: '+',
      checkmark1: '+',
      checkmark2: '+',
      checkmark3: '+',
      checkmark4: '+',
      checkmark5: '+',
      checkmark6: '+',
      imageHeader: null,
      username: '',
      password: '',
      cpassword: '',
      email: '',
      category: '',
      Price: '',
      cellphone: '',
      address: '',
      town: '',
      postcode: '',
      country: ''
    }
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
  }
  
  selectImageHeader = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      this.setState({ checkmark: '✔'});
    }
    else {
    }
  };

  selectImage1 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      this.setState({ checkmark1: '✔'})
    }
    else {
    }
  };

  selectImage2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      this.setState({ checkmark2: '✔'})
    }
    else {
    }
  };

  selectImage3 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      this.setState({ checkmark3: '✔'})
    }
    else {
    }
  };

  selectImage4 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      this.setState({ checkmark4: '✔'})
    }
    else {
    }
  };

  selectImage5 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      this.setState({ checkmark5: '✔'})
    }
    else {
    }
  };

  selectImage6 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      this.setState({ checkmark6: '✔'})
    }
    else {
    }
  };

  render() {
    return (
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
            placeholder="Product name"
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
          />
          <View style={styles.mainTouch}>
            <TouchableOpacity onPress={this.selectImageHeader}>
              <Text style={{ textAlign: 'center', fontSize: 70,  }}>
                {this.state.checkmark}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.touchContainer}>
            <TouchableOpacity
              style={styles.smallTouch}
              onPress={this.selectImage1}>
              <Text style={{ textAlign: 'center', fontSize: 20,  }}>
              {this.state.checkmark1}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.smallTouch}
              onPress={this.selectImage2}>
              <Text style={{ textAlign: 'center', fontSize: 20,  }}>
              {this.state.checkmark2}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.smallTouch}
              onPress={this.selectImage3}>
              <Text style={{ textAlign: 'center', fontSize: 20,  }}>
              {this.state.checkmark3}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.touchContainer}>
            <TouchableOpacity
              style={styles.smallTouch}
              onPress={this.selectImage4}>
              <Text style={{ textAlign: 'center', fontSize: 20,  }}>
              {this.state.checkmark4}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.smallTouch}
              onPress={this.selectImage5}>
              <Text style={{ textAlign: 'center', fontSize: 20,  }}>
              {this.state.checkmark5}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.smallTouch}
              onPress={this.selectImage6}>
              <Text style={{ textAlign: 'center', fontSize: 20,  }}>
              {this.state.checkmark6}
              </Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            autoCapitalize='none'
            placeholder="Description"
            autoCorrect={false}
            editable={true}
            multiline={true}
            maxLength={1000}
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
          />
          <TextInput
            style={styles.input}
            autoCapitalize='none'
            placeholder="Category"
            autoCorrect={false}
            editable={true}
            multiline={true}
            maxLength={40}
            value={this.state.category}
            onChangeText={(category) => this.setState({ category })}
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
            onChangeText={(Price) => this.setState({ Price })}
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
            onChangeText={(cellphone) => this.setState({ cellphone })}
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
            onChangeText={(address) => this.setState({ address })}
          />
          <TextInput
            style={styles.input}

            value={this.state.postcode}
            placeholder="Post Code"
            onChangeText={(postcode) => this.setState({ postcode })}
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
            onChangeText={(country) => this.setState({ country })}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
  upStyle: {
    width: 10,
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
    borderBottomColor: '#57A0BE'
  },
  scrollinput: {
    marginTop: 10,

  },
  btnMainImg: {
    fontWeight: '700',
    textAlign: 'center'
  },
  btnSecondImg: {
    fontWeight: '700',
    textAlign: 'center',
    width: 100
  },
  mainTouch: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderColor: 'grey',
    width: '80%',
    height: '10%'
  },
  touchContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallTouch: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderColor: 'grey',
    width: 80,
    height: 50
  }
})
