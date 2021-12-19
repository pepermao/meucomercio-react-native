import React from "react";
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function SuccessProduct({navigation}) {
    return (
        <View style={styles.container}>    
            <View style={styles.formContainer}>
                <Text style={styles.newClientTitle}>Adicionar novo item ao estoque</Text>
    
                <View style={styles.successContainer}>
                    <MaterialIcons name="check-circle" size={90} color="#00dd04" />
                    <Text style={styles.newClientSuccess}>Produto inserido com sucesso</Text>
                    <TouchableOpacity 
                        onPress={navigation.goBack}
                        style={styles.addOtherCostumer}
                    >
                        <Text style={styles.addOtherTitle}>Adicionar outro</Text>
                    </TouchableOpacity>
                </View>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
    },

    formContainer: {
        paddingTop: 40,
        paddingHorizontal: 20,
    },

    newClientTitle: {
        marginLeft: 20,
        fontSize: 20,
        marginBottom: 25,
        fontWeight: '700',
    },

    successContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    newClientSuccess: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
    },

    addOtherCostumer: {
        marginTop: 40,
        backgroundColor: '#0d6efd',
        padding: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
    },

    addOtherTitle: {
        color: '#fff'
    }
})