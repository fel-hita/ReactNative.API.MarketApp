import React from 'react';
import { StyleSheet, Text, FlatList, ActivityIndicator, View, Image } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import RegisterPage from './RegisterPage';
import RegisterSeller from './RegisterSeller';
import RegisterBuyer from './RegisterBuyer';
import DetailScreen from './DetailScreen';

export default class App extends React.Component {
    render () {
        return <AppContainer/>;
    }
}

const RootStack = createStackNavigator(
    {
        LoginScreen: {
            screen: LoginScreen
        },
        HomeScreen: {
            screen: HomeScreen
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