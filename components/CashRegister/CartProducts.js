import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Products = ({ name, description, qtd, price}) => {
    return(
        <View style={styles.productContainer}>
            <View style={{display: 'flex', justifyContent: 'center', width: '40%', padding: 2}}>
                <Text style={styles.productName}>{name}</Text>
                <Text style={styles.productDescription}>{description}</Text>
            </View>

            <View style={{display: 'flex', justifyContent: 'center', width: '35%', padding: 2}}>
                <Text>Qtd em estoque: {qtd}</Text>
                <Text style={{fontWeight: 'bold',}}>Preço: R${price.toFixed(2)}</Text>
            </View>

            <View style={{display: 'flex', justifyContent: 'center', width: '25%', padding: 2}}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Cart')
                    }}    
                    style={styles.sellBtn}
                >
                    <Text style={{color: '#fff'}}>Vender</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Products

const styles = StyleSheet.create({
    productContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#d4d4d4',
        marginTop: 20,
    },

    productName: {
        fontSize: 16,
    },

    productDescription: {
        fontSize: 14,
        color: '#ccc',
        marginTop: 10,
        marginBottom: 15,
    },

    sellBtn: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 4,
        backgroundColor: '#0d6efd',
        marginBottom: 10,
    }
})