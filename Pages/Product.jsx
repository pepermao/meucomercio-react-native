import React from 'react';
import { TextInput, Picker, StyleSheet, Text, View } from 'react-native';

export default function Caixa() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.productInput} placeholder="Pesquise um produto"/>
            <View style={styles.stockPicker}>
                <Picker style={styles.stockInput}>
                    <Picker.Item label="" value="" />
                    <Picker.Item label="Produto 1" value="1" />
                    <Picker.Item label="Produto 2" value="2" />
                </Picker>
            </View>
            <Text style={styles.dataTitle}>No Data</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: 10,
        marginHorizontal: 20
    },

    productInput: {
        width: '70%',
        borderWidth: 2,
        borderColor: '#d4d4d4',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        paddingLeft: 10,
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
    }
})