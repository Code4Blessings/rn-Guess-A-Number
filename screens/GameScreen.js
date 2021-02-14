import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min) + min);
    if(rndNum == exclude) {
        return generateRandomBetween(min, max, exclude);
    }else {
        return rndNum;
    }
}

const GameScreen = props => {
    const [] = useState();
    return( 
        <View style={styles}>
        
        </View>
    )
};

const styles = StyleSheet.create({
    
});

export default GameScreen;
