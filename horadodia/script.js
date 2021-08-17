function carregar() {
    var msg = document.getElementById('msg')
    var msg2 = document.getElementById('msg2')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()

    msg.innerHTML = `${hora}:${min}:${sec}`

    if (hora >= 0 && hora < 12) {
        document.body.style.backgroundImage = "url('manha1.png')"
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundSize = "auto"
        msg2.innerHTML = `bom dia ( ˘▽˘)っ♨`
    } else if (hora >= 12 && hora < 18) {
        document.body.style.backgroundImage = "url('tarde1.png')"
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundSize = "auto"
        msg2.innerHTML = `boa tarde (づ ◕‿◕ )づ☞`
    } else {
        document.body.style.backgroundImage = "url('noite1.png')"
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundSize = "auto"
        msg2.innerHTML = `boa noite ( ◡‿◡ *)`
    }
}    

let myVar = setInterval(myTimer ,1000)
function myTimer() {
  const data = new Date()
  document.getElementById("msg").innerHTML = data.toLocaleTimeString('pt-BR',{hour:'numeric',minute:'numeric',second:'numeric',hour12:false})
}