import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Whatsapp from './Whatsapp';

const Home = () => {
  return (
    <>
      <Whatsapp style={styles.homescreen} />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  homescreen: {
    height: '100%',
  },
});
