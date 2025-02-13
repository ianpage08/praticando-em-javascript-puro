const hora = document.getElementById('hora')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

function atualizarRelogio(){
    let tempo = new Date()
    let horas = tempo.getHours()
    let min = tempo.getMinutes()
    let sec =  tempo.getSeconds()

    segundos.innerHTML = `${sec < 10 ? '0' + sec : sec}`
    hora.innerHTML = `${horas < 10 ? '0' + horas : horas}`
    minutos.innerHTML = `${min < 10 ? '0' + min : min}`
    
}
setInterval(atualizarRelogio,1000)
