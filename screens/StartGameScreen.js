import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import Card from '../components/Card';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start A New Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select A Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttons}>
                        <Button title='Reset' onPress={() => {}} color='#f7287b'/>
                    </View>
                    <View styles={styles.buttons}>
                        <Button  title='Confirm' onPress={() => {}} color='green' />
                    </View> 
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    buttons: {
       width: 100
    }
});

export default StartGameScreen;