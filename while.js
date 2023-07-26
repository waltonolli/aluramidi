
// esta estrutura de função faz executar somente um som.
/*function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom; */
//tocaSomPom está sem () entre parenteses, porque não é pra executar o play ao abrir o programa/site.

function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < ListaDeTeclas.length) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = '#som_${instrumento}';
    //console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    contador = contador + 1;

    //console.log(contador);
}