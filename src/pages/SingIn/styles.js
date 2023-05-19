
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1E1E1E'
    },
    buttonBack:{
        backgroundColor:'#00FF00',
        width: 100,
        height:30,
        marginLeft:'5%',
        marginTop:'8%'
    },
    buttonTextBack:{
        color: '#000000',
        fontSize:23,
        fontWeight: 'bold',
        alignSelf:'center'
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
    buttonRegister:{
        marginTop: 14,
        allingSelf: 'center'
    },
    registerText:{
        color:'#a1a1a1'
    }

})


export default styles;