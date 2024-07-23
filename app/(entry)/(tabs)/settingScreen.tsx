import React, { useState } from 'react';
import { StyleSheet, Pressable, Linking, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useSound from '@/components/audio/useSound'; // Adjust the path if needed
import soundFile from '@/assets/sounds/soundEffects/select.mp3'; // Replace with your actual sound file path

export default function SettingScreen() {
  const { playSound, setVolume, volume } = useSound(soundFile);
  const [musicOn, setMusicOn] = useState(true);
  const [volumeOn, setVolumeOn] = useState(true);
  const [vibrateOn, setVibrateOn] = useState(true);

  const toggleVolume = () => {
    const newVolume = volumeOn ? 0.0 : 1.0;
    setVolumeOn(!volumeOn);
    setVolume(newVolume);
    playSound(); // Play sound on volume toggle
  };

  const toggleMusic = () => {
    setMusicOn(!musicOn);
    playSound(); // Play sound on music toggle
  };

  const toggleVibrate = () => {
    setVibrateOn(!vibrateOn);
    playSound(); // Play sound on vibrate toggle
  };

  const openPrivatePolicy = () => {
    Linking.openURL('https://neillouis3.vercel.app/privatePolicy');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nameTitle}>Settings</Text>
      <View style={styles.minorContainer}>
        <Text style={styles.subTitle}>Account</Text>
        <Text>To be added</Text>
      </View>
      <View style={styles.minorContainer}>
        <Text style={styles.subTitle}>Game</Text>
        <View style={[styles.minorGameContent, { flexWrap: 'wrap', flexDirection: 'row' }]}>
          <Pressable
            style={styles.minorGameContentBtn}
            onPress={toggleMusic}
          >
            <Icon name={musicOn ? "music" : "music-off"} size={24} color="white" />
          </Pressable>
          <Pressable
            style={styles.minorGameContentBtn}
            onPress={toggleVolume}
          >
            <Icon name={volumeOn ? "volume-high" : "volume-off"} size={24} color="white" />
          </Pressable>
          <Pressable
            style={styles.minorGameContentBtn}
            onPress={toggleVibrate}
          >
            <Icon name={vibrateOn ? "vibrate" : "vibrate-off"} size={24} color="white" />
          </Pressable>
        </View>
      </View>
      <View style={styles.minorContainer}>
        <Text style={styles.subTitle}>Information</Text>
        <View style={styles.minorContent}>
          <Text>Help & Support</Text>
          <Pressable style={styles.minorContentBtn}>
            <Text>Contact Us</Text>
          </Pressable>
        </View>
        <View style={styles.minorContent}>
          <Text>Private Policy</Text>
          <Pressable style={styles.minorContentBtn} onPress={openPrivatePolicy}>
            <Text>View</Text>
          </Pressable>
        </View>
        <View style={styles.minorContent}>
          <Text>Credits</Text>
          <Pressable style={styles.minorContentBtn}>
            <Text>View</Text>
          </Pressable>
        </View>
        <View style={styles.minorContent}>
          <Text>Version</Text>
          <Text>1.0</Text>
        </View>
      </View>
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

    borderRadius: 8,
    padding: 8,
    gap: 8,

    backgroundColor: 'white',
  },
  minorContent: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  minorGameContent: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  minorContentBtn: {
    padding: 2,
    width: 100,
    borderRadius: 12,
    backgroundColor: '#4299FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minorGameContentBtn: {
    padding: 2,
    width: 50,
    height: 50,
    borderRadius: 6,
    backgroundColor: '#4299FF',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,

  },
  nameTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
