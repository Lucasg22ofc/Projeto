function verificar(){

const velInput = document.getElementById("velocidade")
const mensagem = document.querySelector(".mensagem")

 if(velInput.value === ""){
    alert("Preencha o campo com a velocidade")
    return;
  } 

   const vel = Number(velInput.value)

    if(vel > 60){
       mensagem.textContent = "VOCÊ UTRAPASSOU A VELOCIDADE PERMITIDA, MULTADO!"
       mensagem.style.color = "Red";
    } else {
         mensagem.textContent = "VOCÊ ESTÁ DENTRO DO LIMITE, DIRIJA COM SEGURANÇA!"
         mensagem.style.color = "Blue";
    }
}