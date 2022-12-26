import { StyleSheet, Image, Text, View, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';




export default function blogs() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View>
                <ImageBackground source={require('../../assets/rectangle-46.png')} resizeMode="cover" style={styles.image}>
                    <View style={styles.blogstopIconArea}>
                        <View><AntDesign name="arrowleft" size={24} color="white" /></View>
                        <View><Text style={styles.blogstoptext}>Blogs</Text></View>
                        <View><AntDesign name="close" size={24} color="white" /></View>
                    </View>
                    
                </ImageBackground>
            </View>
            <View>
                <View style={styles.blogsArea}>
                    <View>
                        <Image source={require('../../assets/rectangle-863.png')} />
                    </View>
                    <View style={styles.blogsAreaText}>
                        <Text style={styles.blogsData}>20 Apr, 2022</Text>
                        <Text style={styles.blogstext}>How Long Does It Take To Build A Salon Booking App?</Text>
                        <View style={styles.blogsIcon}>
                            <Text style={styles.blogsEyeIcone}> <AntDesign name="eye" size={15} color="black" /> 20</Text>
                            <Text style={styles.blogsMessageIcone}>  <Feather name="message-circle" size={15} color="black" /> 25</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.blogsArea}>
                    <View>
                        <Image source={require('../../assets/rectangle-863.png')} />
                    </View>
                    <View style={styles.blogsAreaText}>
                        <Text style={styles.blogsData}>20 Apr, 2022</Text>
                        <Text style={styles.blogstext}>How Long Does It Take To Build A Salon Booking App?</Text>
                        <View style={styles.blogsIcon}>
                            <Text style={styles.blogsEyeIcone}> <AntDesign name="eye" size={15} color="black" /> 20</Text>
                            <Text style={styles.blogsMessageIcone}>  <Feather name="message-circle" size={15} color="black" /> 25</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.blogsArea}>
                    <View>
                        <Image source={require('../../assets/rectangle-863.png')} />
                    </View>
                    <View style={styles.blogsAreaText}>
                        <Text style={styles.blogsData}>20 Apr, 2022</Text>
                        <Text style={styles.blogstext}>How Long Does It Take To Build A Salon Booking App?</Text>
                        <View style={styles.blogsIcon}>
                            <Text style={styles.blogsEyeIcone}> <AntDesign name="eye" size={15} color="black" /> 20</Text>
                            <Text style={styles.blogsMessageIcone}>  <Feather name="message-circle" size={15} color="black" /> 25</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.blogsArea}>
                    <View>
                        <Image source={require('../../assets/rectangle-863.png')} />
                    </View>
                    <View style={styles.blogsAreaText}>
                        <Text style={styles.blogsData}>20 Apr, 2022</Text>
                        <Text style={styles.blogstext}>How Long Does It Take To Build A Salon Booking App?</Text>
                        <View style={styles.blogsIcon}>
                            <Text style={styles.blogsEyeIcone}> <AntDesign name="eye" size={15} color="black" /> 20</Text>
                            <Text style={styles.blogsMessageIcone}>  <Feather name="message-circle" size={15} color="black" /> 25</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.blogsArea}>
                    <View>
                        <Image source={require('../../assets/rectangle-863.png')} />
                    </View>
                    <View style={styles.blogsAreaText}>
                        <Text style={styles.blogsData}>20 Apr, 2022</Text>
                        <Text style={styles.blogstext}>How Long Does It Take To Build A Salon Booking App?</Text>
                        <View style={styles.blogsIcon}>
                            <Text style={styles.blogsEyeIcone}> <AntDesign name="eye" size={15} color="black" /> 20</Text>
                            <Text style={styles.blogsMessageIcone}>  <Feather name="message-circle" size={15} color="black" /> 25</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.blogsArea}>
                    <View>
                        <Image source={require('../../assets/rectangle-863.png')} />
                    </View>
                    <View style={styles.blogsAreaText}>
                        <Text style={styles.blogsData}>20 Apr, 2022</Text>
                        <Text style={styles.blogstext}>How Long Does It Take To Build A Salon Booking App?</Text>
                        <View style={styles.blogsIcon}>
                            <Text style={styles.blogsEyeIcone}> <AntDesign name="eye" size={15} color="black" /> 20</Text>
                            <Text style={styles.blogsMessageIcone}>  <Feather name="message-circle" size={15} color="black" /> 25</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.blogsArea}>
                    <View>
                        <Image source={require('../../assets/rectangle-863.png')} />
                    </View>
                    <View style={styles.blogsAreaText}>
                        <Text style={styles.blogsData}>20 Apr, 2022</Text>
                        <Text style={styles.blogstext}>How Long Does It Take To Build A Salon Booking App?</Text>
                        <View style={styles.blogsIcon}>
                            <Text style={styles.blogsEyeIcone}> <AntDesign name="eye" size={15} color="black" /> 20</Text>
                            <Text style={styles.blogsMessageIcone}>  <Feather name="message-circle" size={15} color="black" /> 25</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    // blogstopIconArea
    image: {
        width: 375,
        height: 137,
    },
    blogstopIconArea: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
    },
    blogstoptext: {
        color: '#fff',
    },
    blogsArea: {
        flex: 1,
        flexDirection: 'row',
        width: '73%',
        padding: 10,
        borderBottomColor: ' #737373',
        borderBottomWidth: 0.5,
    },
    blogsData: {
        fontSize: 10,
        lineHeight: 13,
    },
    blogsAreaText: {
        marginLeft: 10,
        paddingTop: 20,
        paddingBottom: 20,
    },
    blogstext: {
        fontSize: 16,
        lineHeight: 21,

    },
    blogsIcon: {
        flexDirection: 'row',
        marginTop: 10,
        
    },
    blogsEyeIcone: {
        fontSize: 10,
        lineHeight: 15,
    },
    blogsMessageIcone: {
        marginLeft: 30,
        alignItems: 'center',
        fontSize: 10,
        lineHeight: 15,
    }
    
    
    
});