/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    ToastAndroid,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
    Image
} from 'react-native';
import { moderateScale, scale, moderateVerticalScale } from 'react-native-size-matters';
import CustomPkgBtn from '../../components/CustomPkgBtn';
import imagePath from '../../constants/imagePath';
import Colors from '../../styles/Colors';
import { useNavigation } from '@react-navigation/native';
import TextInputWithLabel from '../../components/TextinputWithLable';
import NavigationStrings from '../../constants/NavigationStrings';
import * as Animatable from 'react-native-animatable';
import Loader from '../../components/Loader';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Signup = () => {
    const [isLoading, setisLoading] = useState(false);
    const navigation = useNavigation();
    const [isVisible, setVisible] = useState(true);

    const moveToScreen = (screen) => {
        navigation.navigate(screen);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F8FBFF' }}>
            <Loader isLoading={isLoading} />
            <KeyboardAvoidingView style={{ flex: 1 }} enabled>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.formView}>
                        <View style={styles.formDescription}>
                            <Text style={styles.formTitle}>
                                Create an account
                            </Text>
                            <Text style={styles.desc}>
                                Welcome friend, enter your details so lets get started in ordering food.
                            </Text>
                        </View>
                        <TextInputWithLabel
                            placeHolder="Enter Email"
                            // onChangeText={handleEmailChange}
                            inputStyle={{ marginBottom: moderateVerticalScale(10) }}
                            keyboardType="email-address"
                            // value={email}
                            label={"Email Address"}
                        />
                        <TextInputWithLabel
                            placeHolder="Enter password"
                            // onChangeText={handlePasswordChange}
                            label={"Password"}
                            secureTextEntry={isVisible}
                            // rightIcon={isVisible ? imagePath.icHide : imagePath.icShow}
                            // onPressRight={() => setVisible(!isVisible)}
                            inputStyle={{ marginBottom: moderateVerticalScale(14) }}
                        // value={password}
                        />
                        <TextInputWithLabel
                            placeHolder="Confirm password"
                            // onChangeText={handlePasswordChange}
                            label={"Confirm Password"}
                            secureTextEntry={isVisible}
                            // rightIcon={isVisible ? imagePath.icHide : imagePath.icShow}
                            // onPressRight={() => setVisible(!isVisible)}
                            inputStyle={{ marginBottom: moderateVerticalScale(80) }}
                        // value={password}
                        />

                        <CustomPkgBtn
                            textStyle={{ ...styles.textStyle, ...styles.customTextStyle }}
                            btnStyle={{ ...styles.btnStyle, ...styles.customStyle }}
                            btnText={'Create an account'}
                        // onPress={handleUserLogin}
                        />
                        <TouchableOpacity
                            style={styles.loginSignview}
                        onPress={() => {
                            moveToScreen(NavigationStrings.LOGIN);
                        }}
                        >
                            <Text style={styles.loginSignText}>
                                Login to my account
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    formView: {
        width: (windowWidth - 0),
        height: (windowHeight - 270),
        paddingHorizontal: moderateScale(25),
        textAlign: 'center',
        // alignItems:'center',
        paddingTop: 80
    },
    formDescription: {
        paddingHorizontal: 20
    },
    formTitle: {
        color: '#1C1C1C',
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 15
    },
    desc: {
        color: Colors.labelColor,
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 50,
    },
    btnStyle: {
        marginBottom: 30
    },
    forgotPassStyle: {
        color: Colors.labelColor,
    },
    forgotPassView: {
        textAlign: 'right',
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: moderateVerticalScale(40)
    },
    loginSignText: {
        fontSize: scale(16),
        fontWeight: '700',
        color: Colors.secondaryColor,
        textAlign: 'center',
    },
    iconTextStyle: {
        color: Colors.black,
        fontSize: 14,
        fontWeight: '400',
        textDecorationLine: 'underline'
    },
    socialIconStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        width: 204,
        height: 50,
        borderRadius: 20,
        backgroundColor:Colors.white,
        // backgroundColor: 'red',
        shadowColor: 'rgba(2, 32, 44, 0.05)', // Shadow color with opacity
        shadowOffset: { width: 0, height: 20 }, // Y-offset controls vertical shadow position
        shadowOpacity: 1, // Opacity of the shadow
        shadowRadius: 40, // Spread or blur radius of the shadow
        elevation: 5, // For Android, to provide elevation and shadow
    }
});

export default Signup;
