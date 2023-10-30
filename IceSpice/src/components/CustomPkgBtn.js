/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { scale, moderateVerticalScale, moderateScale } from 'react-native-size-matters';
import fontFamily from '../styles/fontFamily';
import LinearGradient from 'react-native-linear-gradient';
const CustomPkgBtn = ({
    onPress,
    textStyle,
    btnStyle,
    btnText,
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.5}
            >
                <LinearGradient
                    colors={['#F9881F', '#FF774C']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={[styles.btnStyle, { ...btnStyle }]}
                >
                    {/* <View style={{ ...styles.gapStyle }}></View> */}
                    <Text style={[styles.textStyle, { ...textStyle }]}>{btnText}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    btnStyle: {
        width: moderateScale(300),
        height: moderateScale(45),
        borderRadius: moderateScale(42),
        alignItems: 'center',
        marginBottom: moderateVerticalScale(15),
        justifyContent: 'center',
        textAlign:'center',
        margin:'auto',
    },
    textStyle: {
        // fontSize: scale(18),
        fontWeight: '600',
        color: '#fff',
        // fontFamily: fontFamily.Bbold,
    },
});
export default CustomPkgBtn;
