import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default function Result(props) {
 const {num1,num2,num3, total, errorMessage} = props;
 return (
 <View style={styles.content}>
 {total && (
     <View style={styles.boxResult}>
     <Text style={styles.title}>Resultados de la ecuación cuadrática</Text>
     <DataResult title="A:" value={`${num1} `} />
     <DataResult title="B:" value={`${num2} `} />
     <DataResult title="C:" value={`${num3} `} />
     <DataResult title="X1:" value={`${total.new_x1} `} />
     <DataResult title="X2:" value={`${total.new_x2} `} />

  
    
     </View>
     )}
     <View>
     <Text style={styles.error}>{errorMessage}</Text>
     </View>
     </View>
     );
    }
    function DataResult(props) {
     const {title, value} = props;
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