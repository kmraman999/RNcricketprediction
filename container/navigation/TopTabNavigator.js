import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from '../screens/Home';
import About from '../screens/About';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        {/* <Tab.Screen name="About" component={About} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TopTabNavigator;

const styles = StyleSheet.create({});
