/* eslint-disable prettier/prettier */

import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../styles/Colors';

// create a component
const TextInputWithLabel = ({
    label,
    inlineInputStyle,
    labelTextStyle,
    placeHolder,
    onChangeText = () => { },
    inputStyle = {},
    rightIcon,
    onPressRight,
    searchIcon,
    ...props
}) => {
    return (
        <View>
            {/* <Text style={{ ...styles.labelTextStyle, ...labelTextStyle }}>{label}</Text> */}
            {label ?
                <Text style={{ ...styles.labelTextStyle, ...labelTextStyle }}>{label}</Text>
                : null
            }
            <View style={{ ...styles.inputStyle, ...inputStyle }}>
                <View style={styles.flexView}>

                    {searchIcon ?
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.searchBtnStyle}
                        >
                            <Image
                                source={searchIcon}
                            />
                        </TouchableOpacity>
                        : null
                    }
                    <TextInput
                        placeholderTextColor='#AAACAE'
                        placeholder={placeHolder}
                        style={{ ...styles.inlineInputStyle, ...inlineInputStyle }}
                        {...props}
                        onChangeText={onChangeText}
                    />

                    {!!rightIcon ? <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={onPressRight}
                    >
                        <Image style={styles.visibleStyle} source={rightIcon} />
                    </TouchableOpacity> : null}
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    inputStyle: {
        width:'100%',
        height: moderateScale(50),
        borderWidth: 1,
        borderColor: Colors.inputBorderColor,
        borderRadius: moderateScale(15),
        // backgroundColor:'red'
    },
    inlineInputStyle: {
        paddingHorizontal: moderateScale(15),
        fontSize: scale(14),
        flex: 1,
        color:Colors.inputTextColor
    },
    labelTextStyle: {
        fontSize: scale(12),
        color: Colors.labelColor,
        fontWeight: '400',
        marginBottom: moderateScale(10)
    },
    flexView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    visibleStyle: {
        tintColor: Colors.primaryColor,
        width: moderateScale(19),
        height: moderateScale(13)
    },
    searchBtnStyle: {
        paddingLeft: moderateScale(20),
    }
});

export default TextInputWithLabel;
