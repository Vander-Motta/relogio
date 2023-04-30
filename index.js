function carregar(){
    var msg = window.document.getElementById("msg");
    var foto = window.document.getElementById("img");
    var data = new Date();
    var minuto = new Date();
    var hora = data.getHours();
    var min = minuto.getMinutes();
    msg.innerHTML = `Agora sao ${hora} horas e ${min} minutos`;

    message.innerHTML = `${hora}:${min}`

    if(hora >=6 && hora <= 17){

        msg.innerHTML = `Otimo dia`
        img.src = 'dia.webp'

    } else {
        msg.innerHTML = `Otima Noite`
        img.src = 'noite-na-praia-com-barco-e-luar_104785-846.webp';
        }

    if(hora >=0 && hora <=17){
        mensagem.innerHTML = `Mantenha sempre a atenção durante seu dia a dia`;

    } else {
        mensagem.innerHTML = `Use a noite para descansar e outro dia prosperar uma boa vida`;
    }


}