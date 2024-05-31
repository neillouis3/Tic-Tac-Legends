import { ImageBackground, Image, StyleSheet, Platform } from 'react-native';
import Button from '@/components/frontend/Button';
import {View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SelectionPage() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../../assets/images/bg.png')} style={styles.container}>

      <Button 
        onPress={() => navigation.navigate('NormalGameScreen')}
        style={styles.button}>
        <Text>Normal</Text>
      </Button>

      <Button 
        onPress={() => navigation.navigate('PuzzleGameScreen')}
        style={styles.button}>
        <Text>Puzzles</Text>
      </Button>


      <Button 
        onPress={() => navigation.navigate('GameModesScreen')}
        style={styles.button}>
        <Text>Gamemodes</Text>
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
