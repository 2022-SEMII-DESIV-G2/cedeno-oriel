// Declaracion de la clase Graph
class Graph{
    constructor(numDeVertices){
        this.numDeVertices = numDeVertices;
        this.listaAdy = new Map();
  
    }
    //Funcion que agrega el mapa de valores
    addValueMap(map){
      this.valueMap = map;
    }
    //Funcion que obtiene el mapa de valores
    getValueMap(){
      return this.valueMap; 
    }

    //Funcion que agrega un nodo
    addVertice(v){
        this.listaAdy.set(v,[]);
    }
    //Funcion que agrega una arista
    addArista(v,w){
        this.listaAdy.get(v).push(w);
    }

    //Funcion que se encarga de encontrar el nodo mayor
    findNodoMayor(Nodo){
      const i=0;
      var nodoMayor;
      var NodosAdy = this.listaAdy.get(Nodo);

      while(NodosAdy.length != 0){
        var nodoL = this.valueMap.get(NodosAdy[i]);
        var nodoR = this.valueMap.get(NodosAdy[i+1]);

        if( nodoL == nodoR){
          nodoMayor = NodosAdy[i];
        }if (nodoL > nodoR) {
          nodoMayor = NodosAdy[i];
        } else {
          nodoMayor = NodosAdy[i+1];;
        }
        return nodoMayor;
      }

    }

    //Funcion que se encarga de encontrar la ruta
    encontrarRuta(nodoInicial){
      var ruta = [];
      var cola = [];
      var pivote;
      var nodosAdy = this.listaAdy.get(nodoInicial);

      ruta.push(nodoInicial);
      cola.push(nodoInicial);

      for(let i =0; i<14; i++){
        pivote = this.findNodoMayor(cola.shift());
        
        cola.push(pivote);
        ruta.push(pivote);
        
      }

      return ruta;
    }
  
    //Funcion que se encarga de verificar si es es el nodo final
    nodoFinal(Nodo){
      if(this.listaAdy.get(Nodo).length == 0){
        return true;
      }else{
        return false;
      }

    }

    //Funcion que se encarga de calcular el valor de la ruta
    calcularValorRuta(nodoInicial){

      var ruta = this.encontrarRuta(nodoInicial);
      var acumulador = 0;
      for(let i=0; i<ruta.length;i++){
        acumulador += this.valueMap.get(ruta[i]);
      }
      return acumulador;
    }
}

//Se crea un mapa de nodos, con el fin de almacenar el valor de cada nodo.
const nodos = new Map();

//Se declara un grafo de 120 vertices.
const grafo = new Graph(120);

//Valores de la piramide de numeros.
var valores = [75,95,64,17,47,82,18,35,87,10,20,4,82,47,65,19,1,23,75,3,34,88,2,77,73,7,63,67,99,65,4,28,6,16,70,92,41,41,26,56,83,40,80,70,33,41,48,72,33,47,32,37,16,94,29,53,71,44,65,25,43,91,52,97,51,14,70,11,33,28,77,73,17,78,39,68,17,57,91,71,52,38,17,14,91,43,58,50,27,29,48,63,66,4,68,89,53,67,30,73,16,69,87,40,31,4,62,98,27,23,9,70,98,73,93,38,53,60,4,23];

//Se establecen los vertices del grafo.
const  vertices  = [
  'N1','N2','N3','N4','N5','N6','N7','N8','N9','N10',
  'N11','N12','N13','N14','N15','N16','N17','N18','N19','N20',
  'N21','N22','N23','N24','N25','N26','N27','N28','N29','N30',
  'N31','N32','N33','N34','N35','N36','N37','N38','N39','N40',
  'N41','N42','N43','N44','N45','N46','N47','N48','N49','N50',
  'N51','N52','N53','N54','N55','N56','N57','N58','N59','N60',
  'N61','N62','N63','N64','N65','N66','N67','N68','N69','N70',
  'N71','N72','N73','N74','N75','N76','N77','N78','N79','N80',
  'N81','N82','N83','N84','N85','N86','N87','N88','N89','N90',
  'N91','N92','N93','N94','N95','N96','N97','N98','N99','N100',
  'N101','N102','N103','N104','N105','N106','N107','N108','N109','N110',
  'N111','N112','N113','N114','N115','N116','N117','N118','N119','N120',
  ];

  //Bucle que se encarga de agregar los vertices al grafo.
