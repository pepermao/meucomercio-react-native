import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from './header';

export default function Caixa() {
    return (
        <View>
            <Header />
            <View style={styles.cash}>
                <Text style={styles.cash_title}>Caixa</Text>

                <Text style={styles.cash_total}>Total em caixa</Text>
                <Text style={styles.current_value}>R$ 00.0</Text>
                
                <Text style={styles.cash_initial}>Valor Inicial</Text>
                <Text style={styles.initial_value}>R$ 00.0</Text>        
            </View>

            <View style={styles.action_btns}>
                <TouchableOpacity style={styles.btn}>
                    <Text>Fechar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Text>Movimentar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Text>Vender</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Text>Receber</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
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
});