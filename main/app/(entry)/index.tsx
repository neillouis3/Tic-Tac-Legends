import { ImageBackground, Image, StyleSheet, Platform } from 'react-native';
import Button from '@/components/frontend/Button';
import {View, Text} from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground source={require('../../assets/images/bg.png')} style={styles.container}>
    
      <Button 
        onPress={() => {}}
        style={{
          backgroundColor: 'red',
          padding: 12,
          width: 100,
          height: 50,
      }}
      >
        <Text>Hello</Text>
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
});
