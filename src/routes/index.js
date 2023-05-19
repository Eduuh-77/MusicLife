import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SingIn'
import Cadastro from '../pages/Cadastro';
import Teste from '../pages/Teste/inde';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Teste"
                component={Teste}
                
            />
        </Stack.Navigator>
    )
}
