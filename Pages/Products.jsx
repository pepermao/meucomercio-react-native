import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, } from 'react-native';
import  { Picker }  from  '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Products = ({ navigation }) => {
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
                
                {[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].map(item => {
                    return (
                        <View key={item} style={styles.productContainer}>
                            <View style={{display: 'flex', justifyContent: 'center', width: '40%', padding: 2}}>
                                <Text style={styles.productName}>Produto {item}</Text>
                                <Text style={styles.productDescription}>Descrição Produto {item}</Text>
                            </View>

                            <View style={{display: 'flex', justifyContent: 'center', width: '35%', padding: 2}}>
                                <Text>Qtd em estoque: {item}</Text>
                                <Text style={{fontWeight: 'bold',}}>Preço: R$30</Text>
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
                                        navigation.navigate('ProductEdit')
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
}

export default Products

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