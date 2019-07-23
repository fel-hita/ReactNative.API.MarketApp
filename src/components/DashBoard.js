import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, FlatList } from 'react-native';
import { createDrawerNavigator, SafeAreaView, DrawerItems } from 'react-navigation';
import LoginScreen from './LoginScreen';

export default class DashBoard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Profile",      color:"#3fd100", members:'Edit Profile',  image: require('../../assets/businessman.png')},
        {id:2, title: "Search",     color:"#a5d1c3", members:'Lookup for deals',  image: require('../../assets/magnifier.png')},
        {id:3, title: "Favorites",     color:"#ebcf00", members:'Your favorite deals', image: require('../../assets/rate-star-button.png')},
        {id:4, title: "Trending",   color:"#f7003e", members:'Check up trending deals',  image: require('../../assets/line-chart.png')},
        {id:5, title: "Messages",  color:"#bb55fa", members:'Read your messages',  image: require('../../assets/letter.png')},
        {id:6, title: "Logout",   color:"#00BFFF", members:'Logout from the app',  image: require('../../assets/right-arrow.png')}
      ]
    };
  }

  clickEventListener(item) {
    alert(item)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => {this.clickEventListener(item.title)}}>
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Image style={styles.icon} source={require('../../assets/settings.png')}/>
                </View>
                <Image style={styles.cardImage} source={item.image}/>
                <View style={styles.cardFooter}>
                  <Text style={styles.subTitle}>{item.members}</Text>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
    style={styles.container}
    forceInset={{ top: 'always', horizontal: 'never' }}>
    <DrawerItems {...props} />
    <Image
      style={styles.image}
      source={ require('../../assets/settings.png') }
      />
      </SafeAreaView>
  </ScrollView>
);

const Drawer = createDrawerNavigator(
  {
    Login: {
      screen: LoginScreen
    },
  },
  {
    drawerType: 'slide',
    drawerPosition: 'right',
    drawerWidth: 400,
    contentComponent: CustomDrawerContentComponent
  }
)

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  card:{
    marginHorizontal:2,
    marginVertical:2,
    flexBasis: '48%',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center'
  },
  title:{
    fontSize:16,
    flex:1,
    color:"#FFFFFF",
    fontWeight:'bold'
  },
  subTitle:{
    fontSize:12,
    flex:1,
    color:"#FFFFFF",
  },
  icon:{
    height: 20,
    width: 20, 
  }
});