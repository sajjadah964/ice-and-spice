import React, { useEffect, useState } from 'react';
// import Modal from "react-native-modal";
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import { Image, View, StyleSheet, Text, Alert, Button, TouchableOpacity } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import imagePath from '../constants/imagePath';
import Colors from '../styles/Colors';
import CustomPkgBtn from './CustomPkgBtn';
import NavigationStrings from '../constants/NavigationStrings';
function CustomDrawer({ navigation, props }) {
    // const { navigation } = props;
    // const [ModalVisible, setModalVisible] = useState(false);
    // const toggleModal = () => {
    //     setModalVisible(!ModalVisible);
    // };
    const moveToScreen=(screen)=>{
        navigation.navigate(screen)
    }

    return (
        <DrawerContentScrollView
            style={{
                backgroundColor: '#F8FBFF',
                flex: 1,
                flexDirection: 'column',
            }}
            {...props}
        >
            <View style={styles.detailStyle}>
                <TouchableOpacity style={styles.crossImageView}
                    onPress={() => navigation.closeDrawer()}
                >
                    <Image
                        source={imagePath.icDrawerClose}
                        style={styles.crossImageStyle}
                    />
                </TouchableOpacity>
                <View style={styles.profileView}>
                   <TouchableOpacity activeOpacity={0.7} onPress={()=>moveToScreen(NavigationStrings.HOME)}>
                    <Image
                            source={imagePath.icUser}
                            style={styles.drawerCloseStyle}
                        />
                   </TouchableOpacity>
                    <Text style={styles.userNameStyle}>
                        Sajjad Ahmad
                    </Text>
                </View>
            </View>
            <View style={{ flex: 1, marginLeft: 10, marginBottom: 80 }}
            >
                <DrawerItem
                    label="Profile"
                    // onPress={() => alert('Comping soon..')}
                    onPress={() => moveToScreen(NavigationStrings.PROFILE)}
                    icon={() => <Image
                        style={styles.iconStyle}
                        source={imagePath.icProfile}
                    />}
                />

                <DrawerItem
                    label="Payment method"
                    onPress={() => alert('Comping soon..')}
                    icon={() => <Image
                        style={styles.iconStyle}
                        source={imagePath.icPayment}
                    />}

                />
                <DrawerItem
                    label="Setting"
                    onPress={() => alert('Comping soon..')}
                    icon={() => <Image
                        style={styles.iconStyle}
                        source={imagePath.icSetting}
                    />}
                />
                <DrawerItem
                    label="Help"
                    // onPress={() => setModalVisible(true)}
                    onPress={() => alert('Comping soon..')}
                    icon={() => <Image
                        style={styles.iconStyle}
                        source={imagePath.icHelp}
                    />}
                />
                <DrawerItem
                    label="Privacy Policy"
                    onPress={() => alert('Comping soon..')}
                    icon={() => <Image
                        style={styles.iconStyle}
                        source={imagePath.icPrivacy}
                    />}
                />

                {/* 
                <View style={{ flex: 1 }}>
                    <View
                        style={styles.menuStyle}
                    >
                        <Image
                            style={styles.iconStyle}
                            source={imagePath.icShare}
                        />
                        <View style={{ marginHorizontal: moderateScale(15) }}></View>
                        <Text>Share This App</Text>
                    </View>

                    <View
                        style={styles.menuStyle}
                    >
                        <Image
                            style={styles.iconStyle}
                            source={imagePath.icRate}
                        />
                        <View style={{ marginHorizontal: moderateScale(15) }}></View>
                        <Text>Rate App</Text>
                    </View>

                    <View
                        style={styles.menuStyle}
                    >
                        <Image
                            style={styles.iconStyle}
                            source={imagePath.icPrivacy}
                        />
                        <View style={{ marginHorizontal: moderateScale(15) }}></View>

                        <Text>Privacy Policy</Text>
                    </View>

                    <View
                        style={styles.menuStyle}
                    >
                        <Image
                            style={styles.iconStyle}
                            source={imagePath.icAbout}
                        />
                        <View style={{ marginHorizontal: moderateScale(15) }}></View>
                        <Text>About</Text>
                    </View>

                    <View
                        style={styles.menuStyle}
                    >
                        <Image
                            style={styles.iconStyle}
                            source={imagePath.icExit}
                        />
                        <View style={{ marginHorizontal: moderateScale(15) }}></View>
                        <Text>Exit</Text>
                    </View>

                </View> */}
            </View>
            <View style={styles.logoutBtnView}>
                <CustomPkgBtn
                    btnText={'Log Out'}
                    btnStyle={styles.logoutBtnStyle}
                    textStyle={{ color: '#fff' }}
                    onPress={()=> alert('Coming Soon!')}
                />
            </View>

        </DrawerContentScrollView>
    );
}
export default CustomDrawer;
const styles = StyleSheet.create({
    drawerCloseStyle: {

    },
    detailStyle: {
        flex: 1,
        paddingHorizontal: '30',
        marginHorizontal: moderateScale(21),
        paddingTop: 24,
        marginBottom: 50
    },
    crossImageView: {
        width: 40,
        height: 40,
        borderRadius: 15,
        backgroundColor: '#fff',
        position: 'relative',
        marginBottom: 15
    },
    crossImageStyle: {
        width: 11,
        height: 11,
        position: 'absolute', // Position the icon absolutely within the box
        top: '50%', // Move the icon 50% from the top
        left: '50%', // Move the icon 50% from the left
        transform: [{ translateX: -5.5 }, { translateY: -5.5 }], // Adjust for icon size
    },
    profileView: {
        marginHorizontal: moderateScale(14),
    },
    userNameStyle: {
        color: Colors.black,
        fontSize: 16,
        fontWeight: '700',
    },
    iconStyle: {
        marginRight: -20
    },
    logoutBtnStyle: {
        width: 101,
        height: 55,
        shadowColor: 'rgba(202, 66, 17, 0.10)', // Shadow color
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 30,
    },
    logoutBtnView :{
        alignItems:'baseline',
        marginLeft:21
    }
})