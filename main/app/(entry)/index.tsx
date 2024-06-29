import { ImageBackground, Image, StyleSheet, Platform } from 'react-native';
import Button from '@/components/frontend/Button';
import {View, Text} from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground source={require('../../assets/images/bg.png')} style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} 
        style={styles.logo}
      />




      <Button 
        onPress={() => {}}
        style={styles.button}>
        <Text>Play</Text>
      </Button>
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
