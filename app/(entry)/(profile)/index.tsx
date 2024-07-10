import { ImageBackground, Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import Button from '@/components/ui/Button';
import { ScrollView, View, Text } from 'react-native';

export default function ProfileScreen({ navigation }: { navigation: any }) {

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.nameTitle}>Neil Louise A. Castillon</Text>
        <Text style={styles.uniqueID}>unique-id</Text>

        <Text style={styles.levelTitle}>Level</Text>
        <View style={styles.levelBarContainer}>
          <View style={[styles.levelBar, {width:'50%'}]}></View>
        </View>


      </View>
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
  nameTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4299FF',
    textAlign: 'center',
    marginTop: 20,
  },
  uniqueID: {
    fontSize: 16,
    color: '#4299FF',
    textAlign: 'center',
    marginTop: 10,
  },
  levelTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4299FF',
    textAlign: 'center',
    marginTop: 20,
  },
  levelBarContainer: {
    width: '100%',
    height: 20,
    backgroundColor: '#4299FF',
    borderRadius: 10,
    marginTop: 10,
  },
  levelBar: {
    height: '100%',
    backgroundColor: '#FFD700',
    borderRadius: 10,
  },

});

