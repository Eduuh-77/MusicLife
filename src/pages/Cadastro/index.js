import React, {useState}  from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";

import { useNavigation } from '@react-navigation/native'
import { useForm,Controller} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
    username: yup.string().required("Informe seu username"),
    email: yup.string().email("Email invalido").required("informe seu emal"),
    password: yup.string().min(6,"A senha deve conter pelo menos 6 digitos").required("Infrome sua senha")
})

export default function Cadastro() {
    const navigation = useNavigation();
    const {control,handleSubmit,formState: {errors} } = useForm({resolver: yupResolver(schema)})
    

function handleCadastro(data){
    console.log(data);
}


 return(
    <View style={styles.container}>
        <View style={styles.containerHeader}>
        <Image source={require('../../assets/Ativo1.jpg')}
        style={{width:'100%'}}
        resizeMode="contain"
        />
        </View>

        <View style = {styles.containerForm}>

                <Text style={styles.title}> Nome</Text>
                <Controller
                    control={control}
                    name="username"
                    render = {({ field: {onChange, onBlur, value} }) => (
                    <TextInput 
                        placeholder="Digite seu nome..." 
                        onBlur={onBlur}   
                        style={[styles.input, {
                            borderWidth: errors.username && 1,
                            borderColor: errors.username && '#ff375b'
                        }]}
                        onChangeText={onChange}
                        value={value}
                    />    
                    )}
                />
                {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text> }
                                
                <Text style={styles.title}> Email</Text>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: {onChange, onBlur, value}}) => (
                        <TextInput 
                        placeholder="Digite seu email" 
                        onBlur={onBlur}   
                        style={[styles.input, {
                            borderWidth: errors.email && 1,
                            borderColor: errors.email && '#ff375b'
                        }]}
                        onChangeText={onChange}
                        value={value}
                    />    
                    )}
                />
                 {errors.email && <Text style={styles.labelError}>{errors.email?.message} </Text> }

                <Text style={styles.title}> Senha</Text>
                <Controller
                    control={control}
                    name="password"
                    render={({ field: {onChange, onBlur, value}}) => (
                        <TextInput 
                        placeholder="Digite sua senha" 
                        onBlur={onBlur}   
                        style={[styles.input, {
                            borderWidth: errors.password && 1,
                            borderColor: errors.password && '#ff375b'
                        }]}
                        onChangeText={onChange}
                        value={value}
                        secureTextEntry={true}

                    />    
                    )}
                />
                 {errors.password && <Text style={styles.labelError}>{errors.password?.message} </Text> }


                <TouchableOpacity style={styles.button} 
                    onPress={ handleSubmit(handleCadastro)}>
                    <Text style= {styles.buttonText} >Realizar Cadastro</Text>
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
        color: '#000000',
        fontSize:18,
        fontWeight: 'bold'
    },
    labelError:{
        alignSelf: "flex-start",
        color: '#ff375b',
        marginBottom:8,
      
    }

})