for(var i=0; i<vertices.length;i++){
  grafo.addVertice(vertices[i]);
  nodos.set(vertices[i],valores[i]);
}

//Se agrega el mapa de valores
grafo.addValueMap(nodos);

//Se establecen las aristas de los vertices del grafo.

grafo.addArista('N1','N2');
grafo.addArista('N1','N3');

grafo.addArista('N2','N4');
grafo.addArista('N2','N5');
grafo.addArista('N3','N5');
grafo.addArista('N3','N6');

grafo.addArista('N4','N7');
grafo.addArista('N4','N8');
grafo.addArista('N5','N8');
grafo.addArista('N5','N9');
grafo.addArista('N6','N9');
grafo.addArista('N6','N10');

grafo.addArista('N7','N11');
grafo.addArista('N7','N12');
grafo.addArista('N8','N12');
grafo.addArista('N8','N13');
grafo.addArista('N9','N13');
grafo.addArista('N9','N14');
grafo.addArista('N10','N14');
grafo.addArista('N10','N15');

grafo.addArista('N11','N16');
grafo.addArista('N11','N17');
grafo.addArista('N12','N17');
grafo.addArista('N12','N18');
grafo.addArista('N13','N18');
grafo.addArista('N13','N19');
grafo.addArista('N14','N19');
grafo.addArista('N14','N20');
grafo.addArista('N15','N20');
grafo.addArista('N15','N21');

grafo.addArista('N16','N22');
grafo.addArista('N16','N23');
grafo.addArista('N17','N23');
grafo.addArista('N17','N24');
grafo.addArista('N18','N24');
grafo.addArista('N18','N25');
grafo.addArista('N19','N25');
grafo.addArista('N19','N26');
grafo.addArista('N20','N26');
grafo.addArista('N20','N27');
grafo.addArista('N21','N27');
grafo.addArista('N21','N28');

grafo.addArista('N22','N29');
grafo.addArista('N22','N30');
grafo.addArista('N23','N30');
grafo.addArista('N23','N31');
grafo.addArista('N24','N31');
grafo.addArista('N24','N32');
grafo.addArista('N25','N32');
grafo.addArista('N25','N33');
grafo.addArista('N26','N33');
grafo.addArista('N26','N34');
grafo.addArista('N27','N34');
grafo.addArista('N27','N35');
grafo.addArista('N28','N35');
grafo.addArista('N28','N36');

grafo.addArista('N29','N37');
grafo.addArista('N29','N38');
grafo.addArista('N30','N38');
grafo.addArista('N30','N39');
grafo.addArista('N31','N39');
grafo.addArista('N31','N40');
grafo.addArista('N32','N40');
grafo.addArista('N32','N41');
grafo.addArista('N33','N41');
grafo.addArista('N33','N42');
grafo.addArista('N34','N42');
grafo.addArista('N34','N43');
grafo.addArista('N35','N43');
grafo.addArista('N35','N44');
grafo.addArista('N36','N44');
grafo.addArista('N36','N45');

grafo.addArista('N37','N46');
grafo.addArista('N37','N47');
grafo.addArista('N38','N47');
grafo.addArista('N38','N48');
grafo.addArista('N39','N48');
grafo.addArista('N39','N49');
grafo.addArista('N40','N49');
grafo.addArista('N40','N50');
grafo.addArista('N41','N50');
grafo.addArista('N41','N51');
grafo.addArista('N42','N51');
grafo.addArista('N42','N52');
grafo.addArista('N43','N52');
grafo.addArista('N43','N53');
grafo.addArista('N44','N53');
grafo.addArista('N44','N54');
grafo.addArista('N45','N54');
grafo.addArista('N45','N55');

grafo.addArista('N46','N56');
grafo.addArista('N46','N57');
grafo.addArista('N47','N57');
grafo.addArista('N47','N58');
grafo.addArista('N48','N58');
grafo.addArista('N48','N59');
grafo.addArista('N49','N59');
grafo.addArista('N49','N60');
grafo.addArista('N50','N60');
grafo.addArista('N50','N61');
grafo.addArista('N51','N61');
grafo.addArista('N51','N62');
grafo.addArista('N52','N62');
grafo.addArista('N52','N63');
grafo.addArista('N53','N63');
grafo.addArista('N53','N64');
grafo.addArista('N54','N64');
grafo.addArista('N54','N65');
grafo.addArista('N55','N65');
grafo.addArista('N55','N66');

