import { HomePage } from "./screens/HomePage";
import { AboutUs } from "./screens/AboutUs";
import News from "./screens/News";
import GOTY from "./screens/GOTY";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';


import { View, Text } from 'react-native'
import React from 'react'


const Tab = createBottomTabNavigator()
const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position:"absolute",
    bottom:0,
    right:0,
    left:0,
    elevation:0,
    height:60,
    backgroundColor: '#7390bf'
  }
}
export default function Navbar() {
  return (
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
        name="Home" 
        component={HomePage}
        options={{
          tabBarIcon:({focused})=>{
            return (
              <View style={{alignItems:"center",justifyContent:"center"}}>
                <Entypo name="home" size={24} color={focused ? "#16247d" : "#111"} />
                <Text style={{fontSize:12,color:"#16247d"}}>HOME</Text>
              </View>
            )
          }
        }}
        />
        <Tab.Screen 
        name="GOTY" 
        component={GOTY}
        options={{
          tabBarIcon:({focused})=>{
            return (
              <View style={{alignItems:"center",justifyContent:"center"}}>
                <Entypo name="game-controller" size={24} color={focused ? "#16247d" : "#111"} />
                <Text style={{fontSize:12,color:"#16247d"}}>GOTY</Text>
              </View>
            )
          }
        }}
        />
        <Tab.Screen 
        name="News" 
        component={News}
        options={{
          tabBarIcon:({focused})=>{
            return (
              <View style={{alignItems:"center",justifyContent:"center"}}>
                <Entypo name="newsletter" size={24} color={focused ? "#16247d" : "#111"} />
                <Text style={{fontSize:12,color:"#16247d"}}>Reviews</Text>
              </View>
            )
          }
        }}
        />
        <Tab.Screen 
        name="AboutUs" 
        component={AboutUs}
        options={{
          tabBarIcon:({focused})=>{
            return (
              <View style={{alignItems:"center",justifyContent:"center"}}>
                <Entypo name="users" size={24} color={focused ? "#16247d" : "#111"} />
                <Text style={{fontSize:12,color:"#16247d"}}>About Us</Text>
              </View>
            )
          }
        }}
        />
      </Tab.Navigator>

  )
}