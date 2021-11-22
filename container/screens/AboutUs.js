import React, {Component} from 'react';
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
} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNo: '8791657509',
      message: 'Hi ! , I want prediction',
    };
  }
  openWhatsApp = () => {
    let msg = this.state.message;
    let mobile = this.state.mobileNo;
    if (mobile) {
      if (msg) {
        let url =
          'whatsapp://send?text=' +
          this.state.message +
          '&phone=91' +
          this.state.mobileNo;
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
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{width: width, height: 120, backgroundColor: '#64b5f6'}}>
            <Text style={styles.text}>
              Big Bash Match ki 100% Confirm Report Ke Liye Message Kre
            </Text>
          </View>
          <View style={{width: width, height: 120, backgroundColor: '#42a5f5'}}>
            <Text style={styles.text}>
              Prediction ke liye 8791657509 par msg kre
            </Text>
          </View>
          <View style={{width: width, height: 90, backgroundColor: '#2196f3'}}>
            <Text style={styles.text}>T20 World Cup Prediction</Text>
          </View>
          <View style={{width: width, height: 120, backgroundColor: '#1e88e5'}}>
            <Text style={styles.text}>Women's BBL Prediction Contact Us</Text>
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
          </View>
          <View style={styles.button}>
            <Button
              color="#25D366"
              onPress={this.openWhatsApp}
              title="Contact Whatsapp"
            />
          </View>
          <TouchableOpacity onPress={this.openWhatsApp}>
            <Fontisto name="whatsapp" color="#ffff" size={56} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

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
    color: '#03254c',
  },
});
