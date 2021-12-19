import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductEdit from '../../Pages/ProductEdit'
import SuccessEdit from '../../components/Products/SuccessProductsEdit'

const EditProductStackScreen = () => {
    const ProductStack = createStackNavigator()

    return (
        <ProductStack.Navigator 
            screenOptions={{
                headerShown: false
            }}
        >
            <ProductStack.Screen name="ProductEdit" component={ProductEdit} />
            <ProductStack.Screen name="SuccessEdit" component={SuccessEdit} />
        </ProductStack.Navigator>
    )
}

export default EditProductStackScreen