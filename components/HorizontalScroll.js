import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export const HorizontalScroll = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const carouselItems = [
        {
            key: '1',
            text: 'Sangeet Agrawal | CEO',
            uri: require('../assets/new_avatar.png'),
        },
        {
            key: '2',
            text: 'Omar | CEO',
            uri: require('../assets/new_avatar.png'),
        },
        {
            key: '3',
            text: 'Saylee | CEO',
            uri: require('../assets/new_avatar2.png'),
        },
        {
            key: '4',
            text: 'Sarothi Adhikary | CEO',
            uri: require('../assets/new_avatar.png'),
        },
    ];

    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Image source={item.uri} style={styles.image} />
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        );
    };

    const { width } = Dimensions.get('window');

    useEffect(() => {
        // Start autoplay when component mounts
        carouselRef.current.startAutoplay();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Our Team</Text>
            </View>
            <Carousel
                layout="default"
                ref={carouselRef}
                data={carouselItems}
                sliderWidth={width}
                itemWidth={width}
                renderItem={renderItem}
                loop={true}
                autoplay={true}
                autoplayInterval={3000}
                onSnapToItem={(index) => setActiveIndex(index)}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    header: {
        marginBottom: -150,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600',
        marginTop:-180,
        marginLeft:-250,
        color: '#fff',
    },
    itemContainer: {
        borderRadius: 5,
        width: '100%',
        height: 280,
        padding: 30,
        marginLeft: 30,
        marginRight: 30,
    },
    image: {
        width: '80%',
        height: '70%',
        resizeMode: 'contain',
    },
    itemText: {
        marginTop: 10,
        fontSize: 16,
        color: '#fff',
    },
});

