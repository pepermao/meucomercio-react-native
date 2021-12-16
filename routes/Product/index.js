import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Cart from '../../Pages/Cart'
import Products from '../../Pages/Products'
import EditProductStackScreen from './editProduct'

const ProductStackScreen = () => {
    const ProductStack = createStackNavigator()

    return (
        <ProductStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <ProductStack.Screen name="Product" component={Products} />
            <ProductStack.Screen name="Cart" component={Cart} />
            <ProductStack.Screen name="EditProductStackScreen" component={EditProductStackScreen} />
        </ProductStack.Navigator>
    )
}

export default ProductStackScreen