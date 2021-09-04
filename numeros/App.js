/**
* @format
* @flow strict-local
*/
import React from 'react';
import { useState, useEffect } from 'react';
import { SafeAreaView,StyleSheet,View,Text,statusbar} from 'react-native';

import colors from './src/utils/colors';
import Form from './src/components/Forms';
import Footer from './src/components/Footer';
import Result from './src/components/Result';
import { StatusBar } from 'react-native';
export default function App() {

 /* const [nombre, setNombre] = useState(null);
  const [sueldo, setSueldo] = useState(null);*/
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const [numero1,setNumero1] = useState(null);
  const [numero2,setNumero2] = useState(null);
  const [numero3,setNumero3] = useState(null);
  const [numero4,setNumero4] = useState(null);

 useEffect(() => {
    if (numero1 && numero2 && numero3  && numero4) calculate();
    else reset();
  }, [numero1,numero2,numero3,numero4]);

  const calculate = () => {
    reset();

   /* if (!nombre.trim()) {
      setErrorMessage('Añade el nombre ');
    } else if (!sueldo.trim()) {
      setErrorMessage('Añade el sueldo base');
    } else if (sueldo <= 0) {
      setErrorMessage('El sueldo debe ser mayor a 0');
    } else { */

     /* const AFP = sueldo * 0.04;
      const ISSS = sueldo * 0.03;
      const RENTA = sueldo * 0.05;
      const sueldoneto = sueldo - AFP - ISSS - RENTA;*/
      
      const arregloNumeros =[numero1,numero2,numero3,numero4];

      const maximo = Math.max(...arregloNumeros);
      const minimo = Math.min(...arregloNumeros);

      setTotal({
        /*AFPFee: AFP.toFixed(2).replace('.', ','),
        ISSSFee: ISSS.toFixed(2).replace('.', ','),
        RENTAFee: RENTA.toFixed(2).replace('.', ','),
        SueldoNeto: sueldoneto.toFixed(2).replace('.', ',')*/
       maxi:maximo,
       mini:minimo


      });
    //}
  };


  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };


  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.Header}>
        <Text style={styles.HeadApp}>Calcular mayor y menor </Text>
        <Form
          /*setNombre={setNombre}
          setSueldo={setSueldo}*/
          setNumero1={setNumero1}
          setNumero2={setNumero2}
          setNumero3={setNumero3}
          setNumero4={setNumero4}

        />
      </SafeAreaView>
      <Result
       /* nombre={nombre}
        sueldo={sueldo}*/

        numero1={numero1}
        numero2={numero2}
        numero3={numero3}
        numero4={numero4}


        total={total}
        errorMessage={errorMessage}
      />

      <Footer></Footer>
    </>
  );
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center'
  },
  HeadApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    margin: 15,
  },
})