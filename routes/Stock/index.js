import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import StockScreen from '../../Pages/NewStockItem'
import SuccessProduct from '../../components/Stock/SuccessNewProduct';

export default function StockStackScreen () {
    const StockStack = createStackNavigator()

    return(
        <StockStack.Navigator>
            <StockStack.Screen options={{ headerShown: false }} name="Stock" component={StockScreen} />
            <StockStack.Screen options={{ headerShown: false }} name="SuccessProduct" component={SuccessProduct} />
        </StockStack.Navigator>
    )
}