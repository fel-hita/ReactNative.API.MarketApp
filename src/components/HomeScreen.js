import React from 'react';
import { StyleSheet, Text, FlatList, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      searchValue: "",
      listSource: [],
      dataSource: [
        {
          id: 1,
          title: "Municipal Metals",
          photo_main: require("../../assets/temp-slide-images/metal0.jpg"),
          photo_1: require("../../assets/temp-slide-images/metal1.jpg"),
          photo_2: require("../../assets/temp-slide-images/metal2.jpg"),
          description: "A metal is a material that, when freshly prepared, polished, or fractured, shows a lustrous appearance, and conducts electricity and heat relatively well. Metals are typically malleable (they can be hammered into thin sheets) or ductile (can be drawn into wires). A metal may be a chemical element such as iron, or an alloy such as stainless steel.",
          quantity: 250,
          category: "METAL",
          sprice: 250000,
          cprice: 355000,
          is_published: true,
          address: "420 High Road",
          city: "Casablanca",
          state: "a",
          zipcode: "41420",
          delivery: "Self Delivery"
        },
        {
          id: 2,
          title: "Stock Tires",
          photo_main: require("../../assets/temp-slide-images/tire0.jpg"),
          photo_1: require("../../assets/temp-slide-images/tire1.jpg"),
          photo_2: require("../../assets/temp-slide-images/tire2.jpg"),
          description: "A tire is a ring-shaped component that surrounds a wheel's rim to transfer a vehicle's load from the axle through the wheel to the ground and to provide traction on the surface traveled over. Most tires, such as those for automobiles and bicycles, are pneumatically inflated structures, which also provide a flexible cushion that absorbs shock as the tire rolls over rough features on the surface. Tires provide a footprint that is designed to match the weight of the vehicle with the bearing strength of the surface that it rolls over by providing a bearing pressure that will not deform the surface excessively.",
          quantity: 250,
          category: "PLASTIC",
          sprice: 100000,
          cprice: 156000,
          is_published: true,
          address: "El jadida rue 87",
          city: "El jadida",
          state: "b",
          zipcode: "42013",
          delivery: "Self Delivery"
        },
        {
          id: 3,
          title: "Casa Woods",
          photo_main: require("../../assets/temp-slide-images/wood0.jpg"),
          photo_1: require("../../assets/temp-slide-images/wood1.jpg"),
          photo_2: require("../../assets/temp-slide-images/wood2.jpg"),
          description: "Wood is a porous and fibrous structural tissue found in the stems and roots of trees and other woody plants. It is an organic material, a natural composite of cellulose fibers that are strong in tension and embedded in a matrix of lignin that resists compression. Wood is sometimes defined as only the secondary xylem in the stems of trees,[1] or it is defined more broadly to include the same type of tissue elsewhere such as in the roots of trees or shrubs.[citation needed] In a living tree it performs a support function, enabling woody plants to grow large or to stand up by themselves. It also conveys water and nutrients between the leaves, other growing tissues, and the roots. Wood may also refer to other plant materials with comparable properties, and to material engineered from wood, or wood chips or fiber.",
          quantity: 250,
          category: "WOOD",
          sprice: 90000,
          cprice: 122500,
          is_published: true,
          address: "Tafilalt 45687",
          city: "Tafilalt",
          state: "c",
          zipcode: "20250",
          delivery: "Self Delivery"
        },
        {
          id: 4,
          title: "Plastics",
          photo_main: require("../../assets/temp-slide-images/plastic0.jpg"),
          photo_1: require("../../assets/temp-slide-images/plastic1.jpg"),
          photo_2: require("../../assets/temp-slide-images/plastic2.jpg"),
          description: "Plastic is material consisting of any of a wide range of synthetic or semi-synthetic organic compounds that are malleable and so can be molded into solid objects.",
          quantity: 250,
          category: "Plastic",
          sprice: 65000,
          cprice: 90000,
          is_published: true,
          address: "Khouribga 4874",
          city: "Khouribga",
          state: "d",
          zipcode: "62050",
          delivery: "Self Delivery"
        },
        {
          id: 5,
          title: "Aluminium",
          photo_main: require("../../assets/temp-slide-images/alum0.jpg"),
          photo_1: require("../../assets/temp-slide-images/alum1.jpg"),
          photo_2: require("../../assets/temp-slide-images/alum2.jpg"),
          description: "Aluminium is a chemical element with the symbol Al and atomic number 13. It is a silvery-white, soft, non-magnetic and ductile metal in the boron group. By mass, aluminium makes up about 8% of the Earth's crust; it is the third most abundant element after oxygen and silicon and the most abundant metal in the crust, though it is less common in the mantle below. The chief ore of aluminium is bauxite. Aluminium metal is so chemically reactive that native specimens are rare and limited to extreme reducing environments. Instead, it is found combined in over 270 different minerals.",
          quantity: 1,
          category: "Aluminium",
          sprice: 15000,
          cprice: 23999,
          is_published: true,
          address: "Tangier 32687",
          city: "Tangier",
          state: "c",
          zipcode: "30130",
          delivery: "Self Delivery"
        },
        {
          id: 6,
          title: "Paper waste",
          photo_main: require("../../assets/temp-slide-images/paper0.png"),
          photo_1: require("../../assets/temp-slide-images/paper1.jpg"),
          photo_2: require("../../assets/temp-slide-images/paper2.jpg"),
          description: "Paper is a thin material produced by pressing together moist fibres of cellulose pulp derived from wood, rags or grasses, and drying them into flexible sheets. It is a versatile material with many uses, including writing, printing, packaging, cleaning, decorating, and a number of industrial and construction processes. Papers are essential in legal or non-legal documentation.",
          quantity: 1,
          category: "Paper",
          sprice: 2000,
          cprice: 6999,
          is_published: true,
          address: "Marrakech 32687",
          city: "Marrakech",
          state: "c",
          zipcode: "65413",
          delivery: "Self Delivery"
        },
        {
          id: 7,
          title: "Cable waste",
          photo_main: require("../../assets/temp-slide-images/cable0.jpg"),
          photo_1: require("../../assets/temp-slide-images/cable1.jpg"),
          photo_2: require("../../assets/temp-slide-images/cable2.jpg"),
          description: "Ordinary rope is not waterproof. When a ship anchors in relatively deep water (greater than 20 fathoms or so), the anchor and rope that is let down becomes prohibitively difficult to raise again, even with a mechanism like a capstan. This ultimately limits the depths available with ordinary rope to within the weight bearing capacity of the rope. The rope will become so heavy with water it will break.",
          quantity: 1,
          category: "Combined",
          sprice: 6000,
          cprice: 8590,
          is_published: true,
          address: "Rabat 32687",
          city: "Rabat",
          state: "d",
          zipcode: "17623",
          delivery: "Self Delivery"
        }
      ]
    }
  }

  renderSeparator = () => {
    return (
      <View
        style= {{height: 1, width: '100%', backgroundColor: 'black'}}> 
      </View>
    )
  }

  handleSearch = text => {
    this.setState({
      searchValue: text
    });
    
    const newData = this.state.dataSource.filter(item => {
      const itemData = `${item.title.toUpperCase()} ${item.description.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.includes(textData);
    });

    this.setState({
      listSource: newData
    });
  }

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Search here..."
        value={this.state.searchValue}
        onChangeText={text => this.handleSearch(text)}
      />
    );
  };

  renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DetailScreen', {
            title: item.title,
            description: item.description,
            sprice: item.sprice,
            cprice: item.cprice,
            base_url: `${this.state.base_url}`,
            photo_main: item.photo_main,
            photo_1: item.photo_1,
            photo_2: item.photo_2,
            photo_3: item.photo_3,
            photo_4: item.photo_4,
            photo_5: item.photo_5,
            photo_6: item.photo_6,
            category: item.category,
            delivery: item.delivery
          })}
          style={{ flex: 1, flexDirection: 'row', backgroundColor: "#3A3E43" }}>
          <Image style={{ width: 100, height: 100, margin: 5 }}
            source={item.photo_main}
          />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, color: '#d04925' }}>
              {item.title}
            </Text>
            <Text style={{ fontSize: 20, color: 'white', textAlign: 'right', marginRight: 50 }}>
              {item.city}
            </Text>
            <Text style={{ color: '#B0DB43'}}>
              {item.category}
            </Text>
            <Text style={{ fontSize: 12, color: '#ffdd67', textAlign: 'right', marginRight: 10 }}>
              Starting Price : {item.sprice} DH
          </Text>
            <Text style={{ fontSize: 16, color: '#ffdd67', textAlign: 'right', marginRight: 10 }}>
              Current Price : {item.cprice} DH
          </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  componentDidMount() {
    this.setState({
      listSource: this.state.dataSource
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList
        data={this.state.listSource}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={this.renderSeparator}
        ListHeaderComponent={this.renderHeader}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: 25
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
