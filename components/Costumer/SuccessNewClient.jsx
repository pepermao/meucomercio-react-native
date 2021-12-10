import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native'

export default function SuccessCliente({navigation}) {
    return (
        <View style={styles.container}>    
            <View style={styles.formContainer}>
                <Text style={styles.newClientTitle}>Inserir um novo cliente</Text>
    
                <View style={styles.successContainer}>
                    <Image
                        style={styles.verifyImage} 
                        source={require('../../images/verify2.jpg')}
                    />

                    <Text style={styles.newClientSuccess}>Cliente inserido com sucesso</Text>

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
//falta voltar para pagina de clientes
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
        fontWeight: '500',
        marginBottom: 25,
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
        fontSize: 26,
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