import React,{useState} from 'react'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, View,TextInput,KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import { auth } from '../firebase'
import { Image } from 'react-native'

const RegisterScreen = ({navigation}) => {

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user =>{
            if(user){
                navigation.navigate("Home")
            }
        }) 
        return unsubscribe
    }, [])

    const handleSignUp =() =>{
        auth.createUserWithEmailAndPassword(email,password)
        .then(userCredentials => {const user = userCredentials.user})
        .catch(error => alert(error.message))
    }

    
    


    return (
        <KeyboardAvoidingView style={styles.container} >
            <Image source={require('../assets/logo.png')} style={{width:100,height:100,marginBottom:30}} />
            <View style={styles.inputcontainer} >
                
                <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={text => setEmail(text)} />
                <TextInput placeholder="Password" secureTextEntry style={styles.input} value={password} onChangeText={text => setPassword(text)}  />
            </View>

            <View style={styles.buttoncontainer} >
                

                <TouchableOpacity style={styles.buttonOutline} onPress={handleSignUp} >
                    <Text style={styles.buttonTextOutline} >Register</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Login")}} >
                    <Text style={styles.buttonText} >Back to Log In</Text>
                </TouchableOpacity>

            </View>
            
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    inputcontainer:{
        width:"80%"
    },
    input:{
        backgroundColor:"white",
        paddingHorizontal:15,
        paddingVertical:10,
        marginTop:5,
        borderRadius:15
    },
    buttoncontainer:{
        width:"60%",
        alignItems:"center",
        justifyContent:"center",
        marginTop:40
    },
    button:{
        width:"100%",
        backgroundColor:"#0062cc",
        padding:15,
        marginTop:15,
        borderRadius:10,
        alignItems:"center",

        
    },
    buttonOutline:{
        width:"100%",
        //backgroundColor:"#0062cc",
        padding:15,
        marginTop:15,
        borderRadius:10,
        alignItems:"center",
        backgroundColor:"white",
        borderColor:"#0062cc",
        borderWidth:1

    },
    buttonText:{
        color:"white",
        fontWeight:"bold"
    },
    buttonTextOutline:{
        color:"#0062cc",
        fontWeight:"bold"
    }
})
