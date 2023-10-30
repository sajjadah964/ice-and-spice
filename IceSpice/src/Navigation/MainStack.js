import React from "react";
import NavigationStrings from "../constants/NavigationStrings";
import { Cart, Favorite, Home, ItemDetails, Notefication, Profile, Search } from "../Screen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyDrawer from "./MyDrawer";
import MyTabs from "./MyTabs";
const Stack = createNativeStackNavigator();

export default function (Stack) {
    console.log("this is my mainstack file")
    return (
        // <Stack.Navigator screenOptions={{ presentation: 'card', headerShown: false }}>

        //     <Stack.Screen
        //         name={NavigationStrings.HOME}
        //         component={Home}
        //     />
        //     <Stack.Screen
        //         name={NavigationStrings.MY_TABS}
        //         component={MyTabs}
        //         options={{ headerShown: false }}
        //     />
        // </Stack.Navigator>
        < >
            <Stack.Screen
                name={NavigationStrings.MY_DRAWER}
                component={MyDrawer}
                options={{ headerShown: false }}
            />
            {/* <Stack.Screen
                name={NavigationStrings.SEARCH}
                component={Search}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={NavigationStrings.NOTEFICATION}
                component={Notefication}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={NavigationStrings.CART}
                component={Cart}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={NavigationStrings.FAVORITE}
                component={Favorite}
                options={{ headerShown: false }}
            /> */}
            <Stack.Screen
                name={NavigationStrings.ITEM_DETAILS}
                component={ItemDetails}
                options={{ headerShown: false }}
            />
            {/* <Stack.Screen
                name={NavigationStrings.PROFILE}
                component={Profile}
                options={{ headerShown: true }}
            /> */}
        </>
    )

}