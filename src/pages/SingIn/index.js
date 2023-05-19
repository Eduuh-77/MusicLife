import React, { useContext } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import UsersContext from "../../contexts/Users";

export default function SignIn() {
  const navigation = useNavigation();
  const { login, isAuthenticated } = useContext(UsersContext);

  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const handleSignIn = () => {
    login(email, password);
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.buttonBack}
        onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.buttonTextBack} > Voltar </Text>
      </TouchableOpacity>

      <View style={styles.containerHeader}>
        <Image source={require('../../assets/Ativo1.jpg')}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}> Email</Text>
        <TextInput placeholder="Digite um email..."
          style={styles.input}
          onChangeText={inputText => setEmail(inputText)}
          value={email} />

        <Text style={styles.title}> Senha</Text>
        <TextInput placeholder="Sua senha..."
          style={styles.input}
          onChangeText={inputText => setPassword(inputText)}
          value={password} />


        <TouchableOpacity style={styles.button} onPress={handleSignIn}>

          <Text style={styles.buttonText} >Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.registerText} >Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}


