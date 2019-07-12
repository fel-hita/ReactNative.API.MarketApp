import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Platform } from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import { LinearGradient } from 'expo-linear-gradient';
import Divider from 'react-native-divider';

export default class DetailScreen extends React.Component {
  
  constructor(props) {
    super(props);
    const { state: { params } } = this.props.navigation;

    this.state = {
      clicked: false,
      fontLoaded: false,
      position: 1,
      interval: null,
      title: params.title,
      price: params.price,
      description: params.description,
      category: params.category,
      dataSource: [
        {
          url: params.photo_main,
        }, {
          url: params.photo_1,
        }, {
          url: params.photo_2,
        }, {
          url: params.photo_3,
        }, {
          url: params.photo_4,
        }, {
          url: params.photo_5,
        }, {
          url: params.photo_6
        }
      ],
    };
  }

  async componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        if (this.state.clicked === false)
        {
          this.setState({
            position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
          });
        }
      }, 3000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
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
            <LinearGradient
              style={{ width: '100%', height: '100%' }}
              colors={['#fff', '#fff']}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.title}>{this.state.title}</Text>
                <Text style={styles.price}>{this.state.price} DH</Text>
              </View>
              <Text style={styles.category}>{this.state.category}</Text>
              <Text style={styles.description}>{this.state.description}</Text>
            </LinearGradient>
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
    top: 18,
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
    textShadowColor: '#000',
    textShadowOffset: { width: 0.5, height: 0.8 },
    textShadowRadius: 3,
  },
  category: {
    fontSize: 10,
    color: 'black',
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
  }
});
