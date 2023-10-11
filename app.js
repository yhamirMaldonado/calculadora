let ventana = document.querySelector("#pantalla");
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
}
function calcular(){
    const valorPantalla = ventana.value; 
    let resultado = eval(valorPantalla)
    if(isFinite(resultado)){
        ventana.value=resultado;
        bandera=true;
    }
    else{
        ventana.value="ERROR"; 
        bandera=true;
    }
}

