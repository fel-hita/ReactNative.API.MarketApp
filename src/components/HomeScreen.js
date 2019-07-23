import React from 'react';
import { StyleSheet, Text, FlatList, ActivityIndicator, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as SecureStore from 'expo-secure-store';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      base_url: 'http://10.12.9.7:8000'
    }
  }


  renderSeparator = () => {
    return (
      <View
        style= {{height: 1, width: '100%', backgroundColor: 'black'}}> 
      </View>
    )
  }

  renderItem = ({item}) => {
    return (
      <View>
      <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DetailScreen', { 
            title: item.title,
            description: item.description,
            price: item.price, 
            base_url: `${this.state.base_url}`,
            photo_main: `${this.state.base_url}${item.photo_main}`,
            photo_1: `${item.photo_1}`,
            photo_2: `${item.photo_2}`,
            photo_3: `${item.photo_3}`,
            photo_4: `${item.photo_4}`,
            photo_5: `${item.photo_5}`,
            photo_6: `${item.photo_6}`,
            category: item.category
          })}
          style={{ flex: 1, flexDirection: 'row', marginBottom: 3}}>
        <Image style={{width: 100, height: 100, margin: 5}}
          source={{ uri: `${this.state.base_url}${item.photo_main}` }}
        />
        <View style={{flex: 1}}>
          <Text style={{ fontSize: 18, color: 'green'}}>
            {item.title}
          </Text>
          <Text style={{ fontSize: 20, color: 'black', textAlign: 'right', marginRight: 50}}>
            Casablanca
          </Text>
          <Text>
            {item.category}
          </Text>
          <Text style={{ fontSize: 16, color: 'black', textAlign: 'right', marginRight: 10}}>
            Starting Price : {item.price} DH
          </Text>
          <Text style={{ fontSize: 16, color: 'black', textAlign: 'right', marginRight: 10}}>
            Current Price : {item.price} DH
          </Text>
        </View>
      </TouchableOpacity>
      </View>
    )
  }

  render () {
    return (
      this.state.isLoading
      ?
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#330066" animating />
      </View>
      :
      <View style={styles.container}>
        <FlatList
        data={this.state.dataSource}
        renderItem={this.renderItem}
        keyExtractor={(index) => index.toString()}
        ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    )
  }

  getApiList = async () => {
    const token = await SecureStore.getItemAsync('token');
    await fetch('http://10.12.9.7:8000/listings/list.json', {
      method: "GET",
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token
      },
    })
      .then((response) => response.json()) 
      .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson
      })
    })
      .catch((error) => {
        console.log(error)
    })
  }

  componentDidMount() {
    const token = SecureStore.getItemAsync('token');
    if (!token)
      this.props.navigation.navigate('LoginScreen')
    this.getApiList();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
   subtitleView: {
    flexDirection: 'column',
    paddingLeft: 10,    
    paddingTop: 5,
    marginLeft: 110
  },
  menuText: {
    paddingLeft: 10,
    color: 'grey'
  },
  locText: {
    paddingLeft: 10,
    color: 'grey',
    marginTop: 6,
    fontSize: 12
  },
  titleText: {
    fontWeight: 'bold'
  },
  restaurantImage: {
    width: 600,
    height: 800
  },
  item: {
    flex: 1,
    alignSelf: 'stretch',

  }
});
