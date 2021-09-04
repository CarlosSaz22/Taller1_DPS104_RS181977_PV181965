/**
* @format
* @flow strict-local
*/
import React from 'react';
import { useState, useEffect } from 'react';
import { SafeAreaView,StyleSheet,View,Text,statusbar, ScrollView} from 'react-native';

import colors from './src/utils/colors';
import Form from './src/components/Forms';
import Footer from './src/components/Footer';
import Result from './src/components/Result';
import { StatusBar } from 'react-native';
export default function App() {

 
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const [numero1,setNumero1] = useState(null);
  const [numero2,setNumero2] = useState(null);
  const [numero3,setNumero3] = useState(null);
  const [numero4,setNumero4] = useState(null);

  const [mensajeMax, setMensajeMax] = useState("");
  const [mensajeMin, setMensajeMin] = useState("");

 useEffect(() => {
    if (numero1 && numero2 && numero3  && numero4) calculate();
    else reset();
  }, [numero1,numero2,numero3,numero4]);

  const calculate = () => {
    reset();


    let regg = /^([0-9])+$/;

   if (numero1.trim() <=0 || numero2.trim() <=0 || numero3.trim() <=0 || numero4.trim() <=0) {
      setErrorMessage('No pueden haber números negativos o 0 en los valores que ingresa. ');
    } else if(!regg.test(numero1) || !regg.test(numero2) || !regg.test(numero3)  || !regg.test(numero4)){

      setErrorMessage('No puede ingresar números decimales, SOLO ENTEROS. ');
    }else { 

      const arregloNumeros =[numero1,numero2,numero3,numero4];

      const maximo = Math.max(...arregloNumeros);
      const minimo = Math.min(...arregloNumeros);
      

      if(minimo>10){
        const nuevoMax = maximo + 10;
       setMensajeMax('Mínimo mayor a 10, se le suma 10 al máximo, el nuevo maximo es: ' + nuevoMax);
      }
      if(maximo<50){
        const nuevoMin = minimo - 5;
       setMensajeMin('Máximo menor a 50, se le resta 5 al mínimo, el nuevo mínimo es: ' + nuevoMin);
      }

      setTotal({
       maxi:maximo,
       mini:minimo
      }); 
    }
  };


  const reset = () => {
    setErrorMessage('');
    setMensajeMax('');
    setMensajeMin('');
    setTotal(null);
  };


  return (
   
    <>
    <ScrollView>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.Header}>
        <Text style={styles.HeadApp}>Calcular mayor y menor </Text>
        <Form
          
          setNumero1={setNumero1}
          setNumero2={setNumero2}
          setNumero3={setNumero3}
          setNumero4={setNumero4}

        />
      </SafeAreaView>
      <Result
        numero1={numero1}
        numero2={numero2}
        numero3={numero3}
        numero4={numero4}
        total={total}
        errorMessage={errorMessage}
        mensajeMax={mensajeMax}
        mensajeMin={mensajeMin}
      />

      <Footer></Footer>
      </ScrollView>
    </>
  
  );
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    
  },
  HeadApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    margin: 15,
    position: 'relative',
  },
})