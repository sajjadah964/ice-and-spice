import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../components/CustomHeader'
import imagePath from '../../constants/imagePath'
import NavigationStrings from '../../constants/NavigationStrings';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/Colors';
import CustomPkgBtn from '../../components/CustomPkgBtn';
import ToppingItems from './ToppingItems'

const ItemDetails = (props) => {
    const navigation = useNavigation();
    const [activeItem,setActiveItem]=useState(0)
    // console.log("item details data",props.route.params.data.foodDesc)
    const { foodDesc, foodName, imageUrl } = props.route.params.data;
    // console.log(foodDesc)
    const moveToScreen = (screen) => {
        navigation.navigate(screen)
    }
    const showIndex=(index)=>{
        setActiveItem(index);
        console.log(`index no: ${index}`);
        // if (index === 0) {
        //     // console.log("index:",index);
        //     // setActiveItem(index);
        //     navigation.navigate(NavigationStrings.FAVORITE);
        // }
        // else if (index === 1) {
        //     console.log("index:",index);
        // }
        // else {
        //     console.log("index:",index);
        // }
    }
    const showToppingData = ({item,index}) =>{
        console.log("topping data",item);
        const {listName,itemUrl}=item;
        return (
            <TouchableOpacity 
                style={[styles.listDataView,{borderColor:index ==activeItem?'#F9881F':'#fff'}]} 
                activeOpacity={0.7}
                // onPress={()=>alert(index)}
                onPress={()=>showIndex(index,item)}
            >
                <Image 
                    source={itemUrl}
                    resizeMode="contain"
                />
                <Text style={styles.toppingItemStyle}>{listName}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <CustomHeader
                leftImg={imagePath.icBackArrow}
                headerHeading={"Sajjad Ahmad"}
                rightImg={imagePath.icHomeUser}
                onPress={() => moveToScreen(NavigationStrings.PROFILE)}
            />
            <View style={styles.itemDetails}>
                <View style={styles.itemImageView}>
                    <Image
                        source={imageUrl}
                    />
                </View>

                <TouchableOpacity style={styles.counterBtnView}
                    activeOpacity={0.7}
                >
                    <LinearGradient
                        colors={['#F9881F', '#FF774C']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.counterBtnStyle}
                    >
                        <TouchableOpacity>
                            <Text style={styles.counterTextStyle}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.counterTextStyle}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.counterTextStyle}>+</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={styles.itemContent}>
                <Text style={styles.itemNameStyle}>{foodName}</Text>
                <Text style={styles.itemDescStyle}>{foodDesc}</Text>
            </View>
            <View style={styles.toppingViewStyle}>
                <Text style={styles.toppingHeading}>Toppings for you</Text>
                <FlatList 
                    data={ToppingItems}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={showToppingData}
                    horizontal={true}
                />
            </View>

            <CustomPkgBtn
                btnText={'Add to cart'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FBFF',
        // paddingHorizontal: moderateScale(15),
    },
    itemDetails: {
        position: 'relative',
        alignItems: 'center',
    },
    itemImageView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 200,
        borderRadius: 20,
        backgroundColor: '#fff',
        marginBottom: 35,
    },
    counterBtnView: {
        alignItems: 'center',
        marginBottom: 20,
        // backgroundColor:'red'
    },
    counterBtnStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 100,
        height: 50,
        alignItems: 'center',
        // justifyContent:'center',
        borderRadius: 30
    },
    counterTextStyle: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.white
    },
    itemNameStyle: {
        color: Colors.labelColor,
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 15,
    },
    itemContent: {
        // justifyContent:'center',
        // alignItems:'center',
        paddingHorizontal: 25,
        marginBottom: 15,
    },
    itemDescStyle: {

    },
    toppingViewStyle: {
        marginHorizontal: 27,
    },
    toppingHeading: {
        color: Colors.labelColor,
        fontSize: 16,
        marginBottom: 10
    },
    listDataView :{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:130,
        height:50,
        borderRadius:30,
        // backgroundColor:'#fff',
        gap:7,
        marginBottom:30,
        marginRight:10,
        borderWidth:1,
    },
    toppingItemStyle :{
        fontSize:14,
        fontWeight:'400'
    }

})
export default ItemDetails;

