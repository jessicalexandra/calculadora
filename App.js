
import { useState } from 'react';
import { StyleSheet, Text, View , TextInput,Touchable} from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import Banner from './components/Banner';

export default function App() {
  //definir las variables de estado del componente
  
  const [valor1,setvalor1]=useState('');
  const [valor2,setvalor2]=useState('');
  const [Resultado,setResultado]=useState(0);
  const[esvalido,setesvalido]=useState(false)
  const[mensaje,setMensaje]=useState('')
  // metodos o funciones
  let calcular=(operador)=>{
    let resulta=0;
    if (valor1 != ""&&valor2!= "") {
      setesvalido(true)
      let resulta=0;
      switch(operador){
        case"+":
        resulta=parseFloat(valor1)+parseFloat(valor2);
        break;
        case"-":
        resulta=parseFloat(valor1)-parseFloat(valor2);
        break;
        case"*":
        resulta=parseFloat(valor1)*parseFloat(valor2);
        break;
        case"/":
        resulta=parseFloat(valor1)/parseFloat(valor2);
        break;
      }
      // cambiar el contenido de la variable  de estado  resultado con la info de resulta
      setResultado(resulta);
      setMensaje("calculo realizado correctamente")
    }else{
      setMensaje("Debe de ingresar los valores")
      setesvalido(false);
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={[styles.container,{flex:1,backgroundColor:"orange"  }]}>
      <Banner name ="splash.png"></Banner>
      </View>
        {/* //titulo */}
      <View style={[styles.container,{flex:5,backgroundColor:"#add7e5"}]}>
      <Text style={{fontWeight:'bold'}}>Calculadora Basica</Text>

        {/* input */}
      <Text style={{fontWeight:'bold'}}>Valor1</Text>
      <TextInput placeholder='ingrese el valor' style={styles.inputs} onChangeText={valor1=> setvalor1(valor1)} value={valor1}/> 

      <Text style={{fontWeight:'bold'}}>Valor2</Text>
      <TextInput style={styles.inputs} onChangeText={valor2=> setvalor2(valor2)} value={valor2}/> 

      <Text style={{fontWeight:'bold'}}>Resultado</Text>
      <Text style={[styles.inputs,{width:200,height:40,alignItems:'center',justifyContent:'center'}]} >{Resultado.toFixed(1)}</Text>

        {/* //botones */}
      <View style={[styles.container,{marginTop:20,flexDirection:'row',gap:5}]}>
        <TouchableOpacity
         style={[{backgroundColor:'green'},styles.buttons]}onPress={()=>calcular("+")}>
        <Text style={styles.textButon}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={[{backgroundColor:'red'},styles.buttons]}onPress={()=>calcular("-")}>
        <Text style={styles.textButon}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={[{backgroundColor:'purple'},styles.buttons]}onPress={()=>calcular("*")}>
        <Text style={styles.textButon}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={[{backgroundColor:'orange'},styles.buttons]}onPress={()=>calcular("/")}>
        <Text style={styles.textButon}>/</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
         style={[{backgroundColor:'black',marginTop:20},styles.buttons]}>
        <Text style={styles.textButon}>C</Text>
        </TouchableOpacity>
        <Text style={{color:esvalido? 'green': 'red'}}>{mensaje}</Text>
      </View> 
      {/* //pie de pagina */}
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
    color:'blue',
    borderRadius:5,
    padding:10,
    borderWidth:2,
    borderColor:'#3c77dc',
    textAlign:'center'
  },
  buttons:{
    borderRadius:10,
    padding:10,
    width:80,
    alignItems:'center',
    justifyContent:'center'
  },
  textButon:{
    color:'white',
    fontWeight:'bold'
  }
  }
);                                                                                                                                                                                                                                            
