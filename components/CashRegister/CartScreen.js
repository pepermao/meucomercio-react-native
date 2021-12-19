import React from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native'
import  { Picker }  from  '@react-native-picker/picker' ;
import { FlatList } from "react-native-gesture-handler";
import ProductsData from '../../Data/Products'
import ProductsContainer from './CartProducts'

const Cart = () => {
    return (
        <View>
            <Text style={styles.cartTitle}>Inserir nova venda</Text>

            <View style={styles.searchProducts}>
                <Text>Procure um produto</Text>
                <TextInput placeholder="Pesquise um produto" style={styles.searchInput} />
                <View style={styles.stockPicker}>
                    <Picker>
                        <Picker.Item label="Principal" value="Principal" />
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
                    />
                }
                keyExtractor={item => item.id}
                style={{height: 270}}
            />

            <View style={{marginTop: 30,}}>
                <Text>Nome do Cliente</Text>
                <TextInput style={styles.defaultInput}/>
            </View>

            <View style={styles.paymentContainer}>
                <Text style={{width: '100%', marginBottom: 10,}}>Método de Pagamento</Text>
                <View style={styles.formPayment}>
                    <Picker>
                        <Picker.Item label="Dinheiro" value="Dinheiro" />
                    </Picker>
                </View>

                <View style={styles.installments}>
                    <Picker>
                        <Picker.Item label="Parcelamento" value="Parcelamento" />
                    </Picker>
                </View>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    cartTitle: {
        width: '100%',
        marginLeft: 20,
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 25,
    },

    searchProducts: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },

    searchInput: {
        width: '75%',
        padding: 8,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#d4d4d4',
    },

    stockPicker: {
        display: 'flex',
        justifyContent: 'center',
        width: '25%',
        borderWidth: 1,
        borderColor: '#d4d4d4',
        height: 46,
        borderLeftWidth: 0,
    }, //search-stock-picker

    defaultInput: {
        marginTop: 10,
        marginBottom: 20,
        width: '100%',
        borderWidth: 1,
        borderColor: '#d4d4d4',
        borderRadius: 4,
        padding: 5,
    },

    paymentContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 150,
    },

    formPayment: {
        display: 'flex',
        justifyContent: 'center',
        width: '50%',
        height: 40,
        borderWidth: 1,
        borderColor: '#d4d4d4',
    },
    
    installments: {
        display: 'flex',
        justifyContent: 'center',
        width: '50%',
        height: 40,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderColor: '#d4d4d4',
    },
})