import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Button, TextInput, Alert} from 'react-native';
import axios from 'axios';
import {firebase} from '@react-native-firebase/database';
import database from '@react-native-firebase/database';

import LinearGradient from 'react-native-linear-gradient';
const About = () => {
  // const [lines, setLines] = useState([]);
  const [Line1, setLine1] = useState();
  const [Line2, setLine2] = useState();
  const [Line3, setLine3] = useState();
  const [Line4, setLine4] = useState();
  const [Line5, setLine5] = useState();
  const [Line6, setLine6] = useState();

  const updateHandler = () => {
    const dept = firebase.database().ref('/bbl');
    dept
      .set({
        // deptid: Line1,
        // deptname: Line2,
        0: Line1,
        1: Line2,
        2: Line3,
        3: Line4,
        4: Line5,
        5: Line6,
      })
      .then(() => console.log('Data set.'))
      .then(Alert.alert('Updated Successfully ! ', ''));
  };

  // const fetchHandler = async () => {
  //   database()
  //     .ref('/dept/')
  //     .once('value')
  //     .then(snapshot => {
  //       console.log('User data: ', snapshot.val());
  //       setLines(snapshot.val());
  //     });
  // await axios
  //   .get('https://prediction-8ac6d-default-rtdb.firebaseio.com/.json')
  //   .then(response => {
  //     console.log(response.data.content);
  //     setLines(response.data.content);
  //   })
  //   .catch(err => console.log(err.response.data));
  // };

  // useEffect(() => {
  //   async function fetchHandler() {
  //     await axios
  //       .get('https://cricket-prediction-1-default-rtdb.firebaseio.com/.json')
  //       .then(response => {
  //         setLines(response.data.content);
  //       })
  //       .catch(err => console.log(err.response.data));
  //   }
  //   fetchHandler();
  // }, []);

  return (
    <LinearGradient
    colors={['#cf9e2d', '#349c1a', '#192f6a']}
      style={styles.center}>
      <TextInput
        style={{width: 200, height: 40, backgroundColor: '#34eb7d', margin: 10}}
        value={Line1}
        onChangeText={setLine1}></TextInput>
      <TextInput
        style={{width: 200, height: 40, backgroundColor: '#34eb7d', margin: 10}}
        value={Line2}
        onChangeText={setLine2}></TextInput>
      <TextInput
        style={{width: 200, height: 40, backgroundColor: '#34eb7d', margin: 10}}
        value={Line3}
        onChangeText={setLine3}></TextInput>
      <TextInput
        style={{width: 200, height: 40, backgroundColor: '#34eb7d', margin: 10}}
        value={Line4}
        onChangeText={setLine4}></TextInput>
      <TextInput
        style={{width: 200, height: 40, backgroundColor: '#34eb7d', margin: 10}}
        value={Line5}
        onChangeText={setLine5}></TextInput>
      <TextInput
        style={{width: 200, height: 40, backgroundColor: '#34eb7d', margin: 10}}
        value={Line6}
        onChangeText={setLine6}></TextInput>
      <Button title="Update" onPress={updateHandler}></Button>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  center: {
    padding: 10,
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  text: {
    width: '100%',
    textAlign: 'center',
    fontSize: 25,
    backgroundColor: 'red',
    margin: 10,
    paddingVertical: 20,
    color: 'black',
  },
});

export default About;
