import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CashClosed = ({ navigation }) => {
    const [closeModalVisible, setCloseModalVisible] = useState(false)
    const [moveModalVisible, setMoveModalVisible] = useState(false)
    const [currentValue, setCurrentValue] = useState(0)

    return (
        <View style={{backgroundColor: '#fff', height: '100%',}}>
            <ScrollView>
                <View style={{paddingTop: 40, paddingLeft: 20,}}>
                    <Text style={{fontSize: 22, fontWeight: '700', marginLeft: 25,}}>Caixa</Text>
                    <Text style={styles.cash_total}>O caixa foi fechado em data com o valor de</Text>
                    <Text style={styles.current_value}>R$ 0.00</Text> 
                </View>
            </ScrollView>

            <TouchableOpacity
                onPress={(navigation.goBack)}
                style={styles.insertBtn}
                >
                <Text style={styles.btnText}>Abrir Caixa</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CashClosed

const styles = StyleSheet.create({
    cash_total: {
        marginTop: 25,
        marginRight: 20,
        fontSize: 20,
        color: '#595959',
    },

    current_value: {
        fontSize: 44,
        fontWeight: '700',
        color: '#595959',
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
        fontSize: 22,
        color: '#fff'
    }
});