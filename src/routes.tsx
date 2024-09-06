import React from 'react';
import Home from './Pages/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './Components/Drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Routes() {
  function StackHome() {
    return (
      <Stack.Navigator initialRouteName="HomeStack" screenOptions={{
				headerShown: false,
			}}>
        <Stack.Screen name="HomeStack" component={Home} />
      </Stack.Navigator>
    );
  }

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="Home"
		screenOptions={{
				headerShown: false,

		}}
		>
      <Drawer.Screen name="Home" component={StackHome} />
    </Drawer.Navigator>
  );
}
