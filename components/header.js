import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerTitle}>Meu Comércio</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#386ba6',
    },

    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
    },
})