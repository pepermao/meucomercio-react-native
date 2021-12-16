import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import  { Picker }  from  '@react-native-picker/picker';
import ProductsData from '../Data/Products'

const ProductsScreen = ({navigation}) => {
    return (
        <ScrollView style={{backgroundColor: '#fff'}}>
            <View style={styles.container}>
                <TextInput style={styles.productInput} placeholder="Pesquise um produto"/>
                <View style={styles.stockPicker}>
                    <Picker style={styles.stockInput}>
                        <Picker.Item label="Todos os estoques" value="all" />
                        <Picker.Item label="Principal" value="main" />
                    </Picker>
                </View>

                {/* <FlatList 
                    data={ProductsData}
                    renderItem={({ item }) => 
                        <ProductsContainer 
                            key={item.key}
                            name={item.name}
                            description={item.description}
                            qtd={item.qtd}
                            price={item.price}
                        />
                    }
                    keyExtractor={item => item.id}
                /> */}
                {ProductsData.map(product => {
                    return (
                        <View key={product.key} style={styles.productContainer}>
                            <View style={{display: 'flex', justifyContent: 'center', width: '40%', padding: 2}}>
                                <Text style={styles.productName}>{product.name}</Text>
                                <Text style={styles.productDescription}>{product.description}</Text>
                            </View>

                            <View style={{display: 'flex', justifyContent: 'center', width: '35%', padding: 2}}>
                                <Text>Qtd em estoque: {product.qtd}</Text>
                                <Text style={{fontWeight: 'bold',}}>Preço: R${product.price.toFixed(2)}</Text>
                            </View>

                            <View style={{display: 'flex', justifyContent: 'center', width: '25%', padding: 2}}>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('Cart')
                                    }}    
                                    style={styles.sellBtn}
                                >
                                    <Text style={{color: '#fff'}}>Vender</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('EditProductStackScreen')
                                    }}    
                                    style={styles.sellBtn}
                                >
                                    <Text style={{color: '#fff'}}>Editar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                )})}
            </View>
        </ScrollView>
    )
}// usar flatList e ListEmptyComponent

export default ProductsScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 20,
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

    productContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#d4d4d4',
        marginTop: 20,
    },

    productName: {
        fontSize: 16,
    },

    productDescription: {
        fontSize: 14,
        color: '#ccc',
        marginTop: 10,
        marginBottom: 15,
    },

    sellBtn: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 4,
        backgroundColor: '#0d6efd',
        marginBottom: 10,
    }
})