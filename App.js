import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CashScreen from './Pages/CashRegister';
import Cliente from './Pages/NewCostumer';
import SuccessClient from './components/Costumer/SuccessNewClient'
import Product from './Pages/Products'
import StockScreen from './Pages/NewStockItem'
import SuccessProduct from './components/Stock/SuccessNewProduct';
import ReceiptsScreen from './Pages/Receivements'
import Cart from './Pages/Cart'


function ProductTabScreen () {
  const ProductStack = createStackNavigator();
  return(
    <ProductStack.Navigator>
      <ProductStack.Screen name="Stock" component={StockScreen} />
      <ProductStack.Screen name="SuccessProduct" component={SuccessProduct} />
    </ProductStack.Navigator>
  )
}

function CashTabScreen () {
  const CashStack = createStackNavigator();
  return(
    <CashStack.Navigator>
      <CashStack.Screen name="CashScreen" component={CashScreen} />
      <CashStack.Screen name="ReceiptsScreen" component={ReceiptsScreen} />
      <CashStack.Screen name="Cart" component={Cart} />
    </CashStack.Navigator>
  )
}

function CostumerTabScreen() {
  const CostumerStack = createStackNavigator();
  return(
    <CostumerStack.Navigator>
      <CostumerStack.Screen name="Cliente" component={Cliente} />
      <CostumerStack.Screen name="SuccessClient" component={SuccessClient} />
    </CostumerStack.Navigator>
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
      initialRouteName="Caixa">
      <Drawer.Screen name="Estoque" component={ProductTabScreen} />
      <Drawer.Screen name="Produtos" component={Product} />
      <Drawer.Screen name="Caixa" component={CashTabScreen} />
      <Drawer.Screen name="Clientes" component={CostumerTabScreen} />
      <Drawer.Screen name="Recebimentos" component={ReceiptsScreen} />
      <Drawer.Screen name="Vendas" component={Cart} />
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