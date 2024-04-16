import React, { useEffect, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import db, { initDatabase } from "../sqlite/SQLite";

export const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
        try {
            initDatabase(db);
        } catch (error) {
            console.error("Error initializing database:", error);
            Alert.alert("Database Error", "Failed to initialize the database. Please try again later.", [{ text: "Okay" }]);
        }
    }, []);

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

    function saveTaskHandler() {
        if (!validateInputs()) {
            return;
        }

        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM credentials WHERE name = ? AND email = ?",
                [name, email],
                (_, results) => {
                    if (results.rows.length > 0) {
                        Alert.alert(
                            "User Exists",
                            "User with the provided details already exists.",
                            [{ text: "Okay" }]
                        );
                        navigation.navigate('Navbar');
                    } 
                    else 
                    {
                        Alert.alert(
                            "User DOES NOT Exists",
                            "User with the provided details does not exists.",
                            [{ text: "Okay" }]
                        )
                        // User does not exist, proceed to save
                        tx.executeSql(
                            "INSERT INTO credentials (name, email) VALUES (?, ?)",
                            [name, email],
                            (_, insertResults) => {
                                if (insertResults.rowsAffected > 0) {
                                    Alert.alert(
                                        "User Saved",
                                        "User details have been saved successfully.",
                                        [{ text: "Okay" }]
                                    );
                                    console.log("User saved successfully.");
                                    navigation.navigate('Navbar');
                                } else {
                                    Alert.alert(
                                        "User Saving Failed",
                                        "There was an error saving user details.",
                                        [{ text: "Okay" }]
                                    );
                                    console.log("Failed to save user details.");
                                }
                            },
                            (error) => {
                                console.error("Error saving user details:", error);
                                // Handle insert error, such as displaying an error message to the user
                                Alert.alert("Database Error", "Failed to save user details. Please try again later.", [{ text: "Okay" }]);
                            }
                        );
                    }
                },
                (error) => {
                    console.error("Error checking existing user:", error._error);
                    // Handle select error, such as displaying an error message to the user
                    Alert.alert("Database Error", "Failed to check existing user. Please try again later.", [{ text: "Okay" }]);
                }
            );
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Register/Login</Text>
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
            <Pressable style={styles.buttonStyle} onPress={saveTaskHandler}>
                <Text style={styles.buttonText}>Save</Text>
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
