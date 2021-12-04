import React from 'react';
import {StatusBar, StyleSheet, Text, View, Dimensions} from 'react-native';
import Whatsapp from './container/screens/Whatsapp';
import TopTabNavigator from './container/navigation/TopTabNavigator';
import DrawerNavigator from './container/navigation/DrawerNavigator';
import Header from './container/Header';
import AdminPanel from './container/screens/AdminPanel';
import Home from './container/screens/Home';
import About from './container/screens/About';
import 'react-native-gesture-handler';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#d15c02" />
      <Header />
      {/* <DrawerNavigator style={styles.screen} /> */}
      {/* <About /> */}
      <AdminPanel />
      {/* <TopTabNavigator /> */}
      
      {/* <Home /> */}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    width: width,
  },
});
