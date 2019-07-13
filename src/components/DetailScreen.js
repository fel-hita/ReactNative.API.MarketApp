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
      base_url: params.base_url,
      dataSource: [
        {
          url: params.photo_main,
        }, {
          url: params.photo_1 == 'null' ? params.photo_main : `${params.base_url}${params.photo_1}`,
        }, {
          url: params.photo_2 == 'null' ? params.photo_main : `${params.base_url}${params.photo_2}`,
        }, {
          url: params.photo_3 == 'null' ? params.photo_main : `${params.base_url}${params.photo_3}`,
        }, {
          url: params.photo_4 == 'null' ? params.photo_main : `${params.base_url}${params.photo_4}`,
        }, {
          url: params.photo_5 == 'null' ? params.photo_main : `${params.base_url}${params.photo_5}`,
        }, {
          url: params.photo_6 == 'null' ? params.photo_main : `${params.base_url}${params.photo_6}`,
        }
      ],
    };
  }

  async componentWillMount() {
  }

  async componentDidMount() {
    console.log(this.state.dataSource);
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
              <Text style={styles.price}>{this.state.price} DH</Text>
            </View>
            <Text style={styles.category}>{this.state.category}</Text>
            <ScrollView style={{ marginBottom: 5, height: '28%' }}>
              <Text style={styles.description}>blablablablalballalf,sladkasdkasd'asdadblablablablalballalf,sladkasdkasd'asdadblablablablalballalf,sladkasdkasd'asdadblablablablalballalf,sladkasdkasd'asdadblablablablalballalf,sladkasdkasd'asdad</Text>
            </ScrollView>
          </View>
          <View style={{ marginBottom: 5, flex: 1,justifyContent: 'flex-end'}}>
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
    marginLeft: 5,
    fontSize: 20,
    color: 'rgb(0, 0, 0)',
  },
  price: {
    position: 'absolute',
    right: 10,
    fontSize: 25,
    color: 'black',
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
    color: 'black',
    marginLeft: 5,
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
