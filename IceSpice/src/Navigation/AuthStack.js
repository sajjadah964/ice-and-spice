/* eslint-disable prettier/prettier */
import React from "react";
import NavigationStrings from "../constants/NavigationStrings";
import { InitialScreen, Login, ResetPassword, Signup,SplashScreen } from "../Screen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function (Stack) {
    console.log("this is my authstack file")
    return (
        < >
            <Stack.Screen
                name={NavigationStrings.INITIAL_SCREEN}
                component={InitialScreen}
            />
            <Stack.Screen
                name={NavigationStrings.SPLASH_SCREEN}
                component={SplashScreen}
            />
            <Stack.Screen
                name={NavigationStrings.LOGIN}
                component={Login}
            />
            <Stack.Screen
                name={NavigationStrings.SIGNUP}
                component={Signup}

            />
            <Stack.Screen
                name={NavigationStrings.RESET_PASSWORD}
                component={ResetPassword}
            />
        </>
    )

}