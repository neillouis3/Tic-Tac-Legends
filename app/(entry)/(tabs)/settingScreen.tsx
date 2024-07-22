import { StyleSheet, Platform, Pressable, Linking } from 'react-native';
import { View, Text } from 'react-native';


export default function SettingScreen() {
  const openPrivatePolicy = () => {
    Linking.openURL('https://neillouis3.vercel.app/privatePolicy');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.nameTitle}>Settings</Text>
      <View style={styles.minorContainer}>
        <Text style={styles.subTitle}>Account</Text>
        <Text>
          To be added
        </Text>
      </View>
      <View style={styles.minorContainer}>
        <Text style={styles.subTitle}>Game</Text>
      </View>
      <View style={styles.minorContainer}>
        <Text style={styles.subTitle}>Information</Text>
        <View style={styles.minorContent}>
          <Text>
            Help & Support
          </Text>
          <Pressable style={styles.minorContentBtn}>
            <Text>
              Contact Us
            </Text>
          </Pressable>
        </View>

        <View style={styles.minorContent}>
          <Text>
            Private Policy
          </Text>
          <Pressable style={styles.minorContentBtn} onPress={openPrivatePolicy}>
            <Text>
              View
            </Text>
          </Pressable>
        </View>
        
        <View style={styles.minorContent}>
          <Text>
            Credits
          </Text>
          <Pressable style={styles.minorContentBtn}>
            <Text>
              View
            </Text>
          </Pressable>
        </View>        
        
        <View style={styles.minorContent}>
          <Text>
            Version
          </Text>
          <Text>
              1.0
          </Text>

        </View>

      </View>

      <Text style={styles.bottomText}>neillouis3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
  },

  minorContainer: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    gap: 8,
  },
  minorContent: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },

  minorContentBtn: {
    padding: 2,
    width: 100,
    borderRadius: 12,
    backgroundColor: '#4299FF',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },

  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

