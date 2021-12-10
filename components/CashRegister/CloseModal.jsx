import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import MoneyInput from 'react-native-money-input'
import  Modal  from "react-native-modal" ;

const CloseCash = ({ visible, onRequestClose, closeModal }) => {
    return (
        <View>
            <Modal
                animationType="slide"
                avoidKeyboard = {true}
                isVisible={visible}
                onBackdropPress={onRequestClose}
                onRequestClose={onRequestClose}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>Fechamento do Caixa</Text>
                    <View style={styles.containerBalance}>
                        <Text style={styles.modalBalance}>O saldo do caixa é de R$ 250.4, digite o saldo real para balanço</Text>
                        <MoneyInput style={styles.modalMoneyInput} />
                    </View>
                    
                    <View style={styles.modalBtns}>
                        <TouchableOpacity 
                            onPress={() => {
                                closeModal()
                            }}
                            style={styles.modalCancelBtn}
                        >
                            <Text>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                closeModal()
                            }}
                            style={styles.modalOkBtn}
                        >
                            <Text style={styles.modalOkText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default CloseCash

const styles = StyleSheet.create({
    modalView: {
        marginTop: 80,
        backgroundColor: 'rgb(247, 247, 247)',
        width: '100%',
        height: '48%',
        borderRadius: 10,
        paddingVertical: 15,
    },

    modalTitle: {
        paddingHorizontal: 20,
        fontSize: 18,
    },

    containerBalance: {
        paddingHorizontal: 20,
        marginTop: 20,
        paddingVertical: 20,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#d4d4d4',
    },

    modalBalance: {
        fontSize: 16,
    },

    modalMoneyInput: {
        borderWidth: 0,
        borderBottomWidth: 2,
        height: 100,
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 60,
    },

    modalBtns: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 20,
    },

    modalCancelBtn: {
        borderWidth: 1,
        borderColor: '#d4d4d4',
        paddingHorizontal: 12,
        paddingVertical: 5,
        marginRight: 10,
        borderRadius: 4,
    },

    modalOkBtn: {
        backgroundColor: '#0d6efd',
        paddingHorizontal: 16,
        paddingVertical: 5,
        marginRight: 10,
        borderRadius: 4,
    },
    
    modalOkText: {
        color: '#fff',
    }
});