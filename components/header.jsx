import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Header() {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.menu}><Text style={styles.icon}>Menu</Text></TouchableOpacity>
            <Text style={styles.header_title}>Meu Comércio</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#386ba6',
        padding: 20,
        paddingTop: 30,
    },
    
    menu: {
        borderWidth: 1,
        borderColor: '#fff',
    },
    
    icon: {
        padding: 2,
        alignSelf: 'center',
        color: '#fff',
    },
    
    header_title: {
        marginLeft: 20,
        fontSize: 20,
        color: '#fff',
    },

})
