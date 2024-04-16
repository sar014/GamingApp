import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import News1Image from '../Assets/goty2023.jpg'; 
import News2Image from '../Assets/goty2022.jpg';
import News3Image from '../Assets/goty2021.jpg';
import News4Image from '../Assets/goty2020.jpg';



const GOTY = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>GAME OF THE YEAR</Text>
      <ScrollView contentContainerStyle={[styles.scrollViewContent, { paddingBottom: 75 }]}>
        {/* First news item */}
        <TouchableOpacity onPress={() => openUrl('https://youtu.be/qRI0kJWuW_M?si=YX74DLc7q3UCh1LE')}>
          <View style={styles.newsItem}>
            <Image
              source={News1Image}
              style={styles.image}
            />
            <Text style={styles.newsText}>Winner of 2023:{'\n'}Baldur's Gate 3</Text>
          </View>
        </TouchableOpacity>

        {/* Second news item */}
        <TouchableOpacity onPress={() => openUrl('https://youtu.be/izThNlhRV2g?si=xtWLBRH4Kdt8yTmV')}>
          <View style={styles.newsItem}>
            <Image
              source={News2Image}
              style={styles.image}
            />
            <Text style={styles.newsText}>Winner of 2022:{'\n'}Elden Ring</Text>
          </View>
        </TouchableOpacity>

        {/* Third news item */}
        <TouchableOpacity onPress={() => openUrl('https://youtu.be/oTo_fc7k7HY?si=wMMAfcE_vSKQM9yy')}>
          <View style={styles.newsItem}>
            <Image
              source={News3Image}
              style={styles.image}
            />
            <Text style={styles.newsText}>Winner of 2021:{'\n'}It Takes Two</Text>
          </View>
        </TouchableOpacity>

        {/* Fourth news item */}
        <TouchableOpacity onPress={() => openUrl('https://youtu.be/m4qvQbLbY4U?si=1aFQI5R_Xc76P9uL')}>
          <View style={styles.newsItem}>
            <Image
              source={News4Image}
              style={styles.image}
            />
            <Text style={styles.newsText}>Winner of 2020:{'\n'}The Last of Us - Part II</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 75,
    paddingHorizontal: 0, 
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: '#FF9F59',
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
    backgroundColor: '#FF9F59', 
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
    width: '100%', 
    fontWeight: 'bold',
    paddingBottom: 14, 
  },
});


export default GOTY;
