import React from 'react'
import { ImageBackground,StyleSheet,View,Text } from 'react-native'
import background_img from 'D:\\App\\GamingApp\\assets\\unch.jpg'
import { BasicTabs } from '../BasicTabs'
import { HomePageVideo } from '../HomePageVideo'
import { HomeScreenAboutUs } from '../HomeScreenAboutUs'
import { Navbar } from '../Navbar'

export const HomePage = () => {
  return (
    <>
   <ImageBackground source={background_img} resizeMode="cover" style={styles.image}>
      {<View style={styles.container}>
        <Text style={styles.greeting}>Gamer's World</Text>
      </View> }
      <HomePageVideo/>
      <HomeScreenAboutUs/>
    </ImageBackground>
    
   
    </>
  )
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    container: {
        position: 'absolute',
        alignItems: 'center',
        top: 0,
        left: 0,
        padding: 20,
      },
    greeting: {
        color: '#fff',
        marginLeft:10,
        fontSize: 50,
        fontWeight: '600',
        marginTop:40
    }
  });
