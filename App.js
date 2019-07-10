import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/HomeScreen';
import RegisterPage from './src/components/RegisterPage';
import RegisterSeller from './src/components/RegisterSeller';
import RegisterBuyer from './src/components/RegisterBuyer';
import DetailScreen from './src/components/DetailScreen';

export default class App extends React.Component {
    render () {
        return <AppContainer/>;
    }
}

const RootStack = createStackNavigator(
    {
        LoginScreen: {
            screen: HomeScreen
        },
        HomeScreen: {
            screen: LoginScreen
        },
        RegisterPage: {
            screen: RegisterPage
        },
        RegisterBuyer: {
            screen: RegisterBuyer
        },
        RegisterSeller: {
            screen: RegisterSeller
        },
        DetailScreen: {
            screen: DetailScreen
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