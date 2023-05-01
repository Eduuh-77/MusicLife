
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
 } from "react-native";
 
 import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            
            <View style={styles.containerLogo}>
                <Image
                    source={require('../../assets/Ativo1.jpg')}
                    style={{width:'100%'}}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.containerForm}>
                
                <TouchableOpacity
                style={styles.button}
                onPress={ () => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.buttonCadastro}
                onPress={ () => navigation.navigate('Cadastro')}
                >
                    <Text style={styles.buttonTextCadastro}>Realizar Cadastro</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#1E1E1E'
    },

    containerLogo:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerForm:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'        
    },

    button:{ 

        backgroundColor: '#00FF00',
        borderRadius: 50,
        paddingVertical: 10,
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',  
    },
    buttonCadastro:{

        marginTop: 30,
        backgroundColor: '#00FF00',
        borderRadius: 50,
        paddingVertical: 10,
        width: '80%',
        alignSelf:'center',
        justifyContent: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
        justifyContent: 'center',
        justifyContent: 'center'
    },

    buttonTextCadastro:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        alignSelf:'center',
        justifyContent: 'center',
        justifyContent: 'center',
 }

})