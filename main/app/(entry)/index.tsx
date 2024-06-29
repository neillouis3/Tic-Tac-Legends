import React from 'react'; // Add this import at the top of the file
import { ImageBackground, Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import {View, Text} from 'react-native';

export default function HomeScreen({ navigation }: { navigation: any }) {
  const goToNormalGame = () => {
    navigation.navigate('NormalGame');
  };

  return (
    <ImageBackground source={require('../../assets/images/bg.png')} style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} 
        style={styles.logo}
      />

      <TouchableOpacity onPress={goToNormalGame} style={styles.button}>
        <Text>Play</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  logo: {
    aspectRatio: 1,
    marginBottom: 40,
    resizeMode: 'contain',
  },

  button: {
    padding: 12,
    borderRadius: 6,
    backgroundColor: '#0a7ea4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
