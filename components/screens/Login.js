import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import db, { initDatabase } from "../sqlite/SQLite";

export const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigation = useNavigation();

    function validateInputs() {
        if (name.length < 3) {
            Alert.alert("Error", "Name must be at least 3 characters long", [{ text: "Okay" }]);
            return false;
        }
        const [localPart, domainPart] = email.split('@');
        if (!domainPart || localPart.length === 0 || domainPart.length === 0) {
            Alert.alert("Error", "Invalid email format", [{ text: "Okay" }]);
            return false;
        }
        return true;
    }

    function loginUser() {
        if (!validateInputs()) {
            return;
        }

        db.transaction(tx => {
            tx.executeSql(
                "SELECT * FROM credentials WHERE name = ? AND email = ?",
                [name, email],
                (_, results) => {
                    if (results.rows.length > 0) {
                        Alert.alert(
                            "Login Successful",
                            "Welcome back!",
                            [{ text: "Okay" }]
                        );
                        navigation.navigate('Navbar');
                    } else {
                        Alert.alert(
                            "User Not Found",
                            "No user with the provided details exists. Would you like to register?",
                            [
                                { text: "Yes", onPress: registerUser },
                                { text: "No" }
                            ]
                        );
                    }
                },
                error => {
                    console.error("Error checking existing user:", error);
                    Alert.alert("Database Error", "Failed to check existing user. Please try again later.", [{ text: "Okay" }]);
                }
            );
        });
    }

    function registerUser() {
        if (!validateInputs()) {
            return;
        }

        db.transaction(tx => {
            tx.executeSql(
                "INSERT INTO credentials (name, email) VALUES (?, ?)",
                [name, email],
                (_, results) => {
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            "Registration Successful",
                            "User registered successfully. You can now log in.",
                            [{ text: "Okay" }]
                        );
                    } else {
                        Alert.alert(
                            "Registration Failed",
                            "Failed to register user. Please try again later.",
                            [{ text: "Okay" }]
                        );
                    }
                },
                error => {
                    console.error("Error registering user:", error);
                    Alert.alert("Database Error", "Failed to register user. Please try again later.", [{ text: "Okay" }]);
                }
            );
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Login/Register</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Enter name"
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Enter email"
                onChangeText={(text) => setEmail(text)}
            />
            <Pressable style={styles.buttonStyle} onPress={loginUser}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: '#06133b',
    },
    headingText: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 60,
        color: 'white',
    },
    textInput: {
        width: "80%",
        height: 40,
        backgroundColor: '#333',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: 'white',
    },
    buttonStyle: {
        width: "80%",
        backgroundColor: '#e44d26',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: 'white',
    },
});

export default Login;
