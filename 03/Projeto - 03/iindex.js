
let  velocidadesRegistradas = []


function verificar(){
    const num = 60
      
    const velInput = document.getElementById('vel')
    const vel = Number(velInput.value)
    const mensagem = document.getElementById('mensagem')
    const lista = document.getElementById('listaVelocidades')
    

    if(isNaN(vel) || velInput.value.trim() === ""){

        mensagem.textContent = "DIGITE A SUA VELOCIDADE"
        mensagem.style.color = "red"
        return;

    } else if (vel > num ){
        
        mensagem.textContent = "ACIMA DO LIMITE, MULTADO!"
        mensagem.style.color = "black"
    } else {
        mensagem.textContent = "VELOCIDADE ABAIXO"
        mensagem.style.color = "green"
    }

    velocidadesRegistradas.push(vel)

    const item = document.createElement('li')
    item.textContent = vel + "km/h"

    const removerButton = document.createElement('button')
    removerButton.textContent = "Remover"
    removerButton.style.marginLeft = "20px"
    removerButton.style.borderRadius = "15px"
    removerButton.style.color = "red"
    removerButton.style.transform = "translateY(-6px)"

    item.appendChild(removerButton)

    removerButton.onclick = function(){
         lista.removeChild(item)
        const index = velocidadesRegistradas.indexOf(vel)
        if(index > -1){
            velocidadesRegistradas.splice(index, 1)
     }
    }
    lista.appendChild(item)

     velInput.value = ""
}

function finalizarbutton() {
    
    const velInput = document.getElementById('vel')
    velInput.value = ""

    const mensagem = document.getElementById('mensagem')
    mensagem.textContent = ""
    

    alert(`Processo finalizado, Velocidades registradas: ${velocidadesRegistradas.join(", ")}`)
     
    const lista = document.getElementById('listaVelocidades')
    lista.innerHTML = ""



    velocidadesRegistradas = []
}
 