import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import Divider from 'react-native-divider';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';


export default class DetailScreen extends React.Component {
  
  constructor(props) {
    super(props);
    const { state: { params } } = this.props.navigation;

    this.state = {
      clicked: false,
      fontLoaded: false,
      position: 0,
      interval: null,
      title: params.title,
      price: params.price,
      description: params.description,
      category: params.category,
      dataSource: [
        {
          url: params.photo_main,
        }, {
          url: params.photo_1 == '' ? params.photo_main : params.photo_1,
        }, {
          url: params.photo_2 == '' ? params.photo_main : params.photo_2,
        }, {
          url: params.photo_3 == '' ? params.photo_main : params.photo_3,
        }, {
          url: params.photo_4 == '' ? params.photo_main : params.photo_4,
        }, {
          url: params.photo_5 == '' ? params.photo_main : params.photo_5,
        }, {
          url: params.photo_6 == '' ? params.photo_main : params.photo_6
        }
      ],
    };
  }

  async componentWillMount() {
  }

  render() {
      return (
        <View style={styles.container}>
          <View styles={styles.tContainer}>
            <Slideshow
              height={300}
              dataSource={this.state.dataSource}
              position={this.state.position}
              onPositionChanged={position => this.setState({ position })}
              onPress={() => this.state.clicked = true} />
          </View>
          <Divider borderColor="#000" color="#000" orientation="center">
            Details
          </Divider>
          <View style={styles.mContainer}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.title}>{this.state.title}</Text>
              </View>
              <Text style={styles.category}>{this.state.category}</Text>
              <Text style={styles.price}>{this.state.price} DH</Text>
              <ScrollView style={{ marginBottom: 5, height: '28%' }}>
              <Text style={styles.description}>blablablablalballalf,sladkasdkasd'asdadblablablablalballalf,sladkasdkasd'asdadblablablablalballalf,sladkasdkasd'asdadblablablablalballalf,sladkasdkasd'asdadblablablablalballalf,sladkasdkasd'asdad</Text>
              </ScrollView>
          </View>
          <View style={{ marginBottom: 5, flex: 1,justifyContent: 'flex-end'}}>
            <Divider borderColor="#000" color="#000" orientation="center">
              BIDDING
            </Divider>
          </View>
          <View style={{ alignItems:'center', marginBottom: 20 }}>
            <Button
              type="outline"
              title="BID NOW"
              style={styles.btnBid}
              onPress={this._bidNow}
            >
            </Button>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff'
  },
  tContainer: {
    position: 'absolute',
    top: 0,
  },
  mContainer: {
    flexDirection: 'column'
  },
  bContainer: {
  },
  btnContainer: {
  },
  title: {
    marginTop: 10,
    marginLeft: 5,
    fontSize: 30,
    color: 'rgb(0, 0, 0)',
  },
  price: {
    position: 'absolute',
    right: 20,
    fontSize: 20,
    color: 'rgb(242, 207, 10)',
    textShadowColor: '#000',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  description: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginTop: 30,
  },
  category: {
    marginLeft: 10,
    fontSize: 10,
    color: '#30B1F5',
    marginLeft: 5,
    textShadowColor: '#00FF42',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 3,
  },
  backgroundImg: {
    height: 300,
    width: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    top: 0
  },
  buttonText: {
    fontSize: 40
  },
  btnBid: {
    width: 100,
  },
  btnBidTxt: {
    width: 100,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center'
  },
});
