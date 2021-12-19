import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StockScreen from '../../Pages/NewStockItem'
import SuccessProduct from '../../components/Stock/SuccessNewProduct';

export default function StockStackScreen () {
    const StockStack = createStackNavigator()

    return(
        <StockStack.Navigator 
            screenOptions={{
                headerShown: false
            }}
        >
            <StockStack.Screen name="Stock" component={StockScreen} />
            <StockStack.Screen name="SuccessProduct" component={SuccessProduct} />
        </StockStack.Navigator>
    )
}