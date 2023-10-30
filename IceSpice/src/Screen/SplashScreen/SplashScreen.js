import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import imagePath from '../../constants/imagePath';
import NavigationStrings from '../../constants/NavigationStrings';
import Colors from '../../styles/Colors';
import CustomPkgBtn from '../../components/CustomPkgBtn';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const slides = [
    {
        key: 1,
        loginbtnText: 'Login',
        signupbtnText: 'Create Account',
        text: 'Order from your favourite stores or vendors',
        image: imagePath.bgSplahs1,
        //   backgroundColor: '#59b2ab',
    },
    {
        key: 2,
        loginbtnText: 'Login',
        signupbtnText: 'Create Account',
        text: 'Choose from a wide range of  delicious meals',
        image: imagePath.bgSplahs2,
        //   backgroundColor: '#febe29',
    },
    {
        key: 3,
        loginbtnText: 'Login',
        signupbtnText: 'Create Account',
        text: 'Enjoy instant delivery and payment',
        image: imagePath.bgSplahs3,
        //   backgroundColor: '#22bcb5',
    }
];
const SplashScreen = ({ navigation }) => {
    const [showHomePage, setShowHomePage] = useState(false);

    const buttonLabel = (label) => {
        return (
            <View style={{
                padding: 12
            }}>
                <Text style={{
                    color: Colors.primaryColor,
                    fontWeight: '600',
                    fontSize: 14,
                }}>
                    {label}
                </Text>
            </View>
        )
    }
    const renderSkipButton = () => {
        return (
            <TouchableOpacity
                style={{ padding: 14, position: 'absolute', top: 0, right: 0 }}
                onPress={() => {
                    setShowHomePage(true); // Trigger the skip functionality
                    navigation.navigate(NavigationStrings.LOGIN); // Navigate to the desired screen
                }}
            >
                <Text style={{ color: Colors.primaryColor, fontWeight: '700', fontSize: 16 }}>
                    Skip
                </Text>
            </TouchableOpacity>
        );
    };

    const moveToScreen = (screen) => {
        navigation.navigate(screen)
    }

    return (
        <View style={styles.container}>
            <AppIntroSlider
                showDots={false}
                dotStyle={{ display: 'none' }}
                // showSkipButton
                renderNextButton={() => buttonLabel("Next")}
                renderSkipButton={() => null}
                renderDoneButton={() => buttonLabel("Done")}
                onDone={() => {
                    navigation.navigate(NavigationStrings.LOGIN)
                }}
                data={slides}
                renderItem={({ item }) => {
                    return (
                        <View style={{
                            flex: 1,
                            alignItems: 'center',
                            padding: 15,
                            paddingTop: 70,
                        }}>
                            {renderSkipButton()}
                            <Text style={styles.description}>
                                {item.text}
                            </Text>
                            <Image
                                source={item.image}
                                style={styles.imageStyle}
                                resizeMode="contain"
                            />
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 25,
                                }}
                            >
                                {slides.map((_, index) => (
                                    <View
                                        key={index}
                                        style={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: 5,
                                            backgroundColor:
                                                index === slides.indexOf(item)
                                                    ? "#0B735F"
                                                    : "#C4C4C4",
                                            margin: 5,
                                        }}
                                    />
                                ))}
                            </View>
                            <CustomPkgBtn
                                textStyle={{ ...styles.textStyle, ...styles.customTextStyle }}
                                btnStyle={{ ...styles.btnStyle, ...styles.customStyle }}
                                btnText={item.signupbtnText}
                                onPress={() => moveToScreen(NavigationStrings.SIGNUP)}
                            />
                            <TouchableOpacity
                                onPress={() => moveToScreen(NavigationStrings.LOGIN)}
                            >
                                <Text style={styles.loginTextStyle}>{item.loginbtnText}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View >
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8FBFF',
        // backgroundColor: 'red',
        flex: 1,
    },
    imageStyle: {
        width: (windowWidth - 50),
        height: (windowHeight - 400),
        marginBottom: 25
    },
    description: {
        color: '#1C1C1C',
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 46,
        textAlign:'center',
        paddingHorizontal:10
    },
    loginTextStyle: {
        fontWeight: 'bold',
        color: Colors.primaryColor,
        fontSize: 14,
    }
})