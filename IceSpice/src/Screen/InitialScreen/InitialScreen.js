/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import imagePath from '../../constants/imagePath';
import { useNavigation } from '@react-navigation/native';
import { scale, moderateVerticalScale, moderateScale } from 'react-native-size-matters';
import NavigationStrings from '../../constants/NavigationStrings';
import CustomPkgBtn from '../../components/CustomPkgBtn';
import Colors from '../../styles/Colors';
import fontFamily from '../../styles/fontFamily';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = () => {
    const navigation = useNavigation();
    const moveToScreen = (screen) => {
        navigation.navigate(screen);
    }
    return (
        <View style={styles.container}>
            {/* <StatusBar backgroundColor='#009387' barStyle="light-content" /> */}
            <LinearGradient
             colors={['#F9881F', '#FF774C']}
             style={{ flex: 1 }}
             start={{ x: 0, y: 0 }}
             end={{ x: 1, y: 1 }}
            >
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={imagePath.bgLogo}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View
                style={[styles.footer, {
                    backgroundColor: Colors.white
                }]}
                animation="fadeInUpBig"
                duration={1000}
                // delay={50}
            >
                <Text style={[styles.title, {
                    color: Colors.primaryColor
                }]}>Enjoy Your Food!</Text>
                <Text style={styles.text}>Sign in with your account</Text>
                <View style={styles.button}>
                    <CustomPkgBtn
                        onPress={() => { moveToScreen(NavigationStrings.SPLASH_SCREEN) }}
                        textStyle={{ ...styles.textStyle }}
                        btnStyle={{ ...styles.btnStyle }}
                        btnText={'Get Started'}
                    />
                </View>
            </Animatable.View>
            </LinearGradient>
        </View>
    )
}

export default SplashScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex:1,
        backgroundColor: '#fff',
        borderTopLeftRadius: moderateScale(55),
        borderTopRightRadius: moderateScale(55),
        paddingVertical: moderateVerticalScale(50),
        paddingHorizontal: moderateScale(30)
    },
    logo: {
        width:170,
        height:52
    },
    title: {
        color: '#05375a',
        fontSize: scale(30),
        fontWeight: '600'
    },
    text: {
        fontSize: scale(16),
        color: Colors.blackOpacity50,
        marginTop: moderateVerticalScale(5),
        fontWeight: '600'
    },
    button: {
        alignItems: 'flex-end',
        marginTop: moderateVerticalScale(50)
    },
    btnStyle: {
        width: moderateScale(200),
        height: moderateScale(53),
        borderRadius: moderateScale(42),
        justifyContent: 'center',
        borderColor: Colors.white,
        borderWidth: 2,
    },
    textStyle: {
        fontWeight:'600',
        fontSize: scale(18),
    },
})