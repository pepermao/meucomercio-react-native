import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CashScreen from '../../Pages/CashRegister';
import ReceiptsScreen from '../../Pages/Receivements'
import Cart from '../../Pages/Cart'
import CashClosed from '../../Pages/CashClosed'

export default function CashStackScreen () {
    const CashStack = createStackNavigator()

    return(
        <CashStack.Navigator 
            screenOptions={{
                headerShown: false
            }}
        >
            <CashStack.Screen name="CashScreen" component={CashScreen} />
            <CashStack.Screen name="ReceiptsScreen" component={ReceiptsScreen} />
            <CashStack.Screen name="Cart" component={Cart} />
            <CashStack.Screen name="CashClosed" component={CashClosed} />
        </CashStack.Navigator>
    )
}