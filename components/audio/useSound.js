// useSound.js
import { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

const useSound = (soundFile) => {
  const [sound, setSound] = useState(null);
  const [volume, setVolume] = useState(1.0); // Default volume is 1.0 (max)

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(soundFile);
      setSound(sound);
      await sound.setVolumeAsync(volume);
    };
    
    loadSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [soundFile]);

  useEffect(() => {
    if (sound) {
      sound.setVolumeAsync(volume);
    }
  }, [volume]);

  const playSound = async () => {
    if (sound) {
      await sound.replayAsync();
    }
  };

  return { playSound, setVolume, volume };
};

export default useSound;
