import { ImageBackground, Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import Button from '@/components/ui/Button';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function GameScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Link href="/normalGame" style={styles.buttonText}>
        Play 3x3
      </Link>
      <Link href="/normal5x5Game" style={styles.buttonText}>
        Play 5x5
      </Link>
      <Link href="/normal7x7Game" style={styles.buttonText}>
        Play 7x7
      </Link>
      <Link href="/custom7x7Game" style={styles.buttonText}>
        Play Custom 7x7
      </Link>
      <Text style={styles.bottomText}>neillouis3</Text>
    </View>
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
    color: 'blue',
    fontSize: 18, // Set to a visible size
    marginVertical: 10, // Add vertical margin for spacing between buttons
    textDecorationLine: 'underline', // Optional: Add underline for links
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
