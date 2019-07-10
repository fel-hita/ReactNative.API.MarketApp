import React from 'react';
import Slideshow from 'react-native-image-slider-show';

export default class SlideshowTest extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        clicked: false,
        position: 1,
        interval: null,
        dataSource: [
          {
            url: 'https://www.lawrodriguez.com/wp-content/uploads/2013/03/landscape-5-800x400.jpg',
          }, {
            url: 'http://www.osiyogroup.com/wp-content/uploads/2013/03/landscape-7-800x400.jpg',
          }, {
            url: 'https://www.sleepzone.ie/uploads/images/PanelImages800x400/TheBurren/General/sleepzone_hostels_burren_800x400_14.jpg',
          },
        ],
      };
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
      <Slideshow 
          height={300}
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={ position => this.setState({ position })}
          onPress={ () =>  this.state.clicked = true}/>
      );
    }
  }