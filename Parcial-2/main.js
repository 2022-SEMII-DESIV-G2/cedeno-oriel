document.getElementById('btnBuscar').onclick = function(){

    document.getElementById('respuesta').value = grafo.calcularValorRuta('N1');
    
    var ruta = [];
    ruta = grafo.encontrarRuta('N1');
    console.log(ruta);
    for(let i=0; i<ruta.length; i++){
        document.getElementById(ruta[i]).style.background = 'green';
    }

    
}

document.getElementById('btnLimpiar').onclick = function(){
    document.getElementById('respuesta').value = ""

    for(let i = 0;vertices.length; i++){
        document.getElementById(vertices[i]).style.background = 'rgba(0, 0, 0, 0.4)';
    }

    
}