import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { auth } from '../firebase'

const HomeScreen = ({navigation}) => {

    const handleSignOut =()=>{
        auth.signOut()
        .then(()=>{
            navigation.replace("Login")
        })
    }

    return (
        <View style={styles.container} >
            <Text>Home Screen</Text>
            <Text>{auth.currentUser.email}</Text>
            <View style={styles.buttoncontainer} >
            <TouchableOpacity style={styles.button} onPress={handleSignOut} >
                <Text style={styles.buttonText} >Log Out</Text>
            </TouchableOpacity>

            </View>
            
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    button:{
        width:"100%",
        backgroundColor:"#0062cc",
        padding:15,
        marginTop:15,
        borderRadius:10,
        alignItems:"center",

        
    },
    buttoncontainer:{
        width:"60%",
        alignItems:"center",
        justifyContent:"center",
        marginTop:40
    },
    buttonText:{
        color:"white",
        fontWeight:"bold"
    },
})
