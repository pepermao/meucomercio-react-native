import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import  { Picker }  from  '@react-native-picker/picker' ;
import { MaterialIcons } from '@expo/vector-icons'
import CurrencyInput from 'react-native-currency-input';



const Stock = ({ navigation }) => {
    const [ product, setProduct ] = useState({
        codigo: 0,
        marca: ' '
    })
    const [price, setPrice] = React.useState();
    const [costPrice, setCostPrice] = React.useState();

    return (
        <View style={{backgroundColor: '#fff',}}>
            <ScrollView style={styles.container}>
                <Text style={styles.mainTitle}>Adicionar novo item ao estoque</Text>

                <View>
                    <Text>Estoque</Text>
                    <View style={styles.stockPicker}>
                        <Picker>
                            <Picker.Item label="Principal" value="Principal" />
                        </Picker>
                    </View>
                </View>

                <View>
                    <Text>Código</Text>
                    <View style={styles.dInputContainer}>
                        <TextInput style={styles.dInput} />
                        <TouchableOpacity style={styles.searchBtn}>
                            <MaterialIcons name="search" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Text>Marcas</Text>
                    <TextInput
                        value={product.marca}
                        onChange={(text) => setProduct({ marca: text.target.value})}
                        style={styles.stockInput}/>
                </View>

                <View>
                    <Text>Nome</Text>
                    <TextInput style={styles.stockInput}/>
                </View>

                <View>
                    <Text style={{width: '100%',}}>Capacidade</Text>
                    <View style={styles.dInputContainer}>
                        <TextInput style={styles.dInput}/>
                        <View style={styles.capacityPicker}>
                            <Picker>
                                <Picker.Item label="ml" value="ml" />
                                <Picker.Item label="g" value="g" />
                                <Picker.Item label="kg" value="kg" />
                            </Picker>
                        </View>
                    </View>
                </View>

                <View>
                    <Text>Tipo</Text>
                    <TextInput style={styles.stockInput}/>
                </View>

                <View>
                    <Text>Descrição</Text>
                    <TextInput style={styles.stockInput}/>
                </View>

                <View>
                    <Text>Data de Vencimento</Text>
                    <TextInput style={styles.stockInput}/>
                </View>

                <View>
                    <Text>Preço</Text>
                    <CurrencyInput
                        value={price}
                        onChangeValue={setPrice}
                        prefix="R$"
                        delimiter="."
                        separator=","
                        precision={2}
                        style={styles.stockInput}
                    />
                </View>

                <View>
                    <Text>Preço de custo</Text>
                    <CurrencyInput
                        value={costPrice}
                        onChangeValue={setCostPrice}
                        prefix="R$"
                        delimiter="."
                        separator=","
                        precision={2}
                        style={styles.stockInput}
                    />
                </View>

                <View style={{marginBottom: 75,}}>
                    <Text>Quantidade</Text>
                    <TextInput style={styles.stockInput}/>
                </View>
            </ScrollView>

            <TouchableOpacity
                onPress={() => { 
                    console.warn(product)
                }}
                    // navigation.navigate('SuccessProduct')}
                style={styles.insertBtn}
            >
                <Text style={styles.btnText}>Inserir</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Stock

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 25,
        backgroundColor: '#fff',
    },

    mainTitle: {
        margin: 25,
        marginVertical: 25,
        fontSize: 22,
        fontWeight: '700',
    },

    stockPicker: {
        display: 'flex',
        justifyContent: 'center',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#d4d4d4',
        height: 40,
        borderRadius: 4,
    }, // dar uma olhada nesse

    dInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },

    dInput: {
        marginTop: 10,
        marginBottom: 20,
        width: '85%',
        borderWidth: 1,
        borderColor: '#d4d4d4',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        padding: 5,
    },

    searchBtn: {
        display: "flex",
        backgroundColor: '#0d6efd',
        width: '15%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
    },

    textBtn: {
        color: '#fff',
    },

    stockInput: {
        marginTop: 10,
        marginBottom: 20,
        width: '100%',
        borderWidth: 1,
        borderColor: '#d4d4d4',
        borderRadius: 4,
        padding: 5,
    },

    capacityPicker: {
        display: 'flex',
        justifyContent: 'center',
        borderWidth: 1,
        height: 40,
        borderLeftWidth: 0,
        borderColor: '#d4d4d4',
        backgroundColor: 'rgb(245, 245, 245)',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        width: '15%',
    },

    insertBtn: {
        display: "flex",
        backgroundColor: '#0d6efd',
        padding: 15,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },

    btnText: {
        fontSize: 24,
        color: '#fff',
    },
})