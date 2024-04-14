import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { HomePage } from './components/screens/HomePage';
import Navbar from './components/Navbar';
import { Login } from './components/screens/Login';
import { HomePage } from './components/screens/HomePage';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";

import db, { initDatabase } from "./components/sqlite/SQLite";

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    initDatabase(db);
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
        <Stack.Screen name="Navbar" component={Navbar} options={{ headerShown: false }}/> 
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
