import React, {useState, useEffect} from 'react';  
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  // para usar use State necessário importar useState de React
  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [resultado, setResultado]=useState();


  const ops = ["somar", "subtrair", "multiplicar", "dividir"]

  const calcula =(op)=> {
    switch (op){
      case "somar":
        setResultado(parseFloat(valor1)+parseFloat(valor2))
        break;
      case "subtrair":
        setResultado(parseFloat(valor1)-parseFloat(valor2))
        break;
      case "multiplicar":
        setResultado( (parseFloat( valor1 ) )*( parseFloat ( valor2 ) ) )
        break;
      case "dividir":
        setResultado(parseFloat(valor1)/parseFloat(valor2))
        break;
    } 
   }
   
   useEffect(()=>{
     alert(resultado)
   },[resultado])
   
  return (
    <View style={styles.inputContainer}>
        <TextInput
          placeholder="Valor1"
          value={valor1}
          onChange={(e) => setValor1(e.target.value)}
          style={styles.input}
        />
        <TextInput
          placeholder="Valor2"
          value={valor2}
          onChange={(e) => setValor2(e.target.value)}
          style={styles.input}
        />

      {ops.map((op)=>
        <TouchableOpacity
         key={op}
         style={styles.button}
         onPress={()=>calcula(op)}
        >
        <Text style={styles.buttonText}>{op}</Text>
        </TouchableOpacity>
      )}
       </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    textAlign: 'center'
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    margin: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '900',
    fontSize: 25,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})