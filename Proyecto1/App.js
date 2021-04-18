import React from 'react';
import { StyleSheet, ImageBackground, View, Text} from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      {/* <ActivityIndicator size="large" color="#0000ff" /> */}
      <ImageBackground 
      style = {styles.photo}
      // source = {require('./assets/icon.png')}
      source = {{ uri : 'http://placekitten.com/g/200/200'}}

      >
        <Text>LALALA</Text>
      </ImageBackground>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 22,
  },
  photo: {
    height: 200,
    width: 200,
  }
});
