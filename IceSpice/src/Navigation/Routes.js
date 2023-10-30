import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStrings from '../constants/NavigationStrings';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthStack from './AuthStack';
import MainStack from './MainStack'
import { Home } from '../Screen';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Routes() {
    return (
        // <NavigationContainer>
        //     {/* <Stack.Navigator screenOptions={{ presentation: 'card', headerShown: false }}>
        //         {user ? (
        //             <Stack.Screen name={NavigationStrings.MAIN_STACK} component={MainStack} />
        //         ) : (
        //             <Stack.Screen name={NavigationStrings.AUTH_STACK} component={AuthStack} />
        //         )}
        //     </Stack.Navigator> */}
        //     {/* <Stack.Navigator screenOptions={{ presentation: 'card', headerShown: false }}>
        //         <Stack.Screen name={NavigationStrings.AUTH_STACK} component={AuthStack} />
        //         <Stack.Screen name={NavigationStrings.MAIN_STACK} component={MainStack} />
        //     </Stack.Navigator> */}
        //           <Drawer.Navigator initialRouteName={NavigationStrings.HOME}>
        //         <Drawer.Screen name={NavigationStrings.HOME} component={Home} />
        //         {/* <Drawer.Screen name={NavigationStrings.INITIAL_SCREEN} component={InitialScreen} /> */}
        //     </Drawer.Navigator>
        // </NavigationContainer>

        <NavigationContainer>
            {/* <Drawer.Navigator initialRouteName={NavigationStrings.HOME}>
                <Drawer.Screen name={NavigationStrings.HOME} component={Home} />
                <Drawer.Screen name={NavigationStrings.INITIAL_SCREEN} component={InitialScreen} />
            </Drawer.Navigator> */}

            <Stack.Navigator
            screenOptions={{ presentation: 'modal', headerShown: false }}
            >
                {MainStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;