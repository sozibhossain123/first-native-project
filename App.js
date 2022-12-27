import React from "react";
import { StyleSheet, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import blogs from "./src/screens/blogs";
import FAQ from "./src/screens/FAQ";



const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name="blogs" component={blogs} /> */}
          <Stack.Screen name="blogs" component={FAQ} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="#fff" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Inter_900Black',
    
  },
});
