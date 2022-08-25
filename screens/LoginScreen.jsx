import { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import routes from '../routes';

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 

    return (
        <View style={styles.container}>
            <Text style = {styles.title} >Login</Text>
            <TextInput
                label="Username"
                mode="outlined"
                style={styles.textInput}
                value={username}
                onChangeText={text => setUsername(text)}
            />
            <TextInput
                label="Pasword"
                mode="outlined"
                style={styles.textInput}
                value={password}
                onChangeText={password => setPassword(password)}
            />
            <View style={styles.buttons}>
                <Button
                    mode="text"
                    style={styles.resetButton}
                    onPress={() => {
                        setUsername('');
                        setPassword('');
                    }}
                >
                    Reset
                </Button>
                <Button
                    icon="key"
                    mode="contained"
                    style={styles.loginButton}
                    onPress={() => {
                        navigation.navigate(routes.Book);
                    }}
                >
                    Login
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    title: {
        textAlign: "center",
        marginVertical: 28,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textInput: {
        marginBottom: 16,
        marginHorizontal: 23,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 1.25 
    },
    resetButton: {
        alignSelf: 'flex-start',
        color: "#6200EE",
        marginLeft: 12,
    },
    loginButton: {
        alignSelf: 'flex-end',
        marginRight: 23,
    },

});