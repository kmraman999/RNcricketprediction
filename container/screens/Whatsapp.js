// import React, {Component, useState, useEffect} from 'react';
// import {
//   View,
//   StyleSheet,
//   Text,
//   Button,
//   Image,
//   Linking,
//   TouchableHighlight,
//   ScrollView,
//   TouchableOpacity,
//   Dimensions,
//   Alert,
// } from 'react-native';

// import Fontisto from 'react-native-vector-icons/Fontisto';
// const height = Dimensions.get('window').height;
// const width = Dimensions.get('window').width;

// import database from '@react-native-firebase/database';
// let itemsRef = database().ref('/user');

// // const [lines, setLines] = useState([]);

// // useEffect(() => {
// //   itemsRef.on('value', snapshot => {
// //     let data = snapshot.val();
// //     const items = Object.values(data);
// //     setLines(items);
// //     console.log(lines);
// //   });
// // }, []);

// export default class Whatsapp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       mobileNo: '8791657509',
//       message: 'Hi ! , I want prediction',
//     };
//   }
//   openWhatsApp = () => {
//     let msg = this.state.message;
//     let mobile = this.state.mobileNo;
//     if (mobile) {
//       if (msg) {
//         let url =
//           'whatsapp://send?text=' +
//           this.state.message +
//           '&phone=91' +
//           this.state.mobileNo;
//         Linking.openURL(url)
//           .then(data => {
//             console.log('WhatsApp Opened successfully ' + data);
//           })
//           .catch(() => {
//             alert('Make sure WhatsApp installed on your device');
//           });
//       }
//     }
//   };
//   render() {
//     return (
//       // <ScrollView>
//       //   <View style={styles.container}>
//       //     {lines.map(item => {
//       //       return (
//       //         <View
//       //           key={item}
//       //           style={{width: width, height: 90, backgroundColor: '#64b5f6'}}>
//       //           <Text style={styles.text}>{item}</Text>
//       //         </View>
//       //       );
//       //     })}

//       //     <View style={styles.button}>
//       //       <Button
//       //         color="#25D366"
//       //         onPress={openWhatsApp}
//       //         title="Contact Whatsapp"
//       //       />
//       //     </View>
//       //     <TouchableOpacity onPress={openWhatsApp}>
//       //       <Fontisto name="whatsapp" color="#ffff" size={56} />
//       //     </TouchableOpacity>
//       //   </View>
//       // </ScrollView>
//       <ScrollView>
//         <View style={styles.container}>
//           <View style={{width: width, height: 90, backgroundColor: '#64b5f6'}}>
//             <Text style={styles.text}>For BBL Prediction Contact Us</Text>
//           </View>
//           <View style={{width: width, height: 120, backgroundColor: '#42a5f5'}}>
//             <Text style={styles.text}>
//               For Cricket Prediction Contact Us On 8791657509
//             </Text>
//           </View>
//           <View style={{width: width, height: 90, backgroundColor: '#2196f3'}}>
//             <Text style={styles.text}>T20 World Cup Prediction</Text>
//           </View>
//           <View style={{width: width, height: 120, backgroundColor: '#1e88e5'}}>
//             <Text style={styles.text}>Women's BBL Prediction Contact Us</Text>
//           </View>
//           <View
//             style={{
//               width: width,
//               height: 120,
//               backgroundColor: '#1976d2',
//               justifyContent: 'center',
//             }}>
//             <Text style={styles.text}>
//               For All International/Domestic Cricket Prediction Contact Us
//             </Text>
//           </View>
//           <View style={styles.button}>
//             <Button
//               color="#25D366"
//               onPress={this.openWhatsApp}
//               title="Contact Whatsapp"
//             />
//           </View>
//           <TouchableOpacity onPress={this.openWhatsApp}>
//             <Fontisto name="whatsapp" color="#ffff" size={56} />
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#2a9df4',
//     height: height,
//     width: width,
//     alignItems: 'center',
//   },

//   button: {
//     width: 200,
//     margin: 30,
//   },
//   imagestyle: {
//     width: 100,
//     height: 100,
//   },

//   text: {
//     fontWeight: '500',
//     textAlign: 'center',
//     fontSize: 25,
//     paddingVertical: 28,
//     color: '#03254c',
//   },
// });
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  Linking,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
import LinearGradient from 'react-native-linear-gradient';
import database from '@react-native-firebase/database';

const Whatsapp = () => {
  const [lines, setLines] = useState([]);
  const [mobileNo, setmobileNo] = useState('7217367662');
  const [message, setmessage] = useState('Hi ! , I want prediction');

  let itemsRef = database().ref('/bbl');

  useEffect(() => {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      const items = Object.values(data);
      setLines(items);
      console.log(lines);
    });
  }, []);

  const openWhatsApp = () => {
    let msg = message;
    let mobile = mobileNo;
    if (mobile) {
      if (msg) {
        let url = 'whatsapp://send?text=' + message + '&phone=91' + mobileNo;
        Linking.openURL(url)
          .then(data => {
            console.log('WhatsApp Opened successfully ' + data);
          })
          .catch(() => {
            alert('Make sure WhatsApp installed on your device');
          });
      }
    }
  };

  return (
    <LinearGradient
      colors={['#cf9e2d', '#349c1a', '#192f6a']}
      style={styles.container}>
      <FlatList
        data={lines}
        renderItem={({item}) => {
          return (
            <View style={{width: width, height: 90}}>
              <Text style={styles.text}>{item}</Text>
            </View>
          );
        }}
        ListFooterComponent={() => {
          return (
            <View style={styles.footer}>
              <View style={styles.button}>
                <Button
                  color="#25D366"
                  onPress={openWhatsApp}
                  title="Contact Whatsapp"
                />
              </View>
              <TouchableOpacity onPress={openWhatsApp}>
                <Fontisto name="whatsapp" color="#ffff" size={56} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </LinearGradient>
  );
};

export default Whatsapp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2a9df4',
    height: height,
    width: width,
    alignItems: 'center',
  },

  button: {
    width: 200,
    margin: 30,
  },
  imagestyle: {
    width: 100,
    height: 100,
  },

  text: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 25,
    paddingVertical: 28,
    color: '#26094a',
    fontWeight:'700'
    
  },
  footer: {
    alignItems: 'center',
  },
});

{
  /* <View
                style={{width: width, height: 120, backgroundColor: '#42a5f5'}}>
                <Text style={styles.text}>{item}</Text>
              </View>
              <View
                style={{width: width, height: 90, backgroundColor: '#2196f3'}}>
                <Text style={styles.text}>{item}</Text>
              </View>
              <View
                style={{width: width, height: 120, backgroundColor: '#1e88e5'}}>
                <Text style={styles.text}>{item}</Text>
              </View>
              <View
                style={{
                  width: width,
                  height: 120,
                  backgroundColor: '#1976d2',
                  justifyContent: 'center',
                }}>
                <Text style={styles.text}>
                  For All International/Domestic Cricket Prediction Contact Us
                </Text>
              </View> */
}
