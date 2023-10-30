import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import NavigationStrings from '../constants/NavigationStrings';
import { Profile } from '../Screen';
import CustomDrawer from '../components/CustomDrawer';
import MyTabs from './MyTabs';
const MyDrawer = () => {
    return (
        <Drawer.Navigator
            // initialRouteName={NavigationStrings.HOME}
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Drawer.Screen
                name={NavigationStrings.MY_TABS}
                component={MyTabs}
                // title="Home"
                // options={{ title: 'My home' }}
                screenOptions={{ headerShown: false }}
            />
            <Drawer.Screen
                name={NavigationStrings.PROFILE}
                component={Profile}
                screenOptions={{ headerShown: false }}
            />
        </Drawer.Navigator>
    );
};

export default MyDrawer;
