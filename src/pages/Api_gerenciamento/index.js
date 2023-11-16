// let tratamento = {

//   enfermidade: 'Gripe' ,   
//   periodo: "20 a 30"   ,
//   droga: 'Benegripe' ,         
  
// }
// const criando_tratamento = async (dados) => {
//   try {
//     const response = await axios.post('https://ordinary-saber-lyre.glitch.me/users/tratamento/33eeb71a-3c55-491d-af13-ceaf5812211d', dados) 

//     console.log('aaaa', response.data)
//     } catch (error) {
//       console.log(error.message)
//      console.log(error.response.data)

//     }
//   }
// // criando_tratamento(tratamento)
// const deletando_tratamento = async (dados) => {
//   try {
//     const response = await axios.delete('https://ordinary-saber-lyre.glitch.me/users/tratamento/33eeb71a-3c55-491d-af13-ceaf5812211d') 

//     console.log('aaaa', response.data)
//     } catch (error) {
//       console.log(error.message)
//      console.log(error.response.data)

//     }
//   }
// //  deletando_tratamento(tratamento)
// const completar_cadastro = async (dados) => {
//   console.log(obj.sangue)
//   try {
//     const response = await axios
//       .put('https://ordinary-saber-lyre.glitch.me/users/complete/33eeb71a-3c55-491d-af13-ceaf5812211d', dados)
//     console.log(response.data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// let CompletandoCadastro = {
//   sangue: 'AB+',
//   idade: 20,
//   cpf: '89-000-222-11',
//   alergia: 'Rinite alérgica',
//   comorbidade: 'Hipertensão arterial',
//   logradouro: 'Rua Coronel',
//   numerocasa: 202,
//   ncep: 99000 - 11,
//   contantoemergencia: 'Albert',
//   emailemergencia: 'albert@gmail.com',
//   telefoneemergencia: '4899995552',
//   doadorsangue: 'Sim',
//   doadororgao: 'Sim'
// }
// // completar_cadastro(obj)

// let EditarInformacoes = {
//   // As informações que não for atualizar não colocar no objeto
//   // nome: 'aidoasd',
//   // email: ,
//   // senha: ,
//   sangue: 'B+',
//   idade: 60,
//   cpf: '89-000-222-11',
//   alergia: 'Rinite alérgica',
//   comorbidade: 'Hipertensão arterial',
//   logradouro: 'Rua Co',
//   numerocasa: 202,
//   ncep: 99000 - 11,
//   contantoemergencia: 'Albert',
//   emailemergencia: 'albert@gmail.com',
//   telefoneemergencia: '4899995552',
//   doadorsangue: 'Sim',
//   doadororgao: 'Sim'
// }
// const login = async (email, senha) => {
//   try {
//     const response = await axios.post('https://ordinary-saber-lyre.glitch.me/login', { email, senha })
//     console.log(response.data)
//   } catch (error) {
//     console.log(error.message)
//     console.log(error.response.data)
//     let texto_resposta = error.response.data
//     setTexto(Object.values(texto_resposta))

//   }
// }
// login('silva@gmail.com', 'avfd')

// const editandoUsuario = async (dados) => {
//   console.log(dados)
//   try {
//     const response = axios
//       .put('https://ordinary-saber-lyre.glitch.me/users/edit/33eeb71a-3c55-491d-af13-ceaf5812211d',
//         dados)
//     console.log(response.data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// editandoUsuario(EditarInformacoes)