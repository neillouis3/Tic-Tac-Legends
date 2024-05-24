import { ImageBackground, Image, StyleSheet, Platform } from 'react-native';
import Button from '@/components/frontend/Button';
import {View, Text} from 'react-native';

export default function SelectionPage() {
  return (
    <ImageBackground source={require('../../assets/images/bg.png')} style={styles.container}>

      <Button 
        onPress={() => {}}
        style={styles.button}>
        <Text>Normal Mode</Text>
      </Button>

      <Button 
        onPress={() => {}}
        style={styles.button}>
        <Text>5x5</Text>
      </Button>

      <Button 
        onPress={() => {}}
        style={styles.button}>
        <Text>Harder</Text>
      </Button>

      <Button 
        onPress={() => {}}
        style={styles.button}>
        <Text>Normal Mode</Text>
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

  button: {
    padding: 12,
    borderRadius: 6,
    backgroundColor: '#0a7ea4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
