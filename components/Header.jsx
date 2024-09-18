import { Text, View, StyleSheet } from "react-native"
export default function Header(){
    return(
        <>
            <View style={styles.header}>
                <Text style={styles.greetingText}>Welcome Back, Berktug!</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header:{
        display:"flex",
        margin:16
    },
    greetingText:{
        fontWeight:"bold",
        fontSize:"24"
    }
})