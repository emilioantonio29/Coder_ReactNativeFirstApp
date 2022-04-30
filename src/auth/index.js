import React from 'react';
import { StyleSheet, View, Text, Button, KeyboardAvoidingView, TextInput, Animated, Dimensions, TouchableOpacity, Image, ActivityIndicator, Modal, Alert} from 'react-native';
import { Form, FormItem, Label, Picker  } from 'react-native-form-component';
import { styles } from './styles';
const {width, height} = Dimensions.get('window')
import { colors } from '../constants/themes';
import SweetAlert from 'react-native-sweet-alert';
import { useSelector, connect, useDispatch } from 'react-redux';
import { AuthSignIn, AuthSignUp } from '../store/reducers/auth.reducer';
import { ShowLoading } from '../store/reducers/loading.reducer';
import AwesomeLoading from 'react-native-awesome-loading';
import Loading from '../loading';
import { GlobalContext } from "../context";
import validator from '../utils/validator';
import { URL_API, URL_AUTH_SIGNUP, URL_AUTH_SIGNIN } from '../utils/database';
import AwesomeAlert from 'react-native-awesome-alerts';

const Auth = ({natigation, route}) => {
    const [text, onChangeText] = React.useState("");
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [number, setNumber] = React.useState(1);
    const fadeAnim = React.useRef(new Animated.Value(0)).current  // Initial 
    const [loginBool, setLoginBool] = React.useState(true);
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = React.useState(true);
    const [handleLoading, setHandleLoading] = React.useState(false)
    const [msgEmail, setMsgEmail] = React.useState(true)
    const [msgPassword, setMsgPassword] = React.useState("")
    const [state, setState] = React.useState(true)
    const [showAlert, setShowAlert] = React.useState(false)
    
    const [showLoading, setShowLoading] = React.useState(false);
    //useSelector(state=>state.loading).then((data)=>setHandleLoading(data.loading))

    //useSelector(state=>state.auth).then((data)=>{console.log("data", data)})


    React.useEffect(() => {
        setMsgEmail("")
        setMsgPassword("")
        Animated.timing(
        fadeAnim,
        {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }
        ).start();
    }, [fadeAnim, loginBool])

    const wipeForm = () => {
        setMsgEmail("")
        setMsgPassword("")
        setEmail("");
        setPassword("")
    }

    const handleSubmit = (email, password, form) =>{
        setMsgEmail("")
        setMsgPassword("")
        
        const validateEmail = validator("email", email).error;
        const validatePassword = validator("password", password).error;

        if(validateEmail !== "" || validatePassword !== ""){
            return (setMsgEmail(validateEmail), setMsgPassword(validatePassword))
        }        

        if(!form){
            setShowLoading(true)
            fetch(`${URL_AUTH_SIGNUP}`,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password, returnSecureToken: true})
            })
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                data.error ? setMsgEmail("El email ya se encuentra registrado") : 
                data.idToken ? (setShowAlert(true), wipeForm(), setLoginBool(true)) : console.log("Respuesta inesperada")
            })
            .catch((err)=>{
                alert("error")
            }).finally(()=>{
                setShowLoading(false)
            })
        }else{
            setShowLoading(true)
            fetch(`${URL_AUTH_SIGNIN}`,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })
            .then((res)=>{
                console.log("res", res)
                return res.json()
            })
            .then((data)=>{
                console.log("data", data)
                data.error ? setMsgEmail("Nombre de usuario o contraseña incorrecta") : 
                data.idToken ? (wipeForm(), dispatch(AuthSignIn({payload: {token:data.idToken, user:data.email}}))) : 
                console.log("Respuesta inesperada")
            })
            .catch((err)=>{
                alert("error")
            }).finally(()=>{
                setShowLoading(false)
            })



            //dispatch(AuthSignIn({payload: "token"}))
        }
        
        //dispatch(AuthSignIn({payload: {email, password}}))
        
        //setHandleLoading(true)
        // setTimeout(() => {
        //     dispatch(ShowLoading({payload: false}))
        // }, 3000);
        //console.log(handleLocalLoading)
    }

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Continuar",
          style: "destructive",
        },
      ],
      {
        cancelable: true
      }
    );




    return(
        
        /*<KeyboardAvoidingView style={styles.container}
            behavior="position"
            //keyboardVerticalOffset={50}
            //enabled
            >
            <View style={styles.containerCard}>
                <Text style={styles.formTitle}>Auth</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
            </View>
        </KeyboardAvoidingView>*/

    <View style={styles.container}>

        {/* <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} /> */}
        {/* <ActivityIndicator size="large"></ActivityIndicator> */}
        {/* <AwesomeLoading style={{backgroundColor: 'white', opacity: 0.7}} indicatorId={1} size={200} isActive={true} text="loading" /> */}
        {showLoading ? <Loading></Loading> : null}
        <View>
            <Image style={{resizeMode: 'contain', width:width/1.5, height:height/5}} source={require("../../assets/images/logo.png")}></Image>
            {/* <Text>{handleLocalLoading ? "true" : "false"}</Text> */}
        </View>
        
        {loginBool ? 
                <Animated.View          
                    style={{
                        opacity: fadeAnim,
                        width: width/1.4        
                    }}
                    >
                    <Form 
                        buttonStyle={{color: "red", backgroundColor: colors.buttonAuth}}
                        buttonTextStyle={{color: colors.authSubmitColor}}
                        buttonText="Inicia sesión"
                        onButtonPress={() => 
                            email == "" && password == "" ? (setMsgEmail("* Por favor introduce un email"), setMsgPassword("* Por favor introduce una contraseña")) :
                            email == "" ? (setMsgEmail("* Por favor introduce un email"), setMsgPassword("")) :
                            password == "" ? (setMsgPassword("* Por favor introduce una contraseña"), setMsgEmail("")) :
                            handleSubmit(email, password, true)
                        }
                            
                            
                        //     email == "" || password == "" ? 
                        // (setMsgEmail("* Por favor introduce un email"), setMsgPassword("* Por favor introduce una contraseña")) 
                        // : 
                        // handleSubmit(email, password, true)}
                        
                        >
                        <View style={{marginTop: 20}}>
                            <FormItem
                                textInputStyle={{color:"black", borderColor: "black"}}
                                underneathTextStyle={{color:colors.authError}}
                                errorBorderColor={colors.authError}
                                label={`Email`}
                                labelStyle={{color:colors.buttonAuth}}
                                //isRequired={msgEmail}
                                value={email}
                                onChangeText={(email) => (setEmail(email))}
                                //asterik={false}
                                //showErrorIcon={true}
                                //underneathText={test()}
                                //customValidation={()=>{{status:false, message: "test"}}}
                                placeholder="user@test.com"

                            />
                            <Text style={{marginTop: -20, marginStart:5, color:colors.authError}}>{msgEmail}</Text>
                        </View>
                        <View style={{marginTop: 20}}>
                            <FormItem
                                textInputStyle={{color:"black", borderColor: "black"}}
                                underneathTextStyle={{color:colors.authError}}
                                errorBorderColor={colors.authError}
                                label="Password"
                                labelStyle={{color:colors.buttonAuth}}
                                //isRequired
                                value={password}
                                onChangeText={(email) => setPassword(email)}
                                asterik={false}
                                showErrorIcon={false}
                                placeholder="123456"
                            />
                            <Text style={{marginTop: -20, marginStart:5, color:colors.authError}}>{msgPassword}</Text>

                        </View>
                    </Form>
                    <TouchableOpacity 
                        style={{alignItems:"center"}}
                        onPress={()=>{setLoginBool(!loginBool)}}
                        >
                        <Text style={{color:colors.authTouchableColor}}>REGISTRO</Text>
                    </TouchableOpacity>
                </Animated.View>
            :
                <Animated.View          
                    style={{
                        opacity: fadeAnim,
                        width: width/1.4        
                    }}
                    >
                    <Form 
                        buttonStyle={{color: "red", backgroundColor: colors.buttonAuth}}
                        buttonTextStyle={{color: colors.authSubmitColor}}
                        buttonText="Registrate"
                        onButtonPress={() => 
                            email == "" && password == "" ? (setMsgEmail("* Por favor introduce un email"), setMsgPassword("* Por favor introduce una contraseña")) :
                            email == "" ? (setMsgEmail("* Por favor introduce un email"), setMsgPassword("")) :
                            password == "" ? (setMsgPassword("* Por favor introduce una contraseña"), setMsgEmail("")) :
                            handleSubmit(email, password, false)
                        }>
                        <View style={{marginTop: 20}}>
                            <FormItem
                                textInputStyle={{color:"black", borderColor: "black"}}
                                underneathTextStyle={{color:colors.authError}}
                                errorBorderColor={colors.authError}
                                label="Email"
                                labelStyle={{color:colors.buttonAuth}}
                                value={email}
                                onChangeText={(email) => setEmail(email)}
                                asterik={false}
                                showErrorIcon={false}
                                placeholder="user@test.com"
                            />
                            <Text style={{marginTop: -20, marginStart:5, color:colors.authError}}>{msgEmail}</Text>
                        </View>
                        <View style={{marginTop: 20}}>
                            <FormItem
                                textInputStyle={{color:"black", borderColor: "black"}}
                                underneathTextStyle={{color:colors.authError}}
                                errorBorderColor={colors.authError}
                                label="Password"
                                labelStyle={{color:colors.buttonAuth}}
                                value={password}
                                onChangeText={(email) => setPassword(email)}
                                placeholder="123456"
                            />
                            <Text style={{marginTop: -20, marginStart:5, color:colors.authError}}>{msgPassword}</Text>
                        </View>
                    </Form>
                    <TouchableOpacity 
                        style={{alignItems:"center"}}
                        onPress={()=>{setLoginBool(!loginBool)}}
                        >
                        <Text style={{color:colors.authTouchableColor}}>INICIO DE SESION</Text>
                    </TouchableOpacity>
                </Animated.View>
        }

        <View style={styles.container}>

            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="Registro completado con exito"
                //message="I have a message for you!"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                // showCancelButton={true}
                showConfirmButton={true}
                cancelText="No, cancel"
                confirmText="CONTINUAR"
                confirmButtonColor={colors.buttonAuth}
                onCancelPressed={() => {
                    setShowAlert(true);
                }}
                onConfirmPressed={() => {
                    setShowAlert(false);
                }}
            />
        </View>

    </View>
    )
}



export default connect()(Auth);