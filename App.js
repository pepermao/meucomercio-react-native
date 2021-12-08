import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CashScreen from './Pages/CashScreen';
import Cliente from './components/Clientes/Cliente';
import SuccessClient from './components/Clientes/SuccessClient'




function ClienteTabScreen() {
  const ClienteStack = createStackNavigator();
  return(
    <ClienteStack.Navigator>
      <ClienteStack.Screen name="Cliente" component={Cliente} />
      <ClienteStack.Screen name="SuccessClient" component={SuccessClient} />
    </ClienteStack.Navigator>
  )
}

function DrawerNavegation() {
  const dimensions = useWindowDimensions();
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator 
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        drawerStyle: {
          backgroundColor: '#dddddd'
      }}} 
      initialRouteName="Clientes">
      <Drawer.Screen name="Caixa" component={CashScreen} />
      <Drawer.Screen name="Clientes" component={ClienteTabScreen} />
    </Drawer.Navigator>
  );
}

export default function App () {
  return(
    <NavigationContainer>
      <DrawerNavegation />
    </NavigationContainer>
  )
}