import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView,} from 'react-native'
import  { Picker }  from  '@react-native-picker/picker' ;

export default function Cliente({ navigation }) {
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

                    <Text style={{fontSize: 45, borderBottomWidth: 1, borderColor: '#d4d4d4'}}>Produto 1</Text>
                    <Text style={{fontSize: 45, borderBottomWidth: 1, borderColor: '#d4d4d4'}}>Produto 2</Text>
                    <Text style={{fontSize: 45, borderBottomWidth: 1, borderColor: '#d4d4d4'}}>Produto 3</Text>
                    <Text style={{fontSize: 45, borderBottomWidth: 1, borderColor: '#d4d4d4'}}>Produto 4</Text>
                    <Text style={{fontSize: 45, borderBottomWidth: 1, borderColor: '#d4d4d4'}}>Produto 5</Text>
                    <Text style={{fontSize: 45, borderBottomWidth: 1, borderColor: '#d4d4d4'}}>Produto 6</Text>
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
                            <Picker.Item label="1x" value="1" />
                            <Picker.Item label="2x" value="2" />
                            <Picker.Item label="3x" value="3" />
                            <Picker.Item label="4x" value="4" />
                            <Picker.Item label="5x" value="5" />
                            <Picker.Item label="6x" value="6" />
                            <Picker.Item label="7x" value="7" />
                            <Picker.Item label="8x" value="8" />
                            <Picker.Item label="9x" value="9" />
                            <Picker.Item label="10x" value="10" />
                            <Picker.Item label="11x" value="11" />
                            <Picker.Item label="12x" value="12" />
                        </Picker>
                    </View>
                </View>              
            </ScrollView>

            
                <Text style={styles.footerTotal}>Total: R$ 0</Text>
                <Text style={styles.footerDiscount}>Desconto: R$ 0</Text>
            
        </View>
    )
}

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
    },

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

    footerTotal: {
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

    footerDiscount: {
        display: "flex",
        flexDirection: 'row',
        backgroundColor: '#ddd',
        padding: 15,
        width: '50%',
        position: 'absolute',
        bottom: 0,
        right: 0,
        paddingRight: '0%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        color: '#000',
        fontSize: 18,
    }
})