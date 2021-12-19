import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CloseModal from '../components/CashRegister/CloseModal';
import MoveModal from '../components/CashRegister/MoveModal';

const CashScreen = ({ navigation }) => {
    const [closeModalVisible, setCloseModalVisible] = useState(false)
    const [moveModalVisible, setMoveModalVisible] = useState(false)
    const [currentValue, setCurrentValue] = useState(0)

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
                currentValue={currentValue}
                navigation={navigation}
            />

            <MoveModal
                visible={moveModalVisible}
                onRequestClose={() => {
                    setMoveModalVisible(!moveModalVisible);
                }}
                closeModal={() => {
                    setMoveModalVisible(false);
                }}
                currentValue={currentValue}
                setCurrentValue={setCurrentValue}
            />

            <View style={{paddingTop: 40, paddingLeft: 40,}}>
                <Text style={{fontSize: 22, fontWeight: '700',}}>Caixa</Text>
                <Text style={styles.cash_total}>Total em caixa</Text>
                <Text style={styles.current_value}>R$ {currentValue.toFixed(2)}</Text>
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
    initial_value: {
        fontSize: 20,
        color: '#595959',
        fontWeight: '700',
    },

    cash_total: {
        marginTop: 50,
        fontSize: 20,
        color: '#595959',
    },

    current_value: {
        fontSize: 44,
        fontWeight: '700',
        color: '#595959',
    },

    cash_initial: {
        marginTop: 75,
        fontSize: 20,
        color: '#595959',
    },

    action_btns: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 40,
        height: 100,
    },

    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#d8d8d8',
        width: '25%',
        height: '100%',
        borderRadius: 5,
    },//adicionar active
});