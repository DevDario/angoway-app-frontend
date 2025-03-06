import { SafeAreaView,Text, StyleSheet,View, Alert, TouchableOpacity } from "react-native";
import Input from "../../components/input";
import Button from "../../components/Button";
import { Link } from "expo-router"
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Login(){

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Iniciar Sessão</Text>
                <Text style={styles.headerDescription}>Ainda não tem uma conta ? <Link href={"/auth/signup"} style={styles.highlight}>Criar agora</Link> </Text>
            </View>


            <View style={styles.inputContainer}>
                <View style={styles.phoneInputContainer}>
                    <Text style={styles.inputLabel}>Seu Número</Text>
                    <Input placeholder={"+244"}/>
                </View>

                <View style={styles.passwordInputContainer}>
                    <Text style={styles.inputLabel}>Senha</Text>
                    <Input placeholder={""}
                    />
                </View>

                <View style={styles.buttonContainer}>
                        <Link href={"/routes"}>
                            <Button text={"Entrar"}
                                    style={styles.loginButton}/>
                        </Link>
                </View>

            </View>


            <View style={styles.footerButtons}>
                <Text>Ou</Text>

                <Link href={"/routes"}>
                <Button text={"Entrar com Facebook"}
                            icon={faFacebook}
                            style={styles.optionLoginButton}
                        />
                </Link>

                <Link href={"/routes"}>
                <Button text={"Entrar com Google"}
                            icon={faGoogle}
                            style={styles.optionLoginButton}
                        />
                </Link>
            </View>

        </SafeAreaView>
    )
}

export const styles = StyleSheet.create({
    header:{
        paddingTop:20,
        paddingBottom:50,
        paddingLeft:40
    },
    headerTitle:{
        fontSize:25,
        fontWeight:"700"
    },
    headerDescription:{
        fontSize:16,
        fontWeight:"200",
        paddingTop:15
    },
    container:{
        flex:1,
        paddingTop:20,
    },
    inputContainer:{
        width:"100%",
        gap:50,
        paddingLeft:40
    },
    inputLabel:{
        fontSize:15,
        color:"#ACACAC"
    },
    phoneInputContainer:{
        gap:18,
        justifyContent:"flex-start",
        alignItems:"flex-start"
    },
    passwordInputContainer:{
        gap:18,
        justifyContent:"flex-start",
        alignItems:"flex-start"
    },
    buttonContainer:{
        paddingTop:10,
        alignItems:"flex-end",
        paddingRight:90
    },
    loginButton:{
        width:173
    },
    highlight:{
        color:"#0C6DFF",
        fontWeight:"700"
    },
    footerButtons:{
        width:"100%",
        paddingTop:40,
        gap:20,
        alignItems:"center"
    },
    optionLoginButton:{
        width:300
    }
})