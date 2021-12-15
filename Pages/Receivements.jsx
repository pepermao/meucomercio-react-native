import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';

const Receivements = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.receiptsTitle}>Recebimentos</Text>
            <TextInput style={styles.productInput} placeholder="Pesquise um cliente"/>
        </ScrollView>
    );
}

export default Receivements

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 40,
        backgroundColor: '#fff'
    },

    receiptsTitle: {
        marginLeft: 20,
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