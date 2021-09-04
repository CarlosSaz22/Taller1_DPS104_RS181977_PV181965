import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Result(props) {
    const { numero1,numero2,numero3,numero4, total, errorMessage } = props;
    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>RESUMEN DE SUELDO</Text>
                   
                   
                    <DataResult title="Números ingresados: " value={`${numero1},${numero2},${numero3},${numero4} `} />

                    <DataResult title="Máximo" value={`${total.maxi} `} />
                     <DataResult title="Mínimo" value={`${total.mini} `} />

                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}

function DataResult(props) {
    const { title, value } = props;
    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 40,
    },
    boxResult: {
        padding: 30,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
    },
});