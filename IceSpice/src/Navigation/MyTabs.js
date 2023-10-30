import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationStrings from '../constants/NavigationStrings';
import { Cart, Favorite, Home, Notefication, Search } from '../Screen';
import { Image } from 'react-native';
import imagePath from '../constants/imagePath';
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator 
        screenOptions={{
            tabBarShowLabel: false, // Remove labels for all screens
            tabBarStyle:{
                // backgroundColor:'red',
                position:'absolute',
                bottom:0,
                borderRadius:5,
            },
            headerShown: false, // Remove header for all screens
        }}
        >
            <Tab.Screen
                name={NavigationStrings.HOME}
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? imagePath.icHomeFill: imagePath.icHomeUnfill}
                            style={{ width: 24, height: 24,resizeMode:'contain' }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationStrings.FAVORITE}
                component={Favorite}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? imagePath.icFavoriteFill : imagePath.icFavoriteUnfill}
                            style={{ width: 24, height: 24,resizeMode:'contain' }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationStrings.SEARCH}
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? imagePath.icSearchFill : imagePath.icSearchUnfill}
                            style={{ width: 24, height: 24,resizeMode:'contain' }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationStrings.NOTEFICATION}
                component={Notefication}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? imagePath.icNoteficationFill : imagePath.icNoteficationUnfill}
                            style={{ width: 24, height: 24,resizeMode:'contain' }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationStrings.CART}
                component={Cart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? imagePath.icCartFill : imagePath.icCartUnfill}
                            style={{ width: 24, height: 24,resizeMode:'contain' }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default MyTabs;
