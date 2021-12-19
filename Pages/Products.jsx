import React from 'react';
import { FlatList } from 'react-native';
import ProductsScreen from '../components/Products/ProductsScreen'

const Products = ({ navigation }) => {
    return (
        <FlatList 
            data={[{id: 1}]}
            renderItem={ () => <ProductsScreen /> }
            keyExtractor={item => item.id}
            style={{backgroundColor: '#000'}}
            navigation={ navigation }
        />
    )
}// usar flatList e ListEmptyComponent

export default Products