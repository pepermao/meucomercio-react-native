import React from "react";
import { StyleSheet, FlatList } from 'react-native'
import CartScreen from '../components/CashRegister/CartScreenMinimize'

const Cart = () => {
    return (
        <FlatList 
            data={[{id: 1}]}
            renderItem={() => <CartScreen />}
            style={styles.formContainer}
            keyExtractor={item => item.id}
        />
    )
}

export default Cart

const styles = StyleSheet.create({
    formContainer: {
        height: '100%',
        backgroundColor: '#fff',
    },
})