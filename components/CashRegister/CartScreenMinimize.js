import React from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native'
import CartScreen from './CartScreen'

const Cart = () => {
    return (
        <View style={{backgroundColor: '#fff'}}>
            <FlatList 
                data={[{id: 1}]}
                renderItem={() => <CartScreen />}
                style={styles.formContainer}
                keyExtractor={item => item.id}
            />

            <View style={styles.footer}>
                <View style={styles.footerTotal}>
                    <Text style={{fontSize: 18}}>Total:</Text>
                    <Text style={{fontSize: 18, fontWeight: '700'}}> R$ 0</Text>
                </View>
                <Text style={styles.footerDiscount}>Desconto: R$ 0</Text>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    formContainer: {
        paddingTop: 20,
        height: '100%',
        paddingHorizontal: 20,
    },

    footer: {
        display: "flex",
        flexDirection: 'row',
        backgroundColor: '#ddd',
        padding: 15,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-between',
    },

    footerTotal: {
        display: 'flex',
        width: '50%',
        marginLeft: '5%',
        flexDirection: 'row',
    },

    footerDiscount: {
        width: '50%',
        color: '#000',
        fontSize: 18,
    },
})