const fundo = document.getElementById('fundo')
const cor = document.getElementById('cor')

function mudarfundo(){
    fundo.style.backgroundColor = `${cor.value}`
    
    
    
}
function limpar(){
    const semCor = '#fff'
    fundo.style.backgroundColor = `${semCor}`

}