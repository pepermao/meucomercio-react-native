import React from 'react';
import { FlatList, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import  { Picker }  from  '@react-native-picker/picker';
import ProductsData from '../../Data/Products'
import ProductsContainer from './ProductsContainer'

const ProductsScreen = ({navigation}) => {
    return (
        <ScrollView style={{backgroundColor: '#fff',}}>
            <View style={styles.container}>
                <TextInput style={styles.productInput} placeholder="Pesquise um produto"/>
                <View style={styles.stockPicker}>
                    <Picker style={styles.stockInput}>
                        <Picker.Item label="Todos os estoques" value="all" />
                        <Picker.Item label="Principal" value="main" />
                    </Picker>
                </View>
            </View>
            <FlatList 
                data={ProductsData}
                renderItem={({ item }) => 
                    <ProductsContainer 
                        key={item.key}
                        name={item.name}
                        description={item.description}
                        qtd={item.qtd}
                        price={item.price}
                        teste={ navigation }
                    />
                }
                keyExtractor={item => item.id}
                style={{paddingHorizontal: 20, paddingBottom: 50}}
            />
        </ScrollView>
    )
}// usar flatList e ListEmptyComponent

export default ProductsScreen

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 0,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    productInput: {
        width: '70%',
        borderWidth: 1,
        borderColor: '#d4d4d4',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        height: 46,
        paddingLeft: 10,
    },

    stockPicker: {
        display: 'flex',
        justifyContent: 'center',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderColor: '#d4d4d4',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        width: '30%',
        height: 46,
    },
})