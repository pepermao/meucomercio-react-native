import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cliente from '../../Pages/NewCostumer';
import SuccessClient from '../../components/Costumer/SuccessNewClient'

export default function CostumerStackScreen() {
    const CostumerStack = createStackNavigator()
    
    return(
        <CostumerStack.Navigator 
            screenOptions={{
                headerShown: false
            }}
        >
            <CostumerStack.Screen name="Cliente" component={Cliente} />
            <CostumerStack.Screen name="SuccessClient" component={SuccessClient} />
        </CostumerStack.Navigator>
    )
}