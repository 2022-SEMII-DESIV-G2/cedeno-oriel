const btnLimpiar = document.getElementById("btn-limpiar");
const divRespuesta = document.getElementById("container-respuesta")
btnLimpiar.style.display = "none";
divRespuesta.style.display = "none";

function contador(){
    let frase = document.getElementById('input-letras').value;
    let arrFrase = frase.split('')
    let i=0, j=0;
    let letra=""
    let arrLetra = []
    let mensaje = "", contadorLetra = "";
    let cont=0;
    if(frase === ''){
        btnLimpiar.style.display = "none";
        divRespuesta.style.display = "none";
    }else{
        do{
            letra = arrFrase[i];
            if(!arrLetra.includes(arrFrase[i])){
             arrLetra.push(letra);
            } 
             i++
         }while(i < arrFrase.length)
         i=0;
         do{
            do{
                if(arrLetra[j] === arrFrase[i]){
                    cont++
                }
                i++
            }while(i < arrFrase.length)
            mensaje = arrLetra[j]+"="+cont
            contadorLetra = contadorLetra+" "+mensaje
            cont=0;
            i=0;
            j++
        }while(j < arrLetra.length)
        console.log(contadorLetra)
        btnLimpiar.style.display="block"
        divRespuesta.style.display="block"
        return document.getElementById("label-respuesta").innerHTML = contadorLetra;
        
    }
}
function limpiar(){
    document.getElementById('input-letras').value="";
    btnLimpiar.style.display="none"
    divRespuesta.style.display="none"
}