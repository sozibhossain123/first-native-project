import { StyleSheet, Image, Text, View, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';




export default function blogs() {
  return (
    < >
        <View style={styles.header}>
            <View style={styles.headerImageArea}>
                <Image style={styles.headerLeftImage} source={require('../../assets/ellipse-50.png')} />
                <Image style={styles.headerRightImage} source={require('../../assets/ellipse-49.png')} />
            </View>
            <View style={styles.blogstopIconArea}>
                <AntDesign name="arrowleft" size={24} color="white" style={styles.blogsBackIcon} />
                <Text style={styles.blogstoptext}>Blogs</Text>
                <AntDesign name="close" size={24} color="white" style={styles.blogsXIcon} />
            </View>
        </View>

        <SafeAreaView style={styles.container}>
            
            <ScrollView>
                <View style={styles.blogsArea}>
                    <View>
                        <Image source={require('../../assets/rectangle-863.png')} />
                    </View>
                    <View style={styles.blogsAreaText}>
                        <Text style={styles.blogsData}>20 Apr, 2022</Text>
                        <Text style={styles.blogstext}>How Long Does It Take To Build A Salon Booking App?</Text>
                        <View style={styles.blogsIcon}>
                            <Text style={styles.blogsEyeIcone}> <AntDesign name="eye" size={15} color="red" /> 20</Text>
                            <Text style={styles.blogsMessageIcone}>  <Feather name="message-circle" size={15} color="red" /> 25</Text>
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
                            <Text style={styles.blogsEyeIcone}> <AntDesign name="eye" size={15} color="red" /> 20</Text>
                            <Text style={styles.blogsMessageIcone}>  <Feather name="message-circle" size={15} color="red" /> 25</Text>
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
                            <Text style={styles.blogsEyeIcone}> <AntDesign name="eye" size={15} color="red" /> 20</Text>
                            <Text style={styles.blogsMessageIcone}>  <Feather name="message-circle" size={15} color="red" /> 25</Text>
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
                            <Text style={styles.blogsEyeIcone}> <AntDesign name="eye" size={15} color="red" /> 20</Text>
                            <Text style={styles.blogsMessageIcone}>  <Feather name="message-circle" size={15} color="red" /> 25</Text>
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
                            <Text style={styles.blogsEyeIcone}> <AntDesign name="eye" size={15} color="red" /> 20</Text>
                            <Text style={styles.blogsMessageIcone}>  <Feather name="message-circle" size={15} color="red" /> 25</Text>
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
                            <Text style={styles.blogsEyeIcone}> <AntDesign name="eye" size={15} color="red" /> 20</Text>
                            <Text style={styles.blogsMessageIcone}>  <Feather name="message-circle" size={15} color="red" /> 25</Text>
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
                            <Text style={styles.blogsEyeIcone}> <AntDesign name="eye" size={15} color="red" /> 20</Text>
                            <Text style={styles.blogsMessageIcone}>  <Feather name="message-circle" size={15} color="red" /> 25</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    // blogstopBannerIconArea
    header: {
        backgroundColor: 'linear-gradient(179.91deg, #0C1740 0.07%, #3B4DB9 131.92%)',
        width: 375,
        height: 137,
        
        
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
    blogstopIconArea: {
        position: 'absolute',
        flexDirection: 'row',
        padding: 15,
        marginTop: 30,
        
    },
    blogsBackIcon: {
        width: 19,
        top: '5%',
    },
    blogstoptext: {
        color: '#fff',
        fontSize: 20,
        lineHeight: 26,
        left: '500%',
        top: '5%',
        
    },
    blogsXIcon: {
        width: 22,
        height: 22,
        left: '900%',
        top: '5%',
    },
    // blogstopBannerIconArea end

    // blogs area
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
    
    // blogs area end
    
});