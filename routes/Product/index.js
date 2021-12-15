import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Cart from '../../Pages/Cart'
import ProductEdit from '../../Pages/ProductEdit'
import Products from '../../Pages/Products'


const ProductStackScreen = () => {
    const ProductStack = createStackNavigator()

    return (
        <ProductStack.Navigator>
            <ProductStack.Screen options={{ headerShown: false }} name="Product" component={Products} />
            <ProductStack.Screen options={{ headerShown: false }} name="Cart" component={Cart} />
            <ProductStack.Screen options={{ headerShown: false }} name="ProductEdit" component={ProductEdit} />
        </ProductStack.Navigator>
    )
}

export default ProductStackScreen