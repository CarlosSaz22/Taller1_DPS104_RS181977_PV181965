import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import colors from '../utils/colors';

export default function Form(props) {

    const { setNumero1, setNumero2, setNumero3, setNumero4 } = props;
    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput
                    placeholder="Número 1"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={(e) => setNumero1(e.nativeEvent.text)}
                />

            </View>
            <TextInput
                placeholder="Número 2"
                keyboardType="numeric"
                style={[styles.input, styles.inputPercentage]}
                onChange={(e) => setNumero2(e.nativeEvent.text)}
            />

            <TextInput
                placeholder="Número 3"
                keyboardType="numeric"
                style={[styles.input, styles.inputPercentage]}
                onChange={(e) => setNumero3(e.nativeEvent.text)}
            />

            <TextInput
                placeholder="Número 4"
                keyboardType="numeric"
                style={[styles.input, styles.inputPercentage]}
                onChange={(e) => setNumero4(e.nativeEvent.text)}
            />

        </View>
    );

}
const styles = StyleSheet.create({
    viewForm: {
        position: 'relative',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center',
        margin:20,
    },
    viewInputs: {
        flexDirection: 'row',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '100%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20,
    },
    inputPercentage: {
        width: '100%',
        marginLeft: -5,
    },
});



