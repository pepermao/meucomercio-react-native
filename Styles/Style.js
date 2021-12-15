import { StyleSheet } from 'react-native';

export default function Style() {
    const style = StyleSheet.create({
        container: {
            /* font-family: a; */
            backgroundColor: '#000',
            fontSize: 16,
            padding: 20,
        },
        
        main_container: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
        },
        
        main_title: {
            fontSize: 22,
            fontWeight: '500',
            marginVertical: 25,
            marginHorizontal: 20,
        },
        
        main_input: {
            width: '100%',
            borderWidth: 1,
            borderColor: '#d4d4d4',
            borderRadius: 4,
            paddingVertical: 5,
            paddingHorizontal: 10,
            marginVertical: 10,
        },
        
        box: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
        },
        
        stock_double_input: {
            marginTop: 10,
            marginBottom: 20,
            width: '85%',
            borderWidth: 1,
            borderColor: '#d4d4d4',
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
            padding: 5,
        },
        
        stock_search_btn: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0d6efd',
            width: '15%',
            height: 40,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5,
        },
        
        stock_search_btn_text: {
            color: '#fff',
        },
        
        stock_capacity_picker: {
            display: 'flex',
            justifyContent: 'center',
            width: '15%',
            height: 40,
            borderWidth: 1,
            borderColor: '#d4d4d4',
            borderLeftWidth: 0,
            backgroundColor: 'rgb(245, 245, 245)',
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
        },
        
        footer_insert_btn: {
            display: 'flex',
            backgroundColor: '#0d6efd',
            padding: 15,
            width: '100%',
            position: 'absolute',
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
        },
        
        footer_insert_btn_text: {
            fontSize: 24,
            color: '#fff',
        },
        
        search_product_input: {
            width: '70%',
            height: 45,
            paddingLeft: 10,
            borderWidth: 1,
            borderColor: '#d4d4d4',
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
        },
        
        search_stock_picker: {
            display: 'flex',
            justifyContent: 'center',
            width: '30%',
            height: 45,
            borderWidth: 1,
            borderColor: '#d4d4d4',
            borderLeftWidth: 0,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
        },
        
        cart_search_input: {
            width: '70%',
            padding: 8,
            marginVertical: 10,
            borderWidth: 1,
            borderColor: '#d4d4d4',
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
        },
        
        cart_payment_container: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: 150,
        },
        
        cart_form_payment: {
            display: 'flex',
            justifyContent: 'center',
            width: '50%',
            height: 40,
            borderWidth: 1,
            borderColor: '#d4d4d4',
        },
        
        cart_installments: {
            display: 'flex',
            justifyContent: 'center',
            width: '50%',
            height: 40,
            borderWidth: 1,
            borderColor: '#d4d4d4',
            borderLeftWidth: 0,
        },
        
        cart_footer_total: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ddd',
            padding: 15,
            width: '50%',
            position: 'absolute',
            bottom: 0,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            fontSize: 18,
            paddingLeft: '10%',
        },
        
        cart_footer_discount: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ddd',
            padding: 15,
            width: '50%',
            position: 'absolute',
            bottom: 0,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            fontSize: 18,
            right: 0,
            paddingRight: '0%',
            color: '#000',
        },
})}