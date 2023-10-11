let ventana = document.querySelector("#pantalla");
ventana.value=0;
let bandera = false; 
function agregar(valor){
    
    if(bandera){
        if(!isNaN(parseInt(valor))){
            ventana.value="";
            bandera=false;
            ventana.value+=valor;
            return;
        }
        else{
            ventana.value+=valor
            bandera=false;
        }
        return;        
    }
    ventana.value+=valor;
    
}
function borrar(){
    ventana.value="";
    ventana.value="0";
    bandera=true;
}
function calcular(){
    const valorPantalla = ventana.value; 
    let resultado = eval(valorPantalla)
    if(isFinite(resultado)){
        ventana.value=resultado;
        bandera=true;
    }
    else{
        ventana.value="INDEFINIDO"; 
        bandera=true;
    }
}

function borrarNumero(){
    let longitud = ventana.value.length; 
    let resultado= ventana.value.slice(0,longitud-1);

    ventana.value=resultado;
}
