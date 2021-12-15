import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Cliente from '../../Pages/NewCostumer';
import SuccessClient from '../../components/Costumer/SuccessNewClient'

export default function CostumerStackScreen() {
    const CostumerStack = createStackNavigator()
    
    return(
        <CostumerStack.Navigator>
        <CostumerStack.Screen options={{ headerShown: false }} name="Cliente" component={Cliente} />
        <CostumerStack.Screen options={{ headerShown: false }} name="SuccessClient" component={SuccessClient} />
        </CostumerStack.Navigator>
    )
}