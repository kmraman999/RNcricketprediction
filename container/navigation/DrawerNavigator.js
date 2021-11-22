import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import AboutUs from '../screens/AboutUs';
import About from '../screens/About';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#90caf9',
          },
        }}>
        <Drawer.Screen
          name="Cricket Prediction"
          component={Home}
          options={{
            drawerActiveBackgroundColor: '#0c80ed',
            drawerLabelStyle: {color: 'black'},
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutUs}
          options={{
            drawerActiveBackgroundColor: '#0c80ed',
            drawerLabelStyle: {color: 'black'},
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
