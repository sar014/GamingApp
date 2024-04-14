import React from 'react';
import { Video } from 'expo-av';
import { StyleSheet, View } from 'react-native';

export const HomePageVideo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          source={require('../assets/videobg.mp4')}
          style={styles.video}
          shouldPlay
          isLooping
          isMuted
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 200,
  },
  videoContainer: {
    width: '90%',
    height: '100%',
    overflow: 'hidden', // Ensure video stays within rounded border
    borderRadius: 20, // Adjust the value as needed for roundedness
  },
  video: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden'
  },
});
