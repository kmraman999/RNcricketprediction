import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const adminpanel = () => {
  const [state, setstate] = useState(initialState);

  const updateHandler = async () => {
    let param = {};

    await axios
      .post(
        'https://cricket-prediction-1-default-rtdb.firebaseio.com/content',
        param,
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.log(err.response.data));
  };

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default adminpanel;

const styles = StyleSheet.create({});
