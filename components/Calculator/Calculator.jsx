import React from "react";
import { Text, View, StyleSheet, backgroundColor, color, width, height, borderWidth, paddingTop, display,flexDirection, justifyContent, alignItems, borderColor, textAlign } from "react-native";
import Buttons from "../Buttons/Buttons";

function Calculator(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.h1}>Calculadora</Text>
            </View>
            <View style={styles.visor}>
                <Text style={styles.fontNumbers}>0</Text>
            </View>
            <View style={styles.row}>
                <Buttons>AC</Buttons>
                <Buttons>DEL</Buttons>
                <Buttons>%</Buttons>
                <Buttons>/</Buttons>

            </View>
            <View style={styles.row}>
                <Buttons>1</Buttons>
                <Buttons>2</Buttons>
                <Buttons>3</Buttons>
                <Buttons>*</Buttons>

            </View>
            <View style={styles.row}>
                <Buttons>4</Buttons>
                <Buttons>5</Buttons>
                <Buttons>6</Buttons>
                <Buttons>-</Buttons>

            </View>
            <View style={styles.row}>
                <Buttons>7</Buttons>
                <Buttons>8</Buttons>
                <Buttons>9</Buttons>
                <Buttons>+</Buttons>

            </View>
            <View style={styles.row}>
                <Buttons>0</Buttons>
                <Buttons>.</Buttons>
                <Buttons>+/-</Buttons>
                <Buttons>=</Buttons>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    h1 : {
        fontFamily : 'Roboto',
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        paddingBottom: 40
    },

    container :{
        backgroundColor: '#3a465c',
        width: 400,
        height: 900,
        borderWidth: 10,
        borderColor: '#3a465c',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 100
    },

    visor: {
        backgroundColor: '#2d3645',
        color: 'white',
        width: 400,
        height: 100,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderWidth: 15,
        borderColor: '#2d3645',
        fontSize: 24,
    },

    fontNumbers: {
        fontFamily : 'Roboto',
        fontSize: 24,
        color: 'white',
    },

    row: {
        display: 'flex',
        flexDirection: 'row'
    },

    acButton: {
        width: 100,
        height: 50
    }


})

export default Calculator