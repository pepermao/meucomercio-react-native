import React from "react";
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function SuccessCliente({navigation}) {
    return (
        <View style={styles.container}>    
            <View style={styles.formContainer}>
                <Text style={styles.newClientTitle}>Editar Produto</Text>
    
                <View style={styles.successContainer}>
                    <MaterialIcons name="check-circle" size={90} color="#00dd04" />
                    <Text style={styles.newClientSuccess}>Produto editado com sucesso</Text>

                    <TouchableOpacity 
                        onPress={navigation.goBack}
                        style={styles.addOtherCostumer}
                    >
                        <Text style={styles.addOtherTitle}>Voltar</Text>
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

    verifyImage: {
        width: 144,
        height: 144,
    },

    newClientSuccess: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        padding: 10,
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