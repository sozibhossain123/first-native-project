import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors } from "./src/theme/colors";
import { spacing } from "./src/theme/spacing";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';




export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter_900Black', fontSize: 20 }}>Hello sozib first react native app</Text>
      
      <View>
        <Text style={styles.sozib }>Hello</Text>
        <Image style={{width: 200, height: 200, borderRadius: 25, marginTop: spacing[8]}} source={require('./assets/robin.jpg')} />
        
      </View>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkorange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sozib: {
    backgroundColor: '#000',
    fontSize: 30,
    color: '#fff',
    textAlign: 'center'
    
  },
  

  

});
