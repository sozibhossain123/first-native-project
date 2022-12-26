import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors } from "./src/theme/colors";
import { spacing } from "./src/theme/spacing";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import blogs from "./src/screens/blogs";



const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="blogs" component={blogs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Inter_900Black',
    
  },
  sozib: {
    backgroundColor: '#000',
    fontSize: 30,
    color: '#fff',
    textAlign: 'center'
    
  },
  

});
