import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const BasicTabs = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabPress = tabName => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'Home' && styles.activeTab]}
          onPress={() => handleTabPress('Home')}
        >
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'About Us' && styles.activeTab]}
          onPress={() => handleTabPress('About Us')}
        >
          <Text style={styles.tabText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'GOTY' && styles.activeTab]}
          onPress={() => handleTabPress('GOTY')}
        >
        <Text style={styles.tabText}>GOTY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'News' && styles.activeTab]}
          onPress={() => handleTabPress('News')}
        >
          <Text style={styles.tabText}>News</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.tabContent}>
        {activeTab === 'Home' && <Text h1>Home</Text>}
        {activeTab === 'About Us' && <Text h1>About Us</Text>}
        {activeTab === 'GOTY' && <Text h1>GOTY</Text>}
        {activeTab === 'News' && <Text h1>News</Text>}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 180,
    paddingBottom: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  tabText: {
    color: '#fff',
    fontSize: 18,
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


