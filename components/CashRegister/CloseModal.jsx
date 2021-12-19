import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import  Modal  from "react-native-modal" ;

const CloseCash = ({ navigation, visible, onRequestClose, closeModal, currentValue }) => {
    const [sobraOuFalta, setSobraOuFalta] = useState('')
    const [balanceValue, setBalanceValue] = useState(0)
    const [valorAoFechar, setValorAoFechar] = useState(0)

    const Balance = (e) => {
        setValorAoFechar(e)
        setBalanceValue(e - currentValue)
        VerificaSobraOuFalta()
    }

    const VerificaSobraOuFalta = () => {
        if(balanceValue == 0) {
            setSobraOuFalta('Ok')
        }

        else if(balanceValue > 0) {
            setSobraOuFalta('Sobra')
        }

        else if(balanceValue < 0) {
            setSobraOuFalta('Falta')
        }
    }
    
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
                        <Text style={styles.modalBalance}>O saldo do caixa é de R$ {currentValue.toFixed(2)}, digite o saldo real para balanço</Text>
                        <TextInput
                            keyboardType="number-pad"
                            placeholder="R$ 0.00"
                            onChangeText={(e) => Balance(e)}
                            style={styles.modalMoneyInput}
                        />
                        
                        <Text>{sobraOuFalta} de R$ {balanceValue}</Text>
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
                                //passar o valor que o caixa foi fechado
                                closeModal()
                                navigation.navigate('CashClosed')
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
        padding: 10,
        paddingBottom: 0,
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