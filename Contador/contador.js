const mais = document.getElementById('mais')
const menos = document.getElementById('menos')
const zerar = document.getElementById('limpar')
const res = document.getElementById('contagem') 

let contagemAtual = 0 

mais.addEventListener('click',function(){
    contagemAtual++
    res.innerHTML = contagemAtual
}) 


menos.addEventListener('click',function(){
    contagemAtual--
    res.innerHTML = contagemAtual
})

zerar.addEventListener('click',function(){
    contagemAtual = 0
    res.innerHTML = contagemAtual
})
