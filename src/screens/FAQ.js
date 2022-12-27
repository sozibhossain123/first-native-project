import { StyleSheet, View, Text, Image, Pressable, FlatList, } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { AccordionList } from '../data/AccordionList';

export default function FAQ() {
    const [accordion, setAccordion] = useState(false);
  return (
    <>

        {/* ---Header--- */}
        <View style={styles.header}>
            <View style={styles.headerImageArea}>
                <Image style={styles.headerLeftImage} source={require('../../assets/ellipse-50.png')} />
                <Image style={styles.headerRightImage} source={require('../../assets/ellipse-49.png')} />
            </View>
            <View style={styles.blogstopIconArea}>
                <Pressable>
                    <AntDesign name="arrowleft" size={24} color="white" style={styles.blogsBackIcon} />
                </Pressable>
                
                <Text style={styles.blogstoptext}>FAQ’s</Text>
                <Pressable>
                    <AntDesign name="close" size={24} color="white" style={styles.blogsXIcon} />
                </Pressable>
            </View>
        </View>
        {/* ---Header end--- */}


        <SafeAreaView style={styles.container}>
            <FlatList
                data={AccordionList}
                renderItem={({item, index}) => {
                    return (
                        <View style={styles.faqArea}>
                            <Text onPress={() => {
                                    setAccordion(!accordion);
                                }} style={styles.faqQuestion}>{item.question}                
                                { accordion? <AntDesign name="minus" size={24} style={styles.plusIcon}/> 
                                :
                               <AntDesign name="plus" size={24} color="black" style={styles.plusIcon} />}
                            </Text>
                                { accordion && <Text style={styles.faqAnswer}>{item.answer}</Text>}
                            
                            <Text>----------------------------------------------------------------------------------</Text>
                        </View>
                    )
                }}
            />
            <View style={styles.seeOther}>
                <Text style={styles.seeOtherText}>See Other     <AntDesign name="leftcircleo" size={9} color="red" />    1/3    <AntDesign name="rightcircleo" size={9} color="red" /></Text>
            </View>
        </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    // blogstopHeaderIconArea
    header: {
        backgroundColor: '#3B4DB9',
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
    // blogstopHeaderIconArea end


    // faq Area
    faqArea: {
        padding: 15,
    },

    plusIcon: {
        marginLeft: '30',
        color: 'red',
    },
    faqQuestion: {
        fontSize: 16,
        lineHeight: 21,
    },
    faqAnswer: {
        fontSize: 8,
        lineHeight: 10,
        letterSpacing: '0.003em',
    },
    // seeOther
    seeOther: {
        alignItems: 'center',
        
    },
    seeOtherText: {
        fontSize: 11,
        lineHeight: 14,
        color: 'red',
    }
});