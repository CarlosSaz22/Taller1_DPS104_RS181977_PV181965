/**
* @format
* @flow strict-local
*/
import React from 'react';
import { useState,useEffect } from 'react';
import {
 SafeAreaView,
 StyleSheet,
 View,
 Text,
 statusbar
} from 'react-native';

import colors from './src/utils/colors';
import Form from './src/components/Forms';
import Footer from './src/components/Footer';
import Result  from './src/components/Result';
import { StatusBar } from 'react-native';
export default function App(){
  const [num1,setNum1]=useState(null);
  const [num2,setNum2]=useState(null);
  const [num3,setNum3]=useState(null);
  const [total,setTotal]=useState(null);
  const [errorMessage,setErrorMessage]=useState("");

  useEffect(() => {
    if (num1 && num2 && num3) calculate();
    else reset();
    }, [num1, num2,num3]);
    const calculate = () => {
    reset();
    if (!num1.trim()) {
      setErrorMessage('Añade el primer valor');
      } else if (!num2.trim()) {
      setErrorMessage('Añade el segundo valor');
    } else if (!num3.trim()) {
      setErrorMessage('Añade el tercer valor');
      }else {

      const x1=(-num2+Math.sqrt(Math.pow(num2,2)-(4*num1*num3)))/(2*num1);
      const x2=(-num2-Math.sqrt(Math.pow(num2,2)-(4*num1*num3)))/(2*num1);

      
      setTotal({
      new_x1:x1.toFixed(2).replace('.', ','),
      new_x2:x2.toFixed(2).replace('.', ','),

      });
      }
      };
      const reset = () => {
      setErrorMessage('');
      setTotal(null);
      };
     
   
return(
 <>
<StatusBar barStyle="light-content"/>
 <SafeAreaView style={styles.Header}>


<Form 
setNum1={setNum1}
setNum2={setNum2}
setNum3={setNum3}

/>
 </SafeAreaView>
 <Result
 num1={num1}
 num2={num2}
 num3={num3} 
 total={total}
 errorMessage={errorMessage}
 />

<Footer></Footer>
 </>
);
}
const styles = StyleSheet.create({
 Header:{
 backgroundColor:colors.PRIMARY_COLOR,
 height:200,
 borderBottomLeftRadius:30,
 borderBottomRightRadius:30,
 alignItems:'center'
 },
 HeadApp: {
  fontSize:25,
  fontWeight:'bold',
  color:'#fff',
  margin:15,
 },
})