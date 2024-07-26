import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Button, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import ComingSoonModal from '@/components/ui/comingSoonModal'; // Adjust the path as needed

export default function GameScreen({ navigation }: { navigation: any }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Play</Text>
      </View>
      <View style={styles.modeContainer}>
        <Text style={styles.modeTitle}>Normal Modes</Text>
        <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          centerContent={true}
          style={styles.modeContentContainer}
          contentContainerStyle={styles.modeContent}
        >
          <Link href="/normalGame" asChild>
            <Pressable style={styles.modesBtn}>
              <Text>3x3</Text>
              <Text>Classic game of tic tac toe</Text>
            </Pressable>
          </Link>
          <Link href="/normal5x5Game" asChild>
            <Pressable style={styles.modesBtn}>
              <Text>5x5</Text>
            </Pressable>
          </Link>
          <Link href="/normal7x7Game" asChild>
            <Pressable style={styles.modesBtn}>
              <Text>7x7</Text>
            </Pressable>
          </Link>
        </ScrollView>
      </View>

      <View style={styles.modeContainer}>
        <Text style={styles.modeTitle}>Custom Modes</Text>
        <Pressable style={styles.modesBtn} onPress={toggleModal}>
            <Text>Create Custom Game</Text>
          </Pressable>
        <ScrollView horizontal={true} style={styles.modeContentContainer} contentContainerStyle={styles.modeContent}>
          <Pressable style={styles.modesBtn} onPress={toggleModal}>
            <Text>3x3</Text>
          </Pressable>
          <Pressable style={styles.modesBtn} onPress={toggleModal}>
            <Text>More Coming Soon</Text>
          </Pressable>
        </ScrollView>
      </View>

      <ComingSoonModal isModalVisible={isModalVisible} toggleModal={toggleModal} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 20,
  },

  modeContainer:{
    height: 'auto',
    justifyContent: 'center',
  },
  modeTitle: {
    fontSize: 16,
    marginBottom: 10,
  },

  modeContentContainer: {
    height: 200,
    
    
  },

  modeContent: {
  }, 
  bottomText: {


    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#4299FF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  titleContainer: {
    marginBottom: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  modesBtn: {
    backgroundColor: '#4299FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 150,
    height: 150,
    marginRight: 10,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
