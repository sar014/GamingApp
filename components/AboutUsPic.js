import * as React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native';


export const AboutUsPic = () => { 
  return (
      <Image source={require('../assets/aboutUsPic.jpg')}
              style={styles.image}
              resizeMode="cover"
      /> 
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%', 
    height: 400, 
    marginBottom: 570, 
  },
});
