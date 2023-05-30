import { useState } from "react";
import {

    Platform,
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
} from "react-native";
import { useFonts } from "expo-font";
const initialState = {
    email: "",
    password: "",
};

const LoginScreens = ({ navigation }) => {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [state, setState] = useState(initialState);
    const [isInputFocused, setInputFocused] = useState({
        email: false,
        password: false,
    });

    const [fontsLoaded] = useFonts({
        "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    const onShowPassword = () => {
        setIsPasswordHidden(!isPasswordHidden);
    };


    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}

        >

            <TouchableWithoutFeedback
                onPress={() => {

                    setIsShowKeyboard(false);
                }}
            >
                <View style={styles.container}>
                    <ImageBackground
                        style={styles.image}
                        source={require("../assets/images/Photo-BG.jpg")}
                    >
                        <View style={styles.box}>
                            <Text style={styles.title}>Увійти</Text>

                            <TextInput
                                value={state.email}
                                onChangeText={(value) =>
                                    setState((prevState) => ({ ...prevState, email: value }))
                                }
                                onFocus={() => {
                                    setIsShowKeyboard(true);
                                    setInputFocused((prev) => ({ ...prev, email: true }));
                                }}
                                onBlur={() =>
                                    setInputFocused((prev) => ({ ...prev, email: false }))
                                }
                                style={
                                    isInputFocused.email
                                        ? {
                                            ...styles.input,
                                            backgroundColor: "#FFFFFF",
                                            borderColor: "#FF6C00",
                                            marginBottom: 16,
                                        }
                                        : {
                                            ...styles.input,
                                            backgroundColor: "#F6F6F6",
                                            borderColor: "#E8E8E8",
                                            marginBottom: 16,
                                        }
                                }
                                placeholder="Адреса електронної пошти"
                                placeholderTextColor="#BDBDBD"
                                keyboardType="email-address"
                            />
                            <View style={styles.passwordBox}>
                                <TextInput
                                    value={state.password}
                                    onChangeText={(value) =>
                                        setState((prevState) => ({
                                            ...prevState,
                                            password: value,
                                        }))
                                    }
                                    onFocus={() => {
                                        setIsShowKeyboard(true);
                                        setInputFocused((prev) => ({ ...prev, password: true }));
                                    }}
                                    onBlur={() =>
                                        setInputFocused((prev) => ({ ...prev, password: false }))
                                    }
                                    style={
                                        isInputFocused.password
                                            ? {
                                                ...styles.input,
                                                backgroundColor: "#FFFFFF",
                                                borderColor: "#FF6C00",
                                            }
                                            : {
                                                ...styles.input,
                                                backgroundColor: "#F6F6F6",
                                                borderColor: "#E8E8E8",
                                            }
                                    }
                                    placeholder="Пароль"
                                    placeholderTextColor="#BDBDBD"
                                    secureTextEntry={isPasswordHidden}
                                />
                                <TouchableOpacity
                                    style={styles.showButton}
                                    onPress={onShowPassword}
                                >
                                    <Text style={styles.showText}>
                                        {isPasswordHidden ? "Показати" : "Сховати"}
                                    </Text>
                                </TouchableOpacity>
                            </View>


                            <TouchableOpacity style={styles.button} >
                                <Text style={styles.buttonText}>Увійти</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    ...styles.signup,
                                    marginBottom: isShowKeyboard ? -100 : 145,
                                }}
                                onPress={() => navigation.navigate("Registration")}
                            >
                                <Text style={styles.signupText}>
                                    Немає акаунту? Зареєструватися
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};




const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
    },
    box: {

        backgroundColor: "#ffffff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingLeft: 16,
        paddingRight: 16,

    },
    title: {
        fontFamily: "Roboto-Medium",
        fontWeight: 500,
        fontSize: 30,
        lineHeight: 35,
        textAlign: "center",
        letterSpacing: 0.01,
        color: "#212121",
        marginTop: 32,
        marginBottom: 32,
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        fontFamily: "Roboto-Regular",
        color: "#212121",
        paddingLeft: 16,
        paddingTop: 16,
        paddingBottom: 15,
        fontSize: 16,
        lineHeight: 19,

    },
    passwordBox: {
        position: "relative",
    },
    showButton: {
        position: "absolute",
        top: 22,
        right: 16,
    },
    showText: {
        fontFamily: "Roboto-Regular",
        color: "#1B4371",
        fontSize: 16,
        lineHeight: 19,
    },
    button: {
        backgroundColor: "#ff6c00",
        borderRadius: 100,
        marginTop: 43,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 93.5,
        paddingRight: 93.5,
    },
    buttonText: {
        fontFamily: "Roboto-Regular",
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 19,
    },
    signup: {
        marginTop: 16,
        justifyContent: "center",
        flexDirection: "row",
    },

    signupText: {
        fontFamily: "Roboto-Regular",
        color: "#1B4371",
        fontSize: 16,
        lineHeight: 19,
    },
});

export default LoginScreens;