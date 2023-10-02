

function horario(){
var image = document.getElementById('imagem')
var msg = document.getElementById('msg')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()

msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`



if(hora >= 0 && hora< 12){
//document.write ('Bom dia')
image.src='manha.png.jpg'
document.body.style.background = '#e2cd9f'
}


else if( hora >= 12 && hora< 18){
    //document.write('Boa tarde')
    image.src='tarde.png.jpg'
    document.body.style.background = '#9b3706'
}


else{
    //document.write('Boa noite')
    img.src='noite.png.jpg'
    document.body.style.background = '#40314b'
}
}


