import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Platform } from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import AwesomeButton from "react-native-really-awesome-button";
import LinearGradient from "react-native-linear-gradient";

export default class DetailScreen extends React.Component {
  
  constructor(props) {
    super(props);
    //const { state: { params } } = this.props.navigation;

    this.state = {
      clicked: false,
      fontLoaded: false,
      position: 1,
      interval: null,
      dataSource: [
        {
          url: 'https://www.lawrodriguez.com/wp-content/uploads/2013/03/landscape-5-800x400.jpg',
        }, {
          url: 'http://blog.luckynuggetcasino.com/wp-content/uploads/2016/06/Himilayas-800-x-400.jpg',
        }, {
          url: 'https://www.sleepzone.ie/uploads/images/PanelImages800x400/TheBurren/General/sleepzone_hostels_burren_800x400_14.jpg',
        }, {
          url: 'http://www.wmconnolley.org.uk/diary/2001/07/Dscn3341-lfk-ls-rgs-pwand_crop_800x400.jpg',
        }, {
          url: 'https://atlasmusicrentals.com/wp-content/uploads/Winter_storm_clearing__Campbell_Peak__Telluride__CO_op_800x400.jpg',
        }, {
          url: 'https://www.visitbangormaine.com/wp-content/uploads/2017/07/Bangor-Maine-View-of-Katahdin-800x400.jpg',
        }, {
          url: 'https://physicsworld.com/wp-content/uploads/2018/12/phase-out-oil-production-e1543488923825-800x400.jpg',
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
        <View>
          <Slideshow
            height={300}
            dataSource={this.state.dataSource}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })}
            onPress={() => this.state.clicked = true} />
          <View style={styles.bContainer}>
            <Text style={styles.title}>This is a title</Text>
            <Text style={styles.price}>Prix 99999 DH</Text>
            <Text style={styles.description}>Blablah blah bahblahblah blah blah</Text>
          </View>
          <AwesomeButton
            ExtraContent={
              <LinearGradient
                colors={["#4C63D2", "#BC3081", "#F47133", "#FED576"]}
              />
            }
          >
      <Text>Instagram</Text>
    </AwesomeButton>
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
  title: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 30,
    color: 'rgb(0, 0, 0)',
  },
  price: {
    textAlign: 'center',
    fontSize: 30,
    color: 'rgb(242, 207, 10)',
  },
  description: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginTop: 30
  },
  backgroundImg: {
    height: 300,
    width: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    top: 0
  }
});
