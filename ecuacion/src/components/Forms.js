import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import colors from '../utils/colors';
export default function Form(props) {
 const {setNum1, setNum2,setNum3} = props;
 return (
     
 <View style={styles.viewForm}>
 <View style={styles.viewInputs}>
 <TextInput
 placeholder="Número 1 (A)"
 keyboardType="numeric"
 style={styles.input}
 onChange={(e) => setNum1(e.nativeEvent.text)}
 />

 </View>
 <TextInput
 placeholder="Número 2 (B)"
 keyboardType="numeric"
 style={[styles.input, styles.inputPercentage]}
 onChange={(e) => setNum2(e.nativeEvent.text)}
 />
  <TextInput
 placeholder="Número 3 (C)"
 keyboardType="numeric"
 style={[styles.input, styles.inputPercentage]}
 onChange={(e) => setNum3(e.nativeEvent.text)}
 />
 </View>
 );
}
const styles = StyleSheet.create({
 viewForm: {
 position: 'absolute',
 bottom: 0,
 width: '100%',
 paddingHorizontal: 50,
 backgroundColor: colors.PRIMARY_COLOR_DARK,
 borderRadius: 30,
 height: 200,
 justifyContent: 'center',
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



