import { useState } from "react";
import {
    Platform,
    Text,
    TextInput,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
} from "react-native";
import { useFonts } from "expo-font";


const initialState = {
    login: "",
    email: "",
    password: "",
};

const RegistrationScreen = ({ navigation }) => {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [state, setState] = useState(initialState);

    const [isInputFocused, setInputFocused] = useState({
        login: false,
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
                            <View style={styles.photoBox}>

                                <>
                                    <Image style={styles.avatar} />
                                    <TouchableOpacity
                                        style={styles.photoIconRemove}

                                    >
                                        <Image source={require("../assets/remove.png")} />
                                    </TouchableOpacity>
                                </>

                                <TouchableOpacity
                                    style={styles.photoIconAdd}

                                >
                                    <Image source={require("../assets/add.png")} />
                                </TouchableOpacity>

                            </View>
                            <Text style={styles.title}>Реєстрація</Text>

                            <TextInput
                                value={state.login}
                                onChangeText={(value) =>
                                    setState((prevState) => ({ ...prevState, login: value }))
                                }
                                onFocus={() => {
                                    setIsShowKeyboard(true);
                                    setInputFocused((prev) => ({ ...prev, login: true }));
                                }}
                                onBlur={() => {
                                    setInputFocused((prev) => ({ ...prev, login: false }));
                                }}
                                style={
                                    isInputFocused.login
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
                                placeholder="Логін"
                                placeholderTextColor="#BDBDBD"
                            />
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
                                <Text style={styles.buttonText}>Зареєстуватися</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    ...styles.login,
                                    marginBottom: isShowKeyboard ? -100 : 45,
                                }}
                                onPress={() => navigation.navigate("Log in")}
                            >
                                <Text style={styles.loginText}>
                                    Вже є акаунт? Увійти
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
        position: "relative",
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingLeft: 16,
        paddingRight: 16,
    },
    photoBox: {
        position: "absolute",
        top: -60,
        left: 131,
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    },
    photoIconAdd: {
        position: "absolute",
        bottom: 14,
        right: -12,
    },
    photoIconRemove: {
        position: "absolute",
        bottom: 8.82,
        right: -17.18,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 16,
    },
    title: {
        fontFamily: "Roboto-Medium",
        fontWeight: 500,
        fontSize: 30,
        lineHeight: 35,
        textAlign: "center",
        letterSpacing: 0.01,
        color: "#212121",
        marginTop: 92,
        marginBottom: 33,
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
    login: {
        marginTop: 16,
    },
    loginText: {
        fontFamily: "Roboto-Regular",
        color: "#1B4371",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 19,
    },
});

export default RegistrationScreen;