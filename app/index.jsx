import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from './components/ImageViewer';

export default function App() {

  const PlaceholderImage = require('./assets/images/background-image.png');
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme='primary' label="Choose a photo" onPress={pickImageAsync} />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});