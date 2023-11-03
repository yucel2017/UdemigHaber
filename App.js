import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginPage from './src/pages/LoginPage'
import NewsDetail from './src/pages/NewsDetail'
import NewsPage from './src/pages/NewsPage'
import RegisterPage from './src/pages/RegisterPage'
import WelcomePage from './src/pages/WelcomePage'

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoutName="WelcomePage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="NewsPage" component={NewsPage} />
        <Stack.Screen name="NewsDetail" component={NewsDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})