import React from 'react';
import {View, Text, KeyboardAvoidingView, TextInput, Animated, Dimensions, TouchableOpacity, Image} from 'react-native';
import { Form, FormItem, Label, Modal, Picker  } from 'react-native-form-component';
import { styles } from './styles';
const {width, height} = Dimensions.get('window')
import { colors } from '../constants/themes';


const Auth = ({natigation}) => {
    const [text, onChangeText] = React.useState("");
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [number, setNumber] = React.useState(1);
    const fadeAnim = React.useRef(new Animated.Value(0)).current  // Initial 
    const [loginBool, setLoginBool] = React.useState(true);


    
    React.useEffect(() => {
        Animated.timing(
        fadeAnim,
        {
            toValue: 1,
            duration: 1000,
        }
        ).start();
    }, [fadeAnim, loginBool])
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
        <View>
            <Image style={{resizeMode: 'contain', width:width/1.5, height:height/5}} source={require("../../assets/images/logo.png")}></Image>
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
                        onButtonPress={() => console.warn('do something')}>
                        <FormItem
                            textInputStyle={{color:"black", borderColor: "black"}}
                            underneathTextStyle={{color:colors.authError}}
                            errorBorderColor={colors.authError}
                            label="Email"
                            labelStyle={{color:colors.buttonAuth}}
                            isRequired
                            value={email}
                            onChangeText={(email) => setEmail(email)}
                            asterik={false}
                            showErrorIcon={false}
                            
                        />
                        <FormItem
                            textInputStyle={{color:"black", borderColor: "black"}}
                            underneathTextStyle={{color:colors.authError}}
                            errorBorderColor={colors.authError}
                            label="Password"
                            labelStyle={{color:colors.buttonAuth}}
                            isRequired
                            value={password}
                            onChangeText={(email) => setPassword(email)}
                            asterik={false}
                            showErrorIcon={false}
                        />
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
                        onButtonPress={() => console.warn('do something')}>
                        <FormItem
                            textInputStyle={{color:"black", borderColor: "black"}}
                            underneathTextStyle={{color:colors.authError}}
                            errorBorderColor={colors.authError}
                            label="Email"
                            labelStyle={{color:colors.buttonAuth}}
                            isRequired
                            value={email}
                            onChangeText={(email) => setEmail(email)}
                            asterik={false}
                            showErrorIcon={false}
                        />
                        <FormItem
                            textInputStyle={{color:"black", borderColor: "black"}}
                            underneathTextStyle={{color:colors.authError}}
                            errorBorderColor={colors.authError}
                            label="Password"
                            labelStyle={{color:colors.buttonAuth}}
                            isRequired
                            value={password}
                            onChangeText={(email) => setPassword(email)}
                            asterik={false}
                            showErrorIcon={false}
                        />
                    </Form>
                    <TouchableOpacity 
                        style={{alignItems:"center"}}
                        onPress={()=>{setLoginBool(!loginBool)}}
                        >
                        <Text style={{color:colors.authTouchableColor}}>INICIO DE SESION</Text>
                    </TouchableOpacity>
                </Animated.View>
        }



    </View>
    )
}



export default Auth;