import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/HomeScreen';
import RegisterPage from './src/components/RegisterPage';
import RegisterSeller from './src/components/RegisterSeller';
import RegisterBuyer from './src/components/RegisterBuyer';
import DetailScreen from './src/components/DetailScreen';
import * as Font from 'expo-font';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            fontLoaded: false,
        }
    }

    _loadAssetsAsync = async () => {
        await Font.loadAsync({
          'open-sans-bold': require('./assets/fonts/open-sans/OpenSans-Bold.ttf'),
        });
        this.setState({ fontLoaded: true });
      }

    async componentDidMount() {
        this._loadAssetsAsync();
    }

    render () {
        return <AppContainer/>;
    }
}

const RootStack = createStackNavigator(
    {
        LoginScreen: {
            screen: LoginScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Home',
                header: null
              })
        },
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Home',
                header: null
              })
        },
        RegisterPage: {
            screen: RegisterPage,
            navigationOptions: ({navigation}) => ({
                title: 'Home',
                header: null
              })
        },
        RegisterBuyer: {
            screen: RegisterBuyer,
            navigationOptions: ({navigation}) => ({
                title: 'Home',
                header: null
              })
        },
        RegisterSeller: {
            screen: RegisterSeller,
            navigationOptions: ({navigation}) => ({
                title: 'Home',
                header: null
              })
        },
        DetailScreen: {
            screen: DetailScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Home',
                header: null
              })
        }
    },
    {
        defaultNavigationOptions: {
            headerTintColor: 'red',
            headerStyle: {
                backgroundColor: '#0089fa'
            }
        
        },
        initialRouteName: 'LoginScreen'
    }
)

const AppContainer = createAppContainer(RootStack);