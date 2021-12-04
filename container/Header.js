import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
const height = Dimensions.get('window').height;
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Cricket Prediction</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#d19302',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
  },
});
export default Header;
