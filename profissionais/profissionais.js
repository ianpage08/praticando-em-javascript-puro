//local onde está o itens 
const prof = [
    {
        id : 1,
        nome : 'laueli Miranda Maciel',
        Emprego : 'Advogada',
        img : 'laueli.png',
        texto : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse repudiandae culpa excepturi ea eligendi nobis saepe. Voluptatibus totam facilis debitis excepturi dolore corporis dolor animi temporibus minima, natus soluta accusamus?'
    },
    {
        id : 2,
        nome : 'Ingrid Miranda Maciel',
        Emprego : 'Advogada',
        img : 'ingrid.png',
        texto : 'Lorem ipsum dolor sisdfghfdhsgfdhsdfgt amet, cfsghsghnsectetur adipisicing elit. Esse repudiandae culpa excepturi ea eligendi nobis saepe. Voluptatibus totam faasfasdfsdfgfsdagfdgcilis debitis excepturi dolore corporis dolor animi temporibus minima, natus soluta accusamus?'
    },
    {
        id : 3,
        nome : 'Joseeeeeeeeeee',
        Emprego : 'Advogado',
        img : 'alberto-jose.jpg',
        texto : 'Lorem ipsum dolor sit amet, consectetur ddddddddddddddddddddddddddddddddddddddddadipisicing elit. Esse repudiandae culpa excepturi ea eligendi nobis saepe. Voluptatibus totam facilis debitis excepturi dolore corporis dolor animi temporibus minima, natus soluta accusamus?'
    }
]
//Selecionando os itens 
const nomes = document.getElementById('autor')
const imagem = document.getElementById('person-img')
const trabalho = document.getElementById('trabalho')
const info = document.getElementById('informações')

const btnFrente = document.getElementById('frente')
const btnVoltar = document.getElementById('voltar')
const aleatorio = document.getElementById('aleatorio')

// selecio o começo item
let começo = 0
// esses itens vai ser a primeira coisa a carregaar na pagina "DOMContentLoaded" serve para manipular tudo  antes da pagina carregar 


window.addEventListener('DOMContentLoaded', function(){
    // criei uma constante e usei o a varialvel começo para poder acessar os dados da constante
    const item = prof[começo];
    nomes.innerHTML = item.nome
    imagem.src = item.img
    trabalho.innerHTML = item.Emprego
    info.innerHTML = item.texto
})
// mostra  a pessoa baseado no item 
function mostrarprofissional(pessoa){
    const profissional = prof[pessoa]
    nomes.innerHTML = profissional.nome
    imagem.src = profissional.img
    trabalho.innerHTML = profissional.Emprego
    info.innerHTML = profissional.texto

    
}
//botaão para frente
btnFrente.addEventListener('click',function(){
    //usnado o começo eu chamo a variavel 
    começo++
    if (começo >+ prof.length){
        começo = 0
    }
    mostrarprofissional(começo);
})
// botão para voltar 
btnVoltar.addEventListener('click',function(){
    começo--
    if (começo < 0){
        começo = prof.length - 1
    }
    mostrarprofissional(começo);
})

aleatorio.addEventListener('click',function(){
    começo = Math.floor(Math.random() * prof.length)
    mostrarprofissional(começo);
})