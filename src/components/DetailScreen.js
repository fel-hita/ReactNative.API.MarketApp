import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Platform } from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

export default class DetailScreen extends React.Component {
  
  constructor(props) {
    super(props);
    const { state: { params } } = this.props.navigation;

    this.state = {
      clicked: false,
      fontLoaded: false,
      position: 1,
      interval: null,
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
          <View style={styles.mContainer}>
            
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.title}>{params.title}</Text>
              <Text style={styles.price}>{params.price}</Text>
            </View>
            <Text style={styles.category}>{params.category}</Text>
            <Text style={styles.description}>{params.description}</Text>
          </View>
          <View style={styles.bContainer}>
            <TouchableOpacity  activeOpacity = { .5 } onPress={this.SampleFunction}>
              <LinearGradient 
                colors={['#ff8008', '#ffc837', '#ff8008']}
                style={styles.LinearGradientStyle}  
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0.9}}
                locations={[0, 0.3, 0.9]} >
                <View>
                  
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column'
  },
  tContainer: {
    position: 'absolute',
    top: 0,
  },
  mContainer: {
    flexDirection: 'column'
  },
  bContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 15,
    justifyContent: 'center',
    alignItems: 'center'
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
    right: 5,
    fontSize: 20,
    color: 'rgb(242, 207, 10)',
  },
  description: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginTop: 30
  },
  category: {
    color: '#648745',
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
  }
});
