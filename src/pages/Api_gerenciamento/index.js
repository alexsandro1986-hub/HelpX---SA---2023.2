import axios from 'axios';

//Fazer o export
let baseURL = 'https://ordinary-saber-lyre.glitch.me'

const cadastro = async (email, senha) => {
  try {
    const response = await axios.post('https://ordinary-saber-lyre.glitch.me/cadastro', {email, senha}) 
      console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}

  const login = async (email_c, senha_c) => {
  try {
   const response = await axios.post('https://ordinary-saber-lyre.glitch.me/login', {email}) 
      console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}
login('handrai@gmail.com', 'avfd')
  
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
  // editandoUsuario('Juliana', 908)