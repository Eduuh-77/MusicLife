import React from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";

import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
    const navigation = useNavigation();

 return(
    <View style={styles.container}>
        <View style={styles.containerHeader}>
        <Image source={require('../../assets/Ativo1.jpg')}
        style={{width:'100%'}}
        resizeMode="contain"
        />
        </View>

        <View style = {styles.containerForm}>
                <Text style={styles.title}> Email</Text>
                <TextInput placeholder="Digite um email..." 
                style={styles.input}/>

                <Text style={styles.title}> Senha</Text>
                <TextInput placeholder="Sua senha..." 
                    style={styles.input}/>


                <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Teste')}>
                    <Text style= {styles.buttonText} >Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style= {styles.buttonRegister}>
                    <Text style= {styles.registerText} >Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </View>

         </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1E1E1E'
    },
    containerHeader:{
        marginTop: 90,
        marginBottom: 10,
    },
    containerForm:{
        flex:1,
        paddingStart:'5%',
        paddingEnd: '5%',
        alignSelf:'center'
    },
    title:{
        color:'#fff',
        fontSize:20,
        marginTop: 28,
        
    },
    input:{
        color: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        height:40,
        width: 322,
        marginBottom:12,
        fontSize: 16,
        
    },
    button:{
        backgroundColor:'#00FF00',
        width: 322,
        height:52,
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent:'center',
        alignItems: 'center',
    },
    buttonText:{
        collor: '#000000',
        fontSize:18,
        fontWeight: 'bold'
    },
    buttonRegister:{
        marginTop: 14,
        allingSelf: 'center'
    },
    registerText:{
        color:'#a1a1a1'
    }

})