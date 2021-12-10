import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView,} from 'react-native'

export default function Cliente({ navigation }) {
    return (
        <View style={{backgroundColor: '#fff'}}>    
            <ScrollView style={styles.formContainer}>
                <Text style={styles.newClientTitle}>Inserir um novo cliente</Text>
    
                <Text style={styles.formSubtitle}>Nome</Text>
                <TextInput style={styles.formInput} />
                
                <Text style={styles.formSubtitle}>Telefone</Text>
                <TextInput style={styles.formInput} />
    
                <Text style={styles.formSubtitle}>Endereço</Text>
                <TextInput style={styles.formInput} />
    
                <Text style={styles.formSubtitle}>CPF</Text>
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

const styles = StyleSheet.create({
    formContainer: {
        paddingTop: 40,
        height: '100%',
        paddingHorizontal: 20,
    },

    newClientTitle: {
        marginLeft: 20,
        fontSize: 20,
        fontWeight: '500',
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