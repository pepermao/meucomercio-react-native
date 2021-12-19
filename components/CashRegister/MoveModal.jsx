import React from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import  Modal  from "react-native-modal" ;

const MoveCash = ({ visible, onRequestClose, closeModal, currentValue, setCurrentValue }) => {
    let value = 0
    
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
                    <Text style={styles.modalTitle}>Acréscimo / Retirada do Caixa</Text>
                    <View style={styles.containerBalance}>
                    <TextInput
                            keyboardType="number-pad"
                            placeholder="R$ 0.00"
                            onChangeText={e => value = e}
                            style={styles.modalMoneyInput} />
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
                                setCurrentValue(currentValue + parseInt(value))
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

export default MoveCash

const styles = StyleSheet.create({
    modalView: {
        marginTop: 0,
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