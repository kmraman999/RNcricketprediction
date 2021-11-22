// import React, {useState, useEffect} from 'react';
// import {View, StyleSheet, Text, Button} from 'react-native';
// import axios from 'axios';

// const About = () => {
//   const [lines, setLines] = useState([]);

//   // const fetchHandler = async () => {
//   //   await axios
//   //     .get('https://prediction-8ac6d-default-rtdb.firebaseio.com/.json')
//   //     .then(response => {
//   //       console.log(response.data.content);
//   //       setLines(response.data.content);
//   //     })
//   //     .catch(err => console.log(err.response.data));
//   // };

//   // useEffect(() => {
//   //   async function fetchHandler() {
//   //     await axios
//   //       .get('https://cricket-prediction-1-default-rtdb.firebaseio.com/.json')
//   //       .then(response => {
//   //         setLines(response.data.content);
//   //       })
//   //       .catch(err => console.log(err.response.data));
//   //   }
//   //   fetchHandler();
//   // }, []);

//   return (
//     <View style={styles.center}>
//       {/* <Button title="fetch" onPress={fetchHandler}></Button> */}

//       {lines.map(item => {
//         return (
//           <Text style={styles.text} key={item}>
//             {item}
//           </Text>
//         );
//       })}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   center: {
//     padding: 10,
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//   },

//   text: {
//     width: '100%',
//     textAlign: 'center',
//     fontSize: 25,
//     backgroundColor: 'red',
//     margin: 10,
//     paddingVertical: 20,
//     color: 'black',
//   },
// });

// export default About;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Whatsapp from './Whatsapp';

const About = () => {
  return (
    <>
      <Whatsapp style={styles.homescreen} />
    </>
  );
};

export default About;

const styles = StyleSheet.create({
  homescreen: {
    height: '100%',
  },
});
