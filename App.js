import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import LoginScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/HomeScreen';
import Bidding from './src/components/Bidding';
import RegisterPage from './src/components/RegisterPage';
import RegisterSeller from './src/components/RegisterSeller';
import RegisterBuyer from './src/components/RegisterBuyer';
import DetailScreen from './src/components/DetailScreen';
import DashBoard from './src/components/DashBoard';
import AddProduct from './src/components/AddProduct';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            fontLoaded: false,
        }
    }

    render () {
        return <AppContainer/>;
    }
}

const RootStack = createStackNavigator(
    {
        LoginScreen: {
            screen: HomeScreen,
            //screen: LoginScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Register Product',
                title: 'Login',
                header: null
              })
        },
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: ({navigation}) => ({
                header: null
              })
        },
        RegisterPage: {
            screen: RegisterPage,
            navigationOptions: ({navigation}) => ({
                title: 'Registration',
              })
        },
        RegisterBuyer: {
            screen: RegisterBuyer,
            navigationOptions: ({navigation}) => ({
                title: 'Buyer Registration',
              })
        },
        RegisterSeller: {
            screen: RegisterSeller,
            navigationOptions: ({navigation}) => ({
                title: 'Seller Registration',
              })
        },
        DetailScreen: {
            screen: DetailScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Details',
              })
        },
        DashBoard: {
            screen: DashBoard,
            navigationOptions: ({navigation}) => ({
                title: 'DashBoard',
                headerLeft: null
              })
        },
        AddProduct: {
            screen: AddProduct,
            navigationOptions: ({navigation}) => ({
                title: 'Add Product'
              })
        },
        Bidding: {
            screen: Bidding,
            navigationOptions: ({navigation}) => ({
                title: 'Bidding Page',
            })
        }
    },
    {
        defaultNavigationOptions: {
            headerTintColor: 'black',
            headerStyle: {
                backgroundColor: '#fff'
            }
        },
        initialRouteName: 'LoginScreen'
    }
)

const AppContainer = createAppContainer(RootStack);