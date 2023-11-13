import axios from 'axios';

//Fazer o export
let baseURL = 'https://ordinary-saber-lyre.glitch.me'
const cadastro = async (emailusuario, senhausuario) => {
    try {
      response = await axios.post('https://ordinary-saber-lyre.glitch.me/users', {emailusuario, senhausuario}) 
        console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const editandoUsuario = async(nome) => {
    let oi = {nomeusuario:  'Alana'}
    JSON.stringify(oi)
    try {
      axios
      .put('https://ordinary-saber-lyre.glitch.me/users/be10250c-7f5c-4204-a25c-05657110affe', 
      {nomeusuario: nome, cpf: '666-888-999-00'}) 
     
    } catch (error) {
      console.log(error)
    }
  }
  // editandoUsuario('Juliana')