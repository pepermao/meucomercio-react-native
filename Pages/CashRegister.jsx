import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import CloseModal from '../components/CashRegister/CloseModal';
import MoveModal from '../components/CashRegister/MoveModal'


const CashScreen = ({ navigation }) => {
    const [closeModalVisible, setCloseModalVisible] = useState(false)
    const [moveModalVisible, setMoveModalVisible] = useState(false)
    
    return (
        <ScrollView style={{backgroundColor: '#fff'}}>
            <CloseModal
                visible={closeModalVisible}
                onRequestClose={() => {
                    setCloseModalVisible(!closeModalVisible);
                }}
                closeModal={() => {
                    setCloseModalVisible(false);
                }}
            />

            <MoveModal 
                visible={moveModalVisible}
                onRequestClose={() => {
                    setMoveModalVisible(!moveModalVisible);
                }}
                closeModal={() => {
                    setMoveModalVisible(false);
                }}
            />
            
            <View style={styles.cash}>
                <Text style={styles.cash_total}>Total em caixa</Text>
                <Text style={styles.current_value}>R$ 00.0</Text>
                <Text style={styles.cash_initial}>Valor Inicial</Text>
                <Text style={styles.initial_value}>R$ 00.0</Text>        
            </View>

            <View style={styles.action_btns}>
                <TouchableOpacity
                    onPress={() => {
                        setCloseModalVisible(true)
                    }}
                    style={styles.btn}
                >
                    <Text>Fechar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setMoveModalVisible(true)
                    }}
                    style={styles.btn}
                >
                    <Text>Movimentar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=> {
                        navigation.navigate('Cart')
                    }}
                    style={styles.btn}
                >
                    <Text>Vender</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=> {
                        navigation.navigate('ReceiptsScreen')
                    }}
                    style={styles.btn}
                >
                    <Text>Receber</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default CashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    cash: {
        paddingTop: 40,
        paddingLeft: 40,
    },

    cash_title: {
        fontSize: 20,
        fontWeight: '400',
    },

    cash_total: {
        marginTop: 50,
        fontSize: 20,
        fontWeight: '200',
    },

    current_value: {
        fontSize: 40,
        fontWeight: '700',
    },

    cash_initial: {
        marginTop: 75,
        fontSize: 20,
        fontWeight: '200',
    },

    initial_value: {
        fontSize: 20,
        fontWeight: '500',
    },

    action_btns: {
        marginTop: 40,
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#d8d8d8',
        width: '25%',
        height: '100%',
    },

    modalView: {
        marginTop: '45%',
        marginHorizontal: '2%',
        backgroundColor: 'rgb(247, 247, 247)',
        borderWidth: 2,
        borderColor: '#000',
        width: '96%',
        height: '45%',
        borderRadius: 10,
        paddingVertical: 8,
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