import {StyleSheet, View, Text, Pressable, Image, } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function ProfailHeader() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.headerImageArea}>
                <Image style={styles.headerLeftImage} source={require('../../assets/ellipse-50.png')} />
                <Image style={styles.headerRightImage} source={require('../../assets/ellipse-49.png')} />
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    // blogstopBannerIconArea
    header: {
        backgroundColor: '#3B4DB9',
        
        
    },
    headerImageArea: {
        flexDirection: 'row',
    },
    headerLeftImage: {
        width: 59.92,
        height: 59.92,
        left: '-13%',
        top: '10%',
    },
    headerRightImage: {
        width: 131,
        height: 131,
        left: '140%',
        top: '-10%',
    },
    // blogstopBannerIconArea end
});