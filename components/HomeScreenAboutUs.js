import React,{ useState, useRef,useEffect } from 'react'
import { View, Text, Image, TouchableOpacity,StyleSheet,SafeAreaView,renderItem,Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import aboutUs from '../assets/videoGame3.png'

export const HomeScreenAboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const carouselItems = [
    require('../assets/bg18.jpg'),
    require('../assets/bg19.jpg'),
    require('../assets/bg20.jpg')
];

const renderItem = ({ item }) => {
  return (
      <View style={{
        borderRadius: 5,
        width:350,
        height:200,
        padding: 30,
        marginLeft: 30,
        marginRight: 125,
      }}>
          <Image source={item} style={{ width: '100%', height: '100%',resizeMode: 'cover' }} />
      </View>
  );
};
const { width } = Dimensions.get('window');
useEffect(() => {
  // Start autoplay when component mounts
  carouselRef.current.startAutoplay();
}, []);
return (
  <SafeAreaView style={{ flex: 1}}>
      <View style={{ flex: 1, paddingTop: 40 }}>
      <Text style={{ color: '#fff',fontSize: 40, fontWeight: '600',marginTop:-150,marginLeft:20}}>Wallpapers</Text>
          <Carousel
              layout="default"
              ref={carouselRef}
              data={carouselItems}
              sliderWidth={width}
              itemWidth={width}
              renderItem={renderItem} // Corrected to directly reference renderItem
              loop={true} // Allow the carousel to loop continuously
              // loopClonesPerSide={2}
              autoplay={true}
              autoplayInterval={3000}
              onSnapToItem={(index) => setActiveIndex(index)}
          />
      </View>
  </SafeAreaView>
  )
}


