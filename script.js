const tela = document.getElementById("tela")
tela.innerText = ""



/*-----------------------
        Liga e desliga a calculadora
-----------------------*/
let statusCalc = false;
let primeiroNumero;
function onOff() {
    if(statusCalc === false) {
        tela.innerText = "_";
        primeiroNumero = true;
        statusCalc = true;
    } else {
        tela.innerText = " ";
        statusCalc = false;
        memoriaCalculadora = 0; //apaga a memoria
        document.getElementById("memori").style.display = "none";
    }
}



/*-----------------------
        adiciona o número clicado na tela
-----------------------*/
function botaoClick(valuer) {

    if(statusCalc) {
        if(primeiroNumero){
            tela.innerText = " ";
            primeiroNumero = false;
        }
        tela.innerText = tela.innerText + valuer 
        console.log(tela.innerText + "=" + tela.innerText.length)
    }
}



/*-----------------------
        Limpa a tela
-----------------------*/
function clian() {
    tela.innerText = '_';
    primeiroNumero = true;
}



/*-----------------------
        apaga o último número digitado
-----------------------*/
function deletar() {

    if (document.getElementById("tela").innerHTML == 'Infinity'){
        tela.innerText = '_';
        primeiroNumero = true;
    } else {
        let resul = document.getElementById("tela").innerHTML;
        document.getElementById('tela').innerHTML = resul.substring(0, resul.length -1)
    }
}



/*-----------------------
        efetua o calculo
-----------------------*/
function calcular() {
    let resultado = document.getElementById("tela").innerHTML;
    if(resultado){
        document.getElementById("tela").innerHTML = eval(resultado);
    }
    else{
        document.getElementById("tela").innerHTML = "nada...";
    }
}



/*-----------------------
        Memória
-----------------------*/
let memoriaCalculadora = 0;
function memoria(valor) {

    if(valor === 'm') {
        /* console.log('m') */
        document.getElementById("tela").innerHTML = memoriaCalculadora;

    } else if(valor === 'mMais') {
        
        if( document.getElementById("tela").innerHTML == ''){
            console.log("erro");

        } else if (document.getElementById("tela").innerHTML == '_') {
            console.log("_______________");
            
        } else {
            document.getElementById("memori").style.display = "flex"; // mostra M na tela

            let resultadoExpressao = document.getElementById("tela").innerHTML ;
            memoriaCalculadora += eval(resultadoExpressao);
           /*  console.log(memoriaCalculadora);  */
        }

        
    } else if(valor === 'mMenos') {
        if( document.getElementById("tela").innerHTML == ''){
            console.log("erro");

        } else if (document.getElementById("tela").innerHTML == '_') {
            console.log("_");
        
        } else {
            document.getElementById("memori").style.display = "flex"; // mostra M na tela

            let resultadoExpressao = document.getElementById("tela").innerHTML 
            memoriaCalculadora -= eval(resultadoExpressao);
            /* console.log(memoriaCalculadora);  */
        }
    } else {
        memoriaCalculadora = 0;
        document.getElementById("memori").style.display = "none";
    }
}



/*-----------------------
        Raiz
-----------------------*/
function raiz() {
    let resultado = document.getElementById("tela").innerHTML;
    document.getElementById("tela").innerHTML = Math.sqrt(eval(resultado));
}