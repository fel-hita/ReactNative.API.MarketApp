import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Platform } from 'react-native';
import Slideshow from 'react-native-image-slider-show';

export default class DetailScreen extends React.Component {
  
  constructor(props) {
    super(props);

    const { state: { params } } = this.props.navigation;

    this.state = {
      clicked: false,
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
          url: params.photo_6,
        }
      ],
    };
  }

  render() {
    return (
      <View>
        
      </View>
    );
  }

  componentWillMount() {
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
      <View>
      <View style={styles.bContainer}>
          <Text style={styles.title}>{params.title}</Text>
          <Text style={styles.price}>Prix {params.price} DH</Text>
          <Text style={styles.description}>{params.description}</Text>
      </View>
      <Slideshow 
        height={300}
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={ position => this.setState({ position })}
        onPress={ () =>  this.state.clicked = true}/>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dContainer: {
    position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    justifyContent: 'flex-end',
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
  },
   subtitleView: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingTop: 20,
  },
  description: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginTop: 30
  },
  title: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 30,
    color: 'rgb(81, 237, 64)',
  },
  price: {
    textAlign: 'center',
    fontSize: 30,
    color: 'rgb(242, 207, 10)',
  },
  backgroundImg: {
    height: 300,
    width: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    top: 0
  },
  rightBtn: {
    marginTop: 150,
    marginRight: 10,
    alignSelf: 'flex-end',
    width: 30,
    height: 30
  },
  leftBtn: {
    marginRight: 10,
    alignSelf: 'flex-end',
    width: 30,
    height: 30
  }
});
