import React from 'react';
import { TextInput, StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Caixa() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.receiptsTitle}>Recebimentos</Text>
            <TextInput style={styles.productInput} placeholder="Pesquise um cliente"/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff'
    },

    receiptsTitle: {
        marginLeft: 10,
        fontSize: 22,
        fontWeight: '700'
    },

    productInput: {
        marginTop: 20,
        width: '100%',
        borderWidth: 1,
        borderColor: '#d4d4d4',
        borderRadius: 4,
        height: 45,
        paddingLeft: 10,
    },
})