grafo.addArista('N56','N67');
grafo.addArista('N56','N68');
grafo.addArista('N57','N68');
grafo.addArista('N57','N69');
grafo.addArista('N58','N69');
grafo.addArista('N58','N70');
grafo.addArista('N59','N70');
grafo.addArista('N59','N71');
grafo.addArista('N60','N71');
grafo.addArista('N60','N72');
grafo.addArista('N61','N72');
grafo.addArista('N61','N73');
grafo.addArista('N62','N73');
grafo.addArista('N62','N74');
grafo.addArista('N63','N74');
grafo.addArista('N63','N75');
grafo.addArista('N64','N75');
grafo.addArista('N64','N76');
grafo.addArista('N65','N76');
grafo.addArista('N65','N77');
grafo.addArista('N66','N77');
grafo.addArista('N66','N78');

grafo.addArista('N67','N79');
grafo.addArista('N67','N80');
grafo.addArista('N68','N80');
grafo.addArista('N68','N81');
grafo.addArista('N69','N81');
grafo.addArista('N69','N82');
grafo.addArista('N70','N82');
grafo.addArista('N70','N83');
grafo.addArista('N71','N83');
grafo.addArista('N71','N84');
grafo.addArista('N72','N84');
grafo.addArista('N72','N85');
grafo.addArista('N73','N85');
grafo.addArista('N73','N86');
grafo.addArista('N74','N86');
grafo.addArista('N74','N87');
grafo.addArista('N75','N87');
grafo.addArista('N75','N88');
grafo.addArista('N76','N88');
grafo.addArista('N76','N89');
grafo.addArista('N77','N89');
grafo.addArista('N77','N90');
grafo.addArista('N78','N90');
grafo.addArista('N78','N91');

grafo.addArista('N79','N92');
grafo.addArista('N79','N93');
grafo.addArista('N80','N93');
grafo.addArista('N80','N94');
grafo.addArista('N81','N94');
grafo.addArista('N81','N95');
grafo.addArista('N82','N95');
grafo.addArista('N82','N96');
grafo.addArista('N83','N96');
grafo.addArista('N83','N97');
grafo.addArista('N84','N97');
grafo.addArista('N84','N98');
grafo.addArista('N85','N98');
grafo.addArista('N85','N99');
grafo.addArista('N86','N99');
grafo.addArista('N86','N100');
grafo.addArista('N87','N100');
grafo.addArista('N87','N101');
grafo.addArista('N88','N101');
grafo.addArista('N88','N102');
grafo.addArista('N89','N102');
grafo.addArista('N89','N103');
grafo.addArista('N90','N103');
grafo.addArista('N90','N104');
grafo.addArista('N91','N104');
grafo.addArista('N91','N105');

grafo.addArista('N92','N106');
grafo.addArista('N92','N107');
grafo.addArista('N93','N107');
grafo.addArista('N93','N108');
grafo.addArista('N94','N108');
grafo.addArista('N94','N109');
grafo.addArista('N95','N109');
grafo.addArista('N95','N110');
grafo.addArista('N96','N110');
grafo.addArista('N96','N111');
grafo.addArista('N97','N111');
grafo.addArista('N97','N112');
grafo.addArista('N98','N112');
grafo.addArista('N98','N113');
grafo.addArista('N99','N113');
grafo.addArista('N99','N114');
grafo.addArista('N100','N114');
grafo.addArista('N100','N115');
grafo.addArista('N101','N115');
grafo.addArista('N101','N116');
grafo.addArista('N102','N116');
grafo.addArista('N102','N117');
grafo.addArista('N103','N117');
grafo.addArista('N103','N118');
grafo.addArista('N104','N118');
grafo.addArista('N104','N119');
grafo.addArista('N105','N119');
grafo.addArista('N105','N120');


//Se muestra en consola la informacion del grafo.
console.log(grafo);
console.log(nodos);
console.log(grafo.encontrarRuta('N1'));
console.log(grafo.calcularValorRuta('N1'));