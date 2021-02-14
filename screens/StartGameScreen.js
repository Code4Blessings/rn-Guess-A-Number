//See ReadMe for logic explanation

import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Button, 
    TouchableWithoutFeedback, 
    Keyboard, 
    Alert 
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import Colors from '../constants/colors';


const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] =useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number', 'The number must be between 1 and 99', [{ text: 'OK', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
    };

    let confirmedOutput;

    if(confirmed) {
        confirmedOutput = (
            <Card style={styles.numberCard}>
                <Text>You Selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start A New Game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select A Number</Text>
                    <Input 
                        style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        keyboardType='number-pad' maxLength={2}
                        onChangeText={numberInputHandler} 
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttons}>
                            <Button 
                                title='Reset' 
                                onPress={resetInputHandler} 
                                color={Colors.primary} 
                            />
                        </View>
                        <View styles={styles.buttons}>
                            <Button
                            title='Confirm' 
                            onPress={confirmInputHandler} 
                            color={Colors.secondary}
                            />
                        </View> 
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
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
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    numberCard: {
        marginTop: 20
    }
});

export default StartGameScreen;