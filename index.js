const titulo = document.querySelector('.titulo')
const fotoPerfil = document.querySelector('.fotoPerfil')
const loginperfil =  document.querySelector(' .loginperfil')
const segPerfil = document.querySelector(' .segperfil')
const repositorios = document.querySelector(' .repositorios')
const bioperfil = document.querySelector (' .bioperfil')
const localiza = document.querySelector (' .localiza')



const getInfos = async () =>{
    const response = await fetch('https://api.github.com/users/becascript9')
    const data = await response.json()
    console.log(data.name)


    if(!data.name){
        titulo.innerHTML = 'rebeca'
        repositorios.innerHTML = '60'
        fotoPerfil.setAttribute('src','https://' )
        localiza.innerHTML = 'Jampa'

    }else{
        titulo.innerHTML = data.name
        repositorios.innerHTML = data.public_repos
        fotoPerfil.setAttribute('src' ,data.avatar_url)
        bioperfil.innerHTML = data.bio
        segPerfil.innerHTML = `seguidores ${ data.followers} e seguindo ${data.following} perfis.`
        localiza.innerHTML = data.location `a localização do usuário é:  ${data.location} .`}
    


getInfos()}


// const nomes = ['feiosa', 'anderson','inha','furique', 'gaby', 'geovalda', 'josualdo']

// for(let i = 0; nomes.length >=i; i++){
//     console.log(nomes[i])
// }


// const nome = 'aline'
// const prof = 'profesora'
// if(!nome){
//     console.log(`não disseram nenhum nome`)
// }else{
//     console.log(`o nome é: ${nome} ,e a profissão é: ${prof === 'dentista' 
// // se
//    ? 'ela n é professora'
// // else    
//     : 'é professora'}`)
// }


// const nome = 'inhazinha'
// var nome2 = 'anderssondola'

// if(!nome){
//     console.log('n tem nome')
// }


// const nome = 'inhazinha'
// var nome2 = 'anderssondola'
// let nome3 = 'feiosa'