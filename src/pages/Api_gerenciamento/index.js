import axios from 'axios';

//Fazer o export(farei mais tarde)
let baseURL = 'https://ordinary-saber-lyre.glitch.me'

const cadastro = async (nome, email, senha) => {
  try {
    const response = await axios.post('https://ordinary-saber-lyre.glitch.me/cadastro', {nome,email, senha}) 
      console.log(response.data)
    } catch (error) {
      console.log(error.message)
     
      console.log(error.response.data)  //Mensagem de erro
    }
  }
  // cadastro('Gisele', 'gisele@gmail.com', 'aaa')


  
  const login = async (email, senha) => {
    try {
     const response = await axios.post('https://ordinary-saber-lyre.glitch.me/login', {email}) 
        console.log(response.data)
    } catch (error) {
      console.log(error.message)
     
      console.log(error.response.data)  //Mensagem de erro
    }
  }
  // login('aa', 'avfd')



let CompletandoCadastro = {
  sangue: 'AB+',
  idade: 20,
  cpf: '89-000-222-11',
  alergia: 'Rinite alérgica',
  comorbidade: 'Hipertensão arterial',
  logradouro: 'Rua Coronel',
  numerocasa: 202,
  ncep: 99000-11,
  contantoemergencia:'Albert' ,
  emailemergencia: 'albert@gmail.com',                
  telefoneemergencia: '4899995552',
  doadorsangue: 'Sim',
  doadororgao: 'Sim'
}
//Configurar o objeto acima e chamar a função abaixo com ele como parametro
// completar_cadastro(obj)

const completar_cadastro = async (dados) => {
  console.log(obj.sangue)
  try {
    const response = await axios
    .put('https://ordinary-saber-lyre.glitch.me/users/complete/33eeb71a-3c55-491d-af13-ceaf5812211d', dados) 
      console.log(response.data)
  } catch (error) {
    console.log(error.message)
     
    console.log(error.response.data)  //Mensagem de erro
  }
}


                            //EDIÇÃO

 // As informações que não for atualizar, não colocar no objeto. 
  // Há um configuração lá na nossa rota juntamente com o prisma,
  // que se não for recebecida uma informação(dado) nova, é para manter a que já está(antiga).

  let EditarInformacoes = {
  // nome: 'aidoasd',
  // email: ,
  // senha: ,
  sangue: 'B+',
  idade: 60,
  cpf: '89-000-222-11',
  alergia: 'Rinite alérgica',
  comorbidade: 'Hipertensão arterial',
  logradouro: 'Rua Co',
  numerocasa: 202,
  ncep: 99000-11,
  contantoemergencia:'Albert' ,
  emailemergencia: 'albert@gmail.com',                
  telefoneemergencia: '4899995552',
  doadorsangue: 'Sim',
  doadororgao: 'Sim'
}

//Configurar o objeto acima e chamar a função abaixo com ele como parametro
// >>>>> editandoUsuario(EditarInformacoes) <<<

const editandoUsuario = async(dados) => {
 console.log(dados)
  try {
    const response = axios
    .put('https://ordinary-saber-lyre.glitch.me/users/edit/33eeb71a-3c55-491d-af13-ceaf5812211d', 
    dados) 
    console.log(response.data)
  } catch (error) {
    console.log(error.message)
     
    console.log(error.response.data)  //Mensagem de erro
  }
}
