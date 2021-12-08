import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native'
import Header from "../header";

export default function SuccessCliente() {
    return (
        <View style={styles.container}>
            <Header />
    
            <View style={styles.formContainer}>
                <Text style={styles.newClientTitle}>Inserir um novo cliente</Text>
    
                <View style={styles.successContainer}>
                    <Image
                        style={styles.verifyImage} 
                        source={require('../../images/verify.png')}
                    />

                    <Text style={styles.newClientSuccess}>Cliente inserido com sucesso</Text>

                    <TouchableOpacity>
                        <Text>Adicionar outro</Text>
                    </TouchableOpacity>
                </View>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },

    formContainer: {
        paddingTop: 40,
        paddingHorizontal: 20,
    },

    newClientTitle: {
        marginLeft: 20,
        fontSize: 22,
        fontWeight: '500',
        marginBottom: 25,
    },

    successContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },

    verifyImage: {
        width: 72,
        height: 72,
    },

    newClientSuccess: {
        fontSize: 28,
    }
})