import React from "react";
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import { Feather } from '@expo/vector-icons'

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 36 : 64;

export default function Header({ name }){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
             <Text style={styles.usermane}> {name}</Text>

             <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                <Feather name = "user" size = {27} color = "#fff"/>
             </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#8000ff',
        paddingTop: StatusBarHeight, 
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    usermane:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 44 / 2,

    }
})