// useSound.js
import { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

const useSound = (soundFile) => {
  const [sound, setSound] = useState();
  const [volume, setVolume] = useState(1.0); // Default volume is 1.0 (max)

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    setSound(sound);
    await sound.setVolumeAsync(volume);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return { playSound, setVolume };
};

export default useSound;
