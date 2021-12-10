import React from 'react';
import { TextInput, StyleSheet, Text, View, ScrollView } from 'react-native';
import  { Picker }  from  '@react-native-picker/picker';

export default function Caixa() {
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
                <Text style={styles.dataTitle}>No Data</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: 20,
    },

    productInput: {
        width: '70%',
        borderWidth: 1,
        borderColor: '#d4d4d4',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        height: 45,
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
        height: 45,
    },

    dataTitle: {
        marginTop: 50,
        color: '#d4d4d4',
    }
})