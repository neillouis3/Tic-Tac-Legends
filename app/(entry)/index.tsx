import { ImageBackground, Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import Button from '@/components/Button';
import { View, Text } from 'react-native';

export default function HomeScreen({ navigation }: { navigation: any }) {
  const goToNormalGame = () => {
    navigation.navigate('normalGame');
  };

  return (
    <ImageBackground source={require('../../assets/images/bg.png')} style={styles.container}>
      <Image source={require('../../assets/images/title.png')} style={styles.logo} />

      <Button onPress={goToNormalGame}>
        <Text style={styles.buttonText}>Play</Text>
      </Button>
      <Text style={styles.bottomText}>neillouis3</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  logo: {
    aspectRatio: 0.75,
    marginBottom: 150, // Adjust this value as needed
    marginTop: -150, // Move the logo higher by using a negative marginTop
    resizeMode: 'contain',
  },

  buttonText: {
    color: 'white',
    fontSize: 0,
  },

  bottomText: {
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#4299FF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

