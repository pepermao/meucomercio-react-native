import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const NewCostumer = ({ navigation }) => {
    return (
        <View style={{backgroundColor: '#fff', height: '100%',}}>    
            <ScrollView contentContainerStyle={styles.formContainer}>
                <Text style={styles.newClientTitle}>Inserir um novo cliente</Text>
                
                <Text>Nome</Text>
                <TextInput style={styles.formInput} />

                <Text>Telefone</Text>
                <TextInput keyboardType="number-pad" style={styles.formInput}/>
    
                <Text>Endereço</Text>
                <TextInput style={styles.formInput} />
    
                <Text>CPF</Text>
                <TextInput style={styles.formInput} />
            </ScrollView>

            <TouchableOpacity 
                style={styles.insertBtn}
                onPress={() => 
                    navigation.navigate('SuccessClient')}>
                        <Text style={styles.btnText}>Inserir</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NewCostumer

const styles = StyleSheet.create({
    formContainer: {
        paddingTop: 40,
        paddingHorizontal: 20,
        paddingBottom: 80,
    },

    newClientTitle: {
        marginLeft: 20,
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 25,
    },

    formInput: {
        width: '100%',
        padding: 5,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#d4d4d4',
    },

    insertBtn: {
        display: "flex",
        backgroundColor: '#0d6efd',
        padding: 15,
        position: "absolute",
        bottom: 0,
        width: '100%',
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