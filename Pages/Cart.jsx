import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import  { Picker }  from  '@react-native-picker/picker' ;

const Cart = () => {
    return (
        <View style={{backgroundColor: '#fff'}}>    
            <ScrollView style={styles.formContainer}>
                <Text style={styles.cartTitle}>Inserir nova venda</Text>

                <ScrollView style={{height: 300,}}>
                    <View style={styles.searchProducts}>
                        <Text>Procure um produto</Text>
                        <TextInput placeholder="Pesquise um produto" style={styles.searchInput} />
                        <View style={styles.stockPicker}>
                            <Picker>
                                <Picker.Item label="Principal" value="Principal" />
                            </Picker>
                        </View>
                    </View>

                    {[ 1, 2, 3, 4, 5 ].map(item => {
                        return (
                            <Text
                                key={item}
                                style={{
                                    fontSize: 45, borderBottomWidth: 1, borderColor: '#d4d4d4'
                                }}
                                > Produto {item}
                            </Text>
                    )})}
                </ScrollView>

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
                            {[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ].map(num => {
                                return (
                                    <Picker.Item label={num + 'x'} value={num} />
                                )
                            })}
                        </Picker>
                    </View>
                </View>              
            </ScrollView>

            <View style={styles.footer}>
                <Text style={styles.footerTotal}>Total: R$ 0</Text>
                <Text style={styles.footerDiscount}>Desconto: R$ 0</Text>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    formContainer: {
        paddingTop: 20,
        height: '100%',
        paddingHorizontal: 20,
    },

    cartTitle: {
        width: '100%',
        marginLeft: 20,
        fontSize: 20,
        fontWeight: '500',
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


    footer: {
        display: "flex",
        flexDirection: 'row',
        backgroundColor: '#ddd',
        padding: 15,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingLeft: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        fontSize: 18,
    },

    footerTotal: {
        width: '50%',
    },

    footerDiscount: {
        width: '50%',
        color: '#000',
    }
})