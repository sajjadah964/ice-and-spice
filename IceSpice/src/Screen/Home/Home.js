import React from 'react';
import { Alert, Button, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NavigationStrings from '../../constants/NavigationStrings';
import imagePath from '../../constants/imagePath';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import CustomPkgBtn from '../../components/CustomPkgBtn';
import fontFamily from '../../styles/fontFamily';
import Colors from '../../styles/Colors';

import foodList from './foodList';
import popularFoodList from './popularFoodList';
import BottomNavigation from '../../constants/BottomNavigation';

const Home = ({ navigation }) => {

    const moveToScreen = screen => {
        navigation.navigate(screen);
        console.log('screen', screen)
    };
    const renderItem = ({ item }) => {
        // console.log("item", item.itemName);
        // console.log("item", item.itemUrl);
        return (
            <View style={styles.foodViewStyle}>
                <View style={[styles.itemViewStyle, { backgroundColor: item.bgColor }]}>
                    <Image
                        source={item.itemUrl}
                        style={{ width: 20, height: 20 }}
                    />
                    <Text style={{ color: '#000' }}>
                        {item.itemName}
                    </Text>
                </View>
            </View>
        )
    }
    const moveItemDetailsScreen = (item) => {
        console.log("item details", item);
        navigation.navigate(NavigationStrings.ITEM_DETAILS, { data: item });
    }
    const showCardData = ({ item }) => {
        // console.log("card data", item);
        return (
            <TouchableOpacity style={styles.cardView} onPress={() => moveItemDetailsScreen(item)}>
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <Image
                        source={item.imageUrl}
                    // style={{marginTop:15}}
                    />
                </View>
                <Text style={styles.cardHeadingStyle}>{item.foodName}</Text>
                <Text style={styles.cardDescStyle}>{item.foodDesc}</Text>
                <View style={styles.ratingView}>
                    <View style={styles.starRatingStyle}>
                        <Image
                            source={item.starImg}
                        // style={{marginTop:15}}
                        />
                        <Text>{item.ratingText}</Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Image
                            source={item.heartImg}
                        // style={{width:14,height:14}}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.headerStyle}>
                    <TouchableOpacity style={[styles.MenubarStyle]}
                        onPress={() => navigation.openDrawer()}
                    >
                        <Image
                            source={imagePath.icMenubar}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        // onPress={() =>alert("Coming Soon!")}
                        onPress={() => {
                            moveToScreen(NavigationStrings.PROFILE);
                        }}
                        style={styles.squareBoxStyle}
                    >
                        <Image
                            source={imagePath.icHomeUser}
                            style={styles.homeUserIcon}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.foodListStyle}>
                    <Text style={styles.listHeadingStyle}>Enjoy Delicious food</Text>
                    <View style={{ marginBottom: 30 }}>
                        <FlatList
                            horizontal={true}
                            data={foodList}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={renderItem}
                        />
                    </View>
                </View>
                <View style={styles.popularFoodStyle}>
                    <View style={styles.popularFoodHeading}>
                        <Text style={styles.foodText}>Popular Foods</Text>
                        <Text style={styles.viewAllStyle}>View all(29)</Text>
                    </View>
                    <View style={styles.popularFoodContent}>
                        <FlatList
                            horizontal={true}
                            data={popularFoodList}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={showCardData}
                        />
                    </View>
                </View>
                {/* <BottomNavigation 
                /> */}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FBFF',
        // paddingHorizontal: moderateScale(15),
    },
    headerStyle: {
        flexDirection: 'row',
        // height: verticalScale(48),
        // backgroundColor: '#abcabc',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 34,
        marginBottom: 20,
        paddingHorizontal: moderateScale(15),
    },
    MenubarStyle: {
        marginRight: moderateScale(30),
        // backgroundColor: 'red'
    },
    headerTextStyle: {
        fontSize: scale(17),
        color: '#fff',
        fontWeight: '600',
    },
    logoStyle: {
        width: moderateScale(30),
        height: verticalScale(30),
    },
    iconStyle: {
        borderWidth: 1,
        borderColor: '#a60006',
        width: moderateScale(50),
        height: verticalScale(50),
        borderRadius: moderateScale(40 / 2),
    },
    singleStyle: {
        width: moderateScale(290),
        height: verticalScale(60),
        borderRadius: moderateScale(40 / 2),
    },
    textStyle: {
        color: '#000',
        fontSize: 23,
        // fontFamily:fontFamily.Bmedium
    },
    squareBoxStyle: {
        width: 40,
        height: 40,
        borderRadius: 15,
        backgroundColor: '#fff',
        position: 'relative',
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        // backgroundColor: 'red'
    },
    homeUserIcon: {
        width: 40,
        height: 40,
        position: 'absolute', // Position the icon absolutely within the box
        top: '50%', // Move the icon 50% from the top
        left: '50%', // Move the icon 50% from the left
        transform: [{ translateX: -20 }, { translateY: -15 }], // Adjust for half of the icon's size
    },
    foodListStyle: {
        paddingHorizontal: moderateScale(15),
    },
    listHeadingStyle: {
        fontSize: 24,
        color: Colors.labelColor,
        fontWeight: '700',
        marginBottom: 30
    },
    foodViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 109,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#F0CAC1',
        position: 'relative',
        // backgroundColor: 'red'
        marginHorizontal: 10,
    },
    itemViewStyle: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 65,
        height: 85,
        borderRadius: 50,
        // backgroundColor: 'red'
    },
    popularFoodStyle: {
        paddingHorizontal: 15
    },
    popularFoodHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    viewAllStyle: {
        color: '#FE554A',
        fontSize: 14,
        fontWeight: '400',
        textDecorationLine: 'underline'
    },
    foodText: {
        color: '#3D3D3D',
        fontWeight: '700',
        fontSize: 16,
    },
    cardView: {
        // display:'flex',
        // alignItems:'center',
        // flexDirection:'row',
        // justifyContent:'center',
        width: 200,
        height: 260,
        borderRadius: 30,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        elevation: 0,
        padding: 15,
    },
    cardHeadingStyle: {
        color: '#3D3D3D',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 5,
    },
    cardDescStyle: {
        color: '#3D3D3D',
        fontSize: 12,
        fontWeight: '400',
        marginBottom: 10
    },
    ratingView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'blue'
    },
    starRatingStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});
export default Home;
