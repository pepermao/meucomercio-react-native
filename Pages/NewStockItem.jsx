import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import  { Picker }  from  '@react-native-picker/picker' ;

const Stock = ({navigation}) => {
    return(
        <View style={{backgroundColor: '#fff',}}>
            <ScrollView style={styles.container}>
                <Text style={styles.mainTitle}>Adicionar novo item ao estoque</Text>
                <View>
                    <Text>Estoque</Text>
                    <View 
                        style={{ 
                            display: 'flex',
                            justifyContent: 'center',
                            marginVertical: 10,
                            borderWidth: 1,
                            borderColor: '#d4d4d4',
                            height: 40,
                            borderRadius: 4,
                        }}>
                        <Picker>
                            <Picker.Item label="Principal" value="Principal" />
                        </Picker>
                    </View>
                </View>

                <View style={styles.dInputContainer}>
                    <Text style={styles.dTitle}>Código</Text>
                    <TextInput style={styles.dInput} />
                    <TouchableOpacity style={styles.searchBtn}><Text style={styles.textBtn}>P</Text></TouchableOpacity>
                </View>

                <View>
                    <Text>Marcas</Text>
                    <TextInput style={styles.stockInput}/>
                </View>

                <View>
                    <Text>Nome</Text>
                    <TextInput style={styles.stockInput}/>
                </View>

                <View style={styles.dInputContainer}>
                    <Text style={styles.dTitle}>Capacidade</Text>
                    <TextInput style={styles.dInput}/>
                    <View style={styles.capacityPicker}>
                        <Picker>
                            <Picker.Item label="ml" value="ml" />
                            <Picker.Item label="g" value="g" />
                            <Picker.Item label="kg" value="kg" />
                        </Picker>
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
                    <TextInput style={styles.stockInput}/>
                </View>

                <View>
                    <Text>Preço de custo</Text>
                    <TextInput style={styles.stockInput}/>
                </View>

                <View style={styles.last}>
                    <Text>Quantidade</Text>
                    <TextInput style={styles.stockInput}/>
                </View>
            </ScrollView>

            <TouchableOpacity
                onPress={() => 
                    navigation.navigate('SuccessProduct')}
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
    },

    productInput: {
        width: 10,
        borderWidth: 2,
        borderColor: '#d4d4d4',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },

    stockPicker: {
        borderWidth: 2,
        borderLeftWidth: 0,
        borderColor: '#d4d4d4',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        width: '30%',
    },

    dataTitle: {
        marginTop: 50,
        color: '#d4d4d4',
    },

    dInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },

    dTitle: {
        width: '100%',
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

    last: {
        marginBottom: 75,
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