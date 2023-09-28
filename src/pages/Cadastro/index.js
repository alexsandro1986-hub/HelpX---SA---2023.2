import React, { useState } from 'react';
import { View, Button, Text, StyleSheet,Image, TextInput } from 'react-native';


const CadastroPage = () => {
  const [passar, setPassar] = useState(1);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const Passar = () => {
    setPassar(passar + 1);
  };
  

  const cadastro = () => {
    switch (passar) {
      case 1:
        return (
          <TextInput
            style={styles.input}
            placeholder="Nome"
            onChangeText={(text) => setNome(text)}
            value={nome}
          />
        );
      case 2:
        return (
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        );
      case 3:
        return (
          <TextInput
            style={styles.input}
            placeholder="Senha"
            onChangeText={(text) => setSenha(text)}
            value={senha}
          />
        );
      case 4:
        return (
          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            onChangeText={(text) => setConfirmarSenha(text)}
            value={confirmarSenha}
          />
        );
      default:
        return null;
    }
  };

  const Header = () => (
    
    <View style={styles.header}>
      <View style={styles.containerLogo} >
          <Image
            source={require('/img/logopronto.png')}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
      </View>


      
    </View>
      
  );

  const Body = () => (
    <View style={styles.body}>
      {cadastro()}
      {passar < 4 && <Button style={styles.botaoUm} st title="Avançar" onPress={Passar} />}

      {passar === 4 && (
        <Button  style={styles.botaoDois}  title="Finalizar Cadastro" onPress={() => alert('Cadastro concluído')} />
      )}
 
      
        
     
    </View>
  );

  const Footer = () => (
  <Text>Desenvolvido por:</Text>
  );

  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#97d8ae',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: '#4CAF50',
    padding: 10,
    alignItems: 'center',
  },
  input: {
    fontSize: 15,
    width: 220,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
  containerLogo:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default CadastroPage;
