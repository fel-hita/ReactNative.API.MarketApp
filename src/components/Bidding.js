import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, FlatList } from 'react-native';
import Divider from 'react-native-divider';
import { Button } from 'react-native-elements';

export default class Bidding extends React.Component {

    constructor(props) {
        super(props);
        const { state: { params } } = this.props.navigation;
        this.state = {
            headerImage: params.headerImage,
            bidValue: '',
            bidEnds: '5h 31m 22s',
            bidCurrent: '12,000',
            bidTotal: '8',
            bidHistory: [
                {
                    bidNbr: 'Bidder 8',
                    bidDate: '03/07/2019 19:35:56',
                    bidPrice: '12,000'
                },
                {
                    bidNbr: 'Bidder 7',
                    bidDate: '02/07/2019 10:12:23',
                    bidPrice: '10,500'
                },
                {
                    bidNbr: 'Bidder 6',
                    bidDate: '01/07/2019 02:20:31',
                    bidPrice: '10,000'
                },
                {
                    bidNbr: 'Bidder 5',
                    bidDate: '30/06/2019 12:33:01',
                    bidPrice: '9,600'
                },
                {
                    bidNbr: 'Bidder 4',
                    bidDate: '29/06/2019 09:56:26',
                    bidPrice: '9,400'
                },
                {
                    bidNbr: 'Bidder 3',
                    bidDate: '26/06/2019 00:05:21',
                    bidPrice: '9,350'
                },
                {
                    bidNbr: 'Bidder 2',
                    bidDate: '22/06/2019 02:45:32',
                    bidPrice: '9,200'
                },
                {
                    bidNbr: 'Bidder 1',
                    bidDate: '20/06/2019 18:42:09',
                    bidPrice: '9,000'
                }
            ]
        }
    }
    renderItem = ({item}) => {
        return (
          <View>
            <TouchableOpacity
              style={{ flex: 1, flexDirection: 'row', backgroundColor: "#3A3E43", height: 60 }}>
              <Image style={{ width: 40, height: 40, margin: 5, alignSelf: 'center', marginLeft: 10 }}
                source={require('../../assets/hammer.png')}
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, color: '#d04925', marginLeft: 10, marginTop: 5 }}>
                  {item.bidNbr}
                </Text>
                <Text style={{ fontSize: 20, color: 'white', textAlign: 'right', position: 'absolute', right: 15, top: 20}}>
                  {item.bidDate}
                </Text>
                <Text style={{ color: '#B0DB43', marginLeft: 10, position: 'absolute', bottom: 5}}>
                  {item.bidPrice} DH
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
    
    renderSeparator = () => {
        return (
            <View
                style={{ height: 0.5, width: '100%', backgroundColor: 'black' }}>
            </View>
        )
    }
    
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.topCont}>
                    <Image style={styles.headerImage} source={this.state.headerImage}></Image>
                </View>
                <View style={styles.midCont}>
                    <View style={styles.midChildren}>
                        <Text style={styles.smallTxt}>
                            Bid ends in
                        </Text>
                        <Text style={styles.bigTxt}>
                            {this.state.bidEnds}
                        </Text>
                    </View>
                    <View style={styles.midChildren}>
                        <Text style={styles.smallTxt}>
                            Current Bid
                        </Text>
                        <Text style={styles.bigTxt}>
                            {this.state.bidCurrent} DH
                        </Text>
                    </View>
                    <View style={styles.midChildren}>
                        <Text style={styles.smallTxt}>
                            Total Bids
                        </Text>
                        <Text style={styles.bigTxt}>
                            {this.state.bidTotal}
                        </Text>
                    </View>
                </View>
                <View style={styles.botCont}>
                    <FlatList
                        data={this.state.bidHistory}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={this.renderSeparator}
                        ListHeaderComponent={this.renderHeader}
                    />
                </View>
                <View style={styles.footer}>
                    <View style={{position: 'absolute', left: 50, bottom: 10}}>
                        <TextInput
                            style={styles.input}
                            autoCapitalize='none'
                            placeholder="Bid Amount"
                            placeholderTextColor="#2192ed"
                            keyboardType='number-pad'
                            autoCorrect={false}
                            editable={true}
                            multiline={true}
                            maxLength={10}
                            onChangeText={(bidValue) => this.setState({ bidValue })}
                            value={this.state.bidValue}
                        />
                    </View>
                    <View style={{position: 'absolute', right: 50, bottom: 4}}>
                        <Button
                            type="outline"
                            title="PLACE BID"
                            onPress={this._bidNow}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ECECEC'
    },
    headerImage: {
        height: '60%',
        width: '100%',
        resizeMode: 'stretch'
    },
    midCont: {
        flexDirection: 'row',
        position: 'absolute',
        width: '100%',
        height: '10%',
        top: 200,
        backgroundColor: '#ECECEC',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    botCont: {
        position: 'absolute',
        top: 254,
        left: 0,
        right: 0,
        height: 240
    },
    footer: {
        flexDirection: 'row',
        marginTop: 215,
    },
    midChildren: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    bigTxt: {
        fontSize: 15,
        color: '#000'
    },
    smallTxt: {
        fontSize: 10,
        color: '#737373'
    },
    input: {
        width: 100,
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#0075d4',
        textAlign: 'center'
      },
})