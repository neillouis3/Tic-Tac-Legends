import { ImageBackground, Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';

import { ScrollView, View, Text } from 'react-native';

export default function ProfileScreen({ navigation }: { navigation: any }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.porfileBanner}>
        <View style={styles.personalInfoContentContainer}>
          <View style={styles.playerAvatar}>
            <Image 
              source={require('@/assets/icons/placeholder.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={styles.personalInfoMainContentContainer}>
            <Text style={styles.nameTitle}>Guest</Text>
            <Text style={styles.uniqueID}>0000-0001</Text>
          </View>
        </View>

        <View style={styles.levelContainer}>
          <Text style={styles.levelTitle}>Level</Text>
          <View style={styles.levelBarContainer}>
            <View style={[styles.levelBar, {width:'50%'}]}></View>
          </View>
        </View>
      </View>
      <View style={styles.bonusContainer}>
        <Text style={styles.subTitle}>Powerups</Text>
        <Text>Coming soon</Text>
      </View>
      <View style={styles.achievementContainer}>
        <Text style={styles.subTitle}>Achievements</Text>
        <Text>Coming soon</Text>
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

  porfileBanner: {
    backgroundColor: '#4299FF',
    borderRadius: 10,
    padding: 16,
    width: '100%',
    height: 'auto',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,

  },

  personalInfoContentContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 8,
    
  },

  personalInfoMainContentContainer: {
    width: 'auto',
  },

  playerAvatar: {
    borderRadius: 8,
    width: 75,
    height: 75,

  },

  bonusContainer: {
    borderRadius: 8,

    padding: 16,
    backgroundColor: '#fff',

  },

  achievementContainer: {
    borderRadius: 8,

    padding: 16,
    backgroundColor: '#fff',
  },

  nameTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  uniqueID: {
    fontSize: 12,
    color: '#fff',
  },

  levelTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },

  levelContainer: {
  },
  levelBarContainer: {
    width: '100%',
    height: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 5,
  },
  levelBar: {
    height: '100%',
    backgroundColor: '#FFD700',
    borderRadius: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  }

});

