import {React} from 'react'
import { View, Text,StyleSheet,Image,ScrollView,Button } from 'react-native';
import  {AboutUsPic}  from '../AboutUsPic';
import { HorizontalScroll } from '../HorizontalScroll';


export const AboutUs = () => { 

  return (
      <ScrollView contentContainerStyle={styles.container}> 
      <AboutUsPic />
      <View style={[styles.overlay, { top: 100 }]}>
        <Text style={styles.text}>Unlock Your Adventure: Where Gaming Never Ends!</Text>
        <Text style={styles.subtitle}>A single destination for your gaming needs</Text>
      </View>

      <View style={styles.sectionContainer}>
       <Text style={styles.sectionText}>Who We Are</Text>
       <Text style={styles.sectionDescription}>
         Welcome to our vibrant hub of gaming news and insights!
         Our team of engineers, and passionate gamer's create a one stop destination for your gaming needs
         Dive into the heart of gaming excellence with our meticulously curated Game of the Year page.
         Stay in the loop with our dynamic news page, your one-stop destination for all things gaming.
         Regardless of who you are our mission is the same: to ignite the passion for gaming by providing a dynamic platform where 
         players of all backgrounds can come together to explore and celebrate their gaming experience.
       </Text>
      </View>
      <HorizontalScroll style={styles.horizontalScroll}/>
      </ScrollView>
  )
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  overlay: {
    position: 'absolute',
    left: 10,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle:{
    marginTop:10,
    marginRight:1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  sectionContainer: {
    position: 'absolute',
    left: 30,
    right: 0,
  },
  sectionText: {
    marginTop:450,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 16,
    color: 'white',
  },
});
