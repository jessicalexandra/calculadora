
import { useState } from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';
import Banner from './components/Banner';

export default function App() {
  //definir las variables de estado del componente
  const [valor1,setvalor1]=useState('');
  const [valor2,setvalor2]=useState('');
  const [Resultado,setResultado]=useState('');
  return (
    <View style={styles.container}>
      <View style={[styles.container,{flex:1,backgroundColor:"orange"  }]}>
      <Banner name ="splash.png"></Banner>
      </View>
      <View style={[styles.container,{flex:5,backgroundColor:"yellowgreen"}]}>
      <Text style={{fontWeight:'bold'}}>Calculadora Basica</Text>

      <Text style={{fontWeight:'bold'}}>Valor1</Text>
      <TextInput placeholder='ingrese el valor' style={styles.inputs} onChangeText={valor1=> setvalor1(valor1)} value={valor1}> </TextInput>

      <Text style={{fontWeight:'bold'}}>Valor2</Text>
      <TextInput style={styles.inputs} onChangeText={valor2=> setvalor2(valor2)} value={valor2}> </TextInput>

      <Text style={{fontWeight:'bold'}}>Resultado</Text>
      <TextInput style={styles.inputs} value={Resultado}></TextInput>
      </View>
      <View style={[styles.container,{flex:1,backgroundColor:"gray", width:"100%"  }]}>
      <Text>Pie</Text>
      </View>
     
     
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
   
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%",
  },
  inputs:{
    color:'blue',borderRadius:5,padding:10,borderWidth:2,borderColor:'green',textAlign:'center'}
  }
);
