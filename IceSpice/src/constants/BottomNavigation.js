import { useNavigation } from '@react-navigation/native';
import React, { useState,useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import imagePath from './imagePath';
import NavigationStrings from './NavigationStrings';

const BottomNavigation = ({children,onPress}) => {
    
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.menuContainer} onPress={onPress}>
                {children}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    menuContainer: {
        // flex: 1,
        width: '100%',
        backgroundColor: '#abc',
        position:'absolute',
        bottom:0,
        height: 73,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:15
    },
})
export default BottomNavigation;