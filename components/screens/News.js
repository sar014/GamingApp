import { View, Text,StyleSheet,ScrollView,TouchableOpacity,Image } from 'react-native'
import News1Image from '../Assets/news1.jpg';
import News2Image from '../Assets/news2.jpg';
import News3Image from '../Assets/news3.jpg';
import News4Image from '../Assets/news4.jpg';
import React from 'react'

export default function News() {
  return (
      <View style={styles.container}>
        <Text style={styles.header}>REVIEWS</Text>
        <ScrollView contentContainerStyle={[styles.scrollViewContent, { paddingBottom: 75 }]}>
          {/* First news item */}
          <TouchableOpacity onPress={() => openUrl('https://in.ign.com/marvels-spider-man-2/195841/review/marvels-spider-man-2-review-truly-spectacular')}>
            <View style={styles.newsItem}>
              <Image
                source={News1Image}
                style={styles.image}
              />
              <Text style={styles.newsText}>Marvel's Spider-Man 2 Review:{'\n'}Beyond Amazing! (10/10)</Text>
            </View>
          </TouchableOpacity>
  
          {/* Second news item */}
          <TouchableOpacity onPress={() => openUrl('https://www.ign.com/articles/assassins-creed-mirage-review')}>
            <View style={styles.newsItem}>
              <Image
                source={News2Image}
                style={styles.image}
              />
              <Text style={styles.newsText}>Assassin’s Creed Mirage Review:{'\n'}Marhaba! (9/10)</Text>
            </View>
          </TouchableOpacity>
  
          {/* Third news item */}
          <TouchableOpacity onPress={() => openUrl('https://in.ign.com/ghost-of-tsushima/149002/review/ghost-of-tsushima-review')}>
            <View style={styles.newsItem}>
              <Image
                source={News3Image}
                style={styles.image}
              />
              <Text style={styles.newsText}>Ghost of Tsushima Review:{'\n'}The Rise of Ghost! (9/10)</Text>
            </View>
          </TouchableOpacity>
  
          {/* Fourth news item */}
          <TouchableOpacity onPress={() => openUrl('https://www.ign.com/articles/god-of-war-ragnarok-review')}>
            <View style={styles.newsItem}>
              <Image
                source={News4Image}
                style={styles.image}
              />
              <Text style={styles.newsText}>God of War Ragnarok Review:{'\n'}The Saga Continues! (9/10)</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    paddingTop: 75,
    paddingHorizontal: 0, 
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: 'black',
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    marginHorizontal: 0,
  },

  scrollViewContent: {
    flexGrow: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  newsItem: {
    marginBottom: 20,
    alignItems: 'center',
    width: '100%', 
    backgroundColor: 'white', 
    flexDirection: 'column', 
    justifyContent: 'center', 

  },
  image: {
    height: 200,
    resizeMode: 'cover',
    aspectRatio: 16 / 9,
    width: '100%',
  },
  newsText: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
    color: 'black',
    width: '100%', // Use percentage-based width
    fontWeight: 'bold', // Make text bold
    paddingBottom: 14, // Add padding to the bottom
  },
});

