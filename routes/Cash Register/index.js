import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CashScreen from '../../Pages/CashRegister';
import ReceiptsScreen from '../../Pages/Receivements'
import Cart from '../../Pages/Cart'

export default function CashStackScreen () {
    const CashStack = createStackNavigator()

    return(
        <CashStack.Navigator>
        <CashStack.Screen options={{ headerShown: false }} name="CashScreen" component={CashScreen} />
        <CashStack.Screen options={{ headerShown: false }} name="ReceiptsScreen" component={ReceiptsScreen} />
        <CashStack.Screen options={{ headerShown: false }} name="Cart" component={Cart} />
        </CashStack.Navigator>
    )
}