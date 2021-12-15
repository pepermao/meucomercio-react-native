import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProductStackScreen from "../Product/index";
import StockStackScreen from "../Stock/index";
import CashStackScreen from "../Cash Register/index"
import CostumerStackScreen from "../Costumer/index"
import ReceiptsScreen from "../../Pages/Receivements"
import Cart from "../../Pages/Cart"
import Header from '../../components/header';

export default function DrawerNavigation() {
    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                // drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
                drawerStyle: {
                    backgroundColor: '#dddddd'
                },
                headerTintColor: '#fff',
                drawerActiveBackgroundColor: '#e6f6ff',
                headerStyle: { backgroundColor: '#386ba6', height: 90},
                headerTitle: () => <Header />
            }}
                initialRouteName="Caixa"
            >
                <Drawer.Screen name="Estoque" component={StockStackScreen} />
                <Drawer.Screen name="Produtos" component={ProductStackScreen} />
                <Drawer.Screen name="Caixa" component={CashStackScreen} />
                <Drawer.Screen name="Clientes" component={CostumerStackScreen} />
                <Drawer.Screen name="Recebimentos" component={ReceiptsScreen} />
                <Drawer.Screen name="Vendas" component={Cart} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}