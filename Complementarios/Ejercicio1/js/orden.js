/*
    for(var i=0; i<cantCifras;i++){

        if(i == 0){
            var j = 1;
        }

        cifras[i] = numEnt.slice(i,j);          // LOS PARAMETRO SON DE SLICE() SON  "SLICE(STAR,END)"
        j++;                                   //POR EJEMPLO SI SE COLOCA EL NUMERO 12 ENTONCES PARA SELECCIONAR CADA UNO DE LAS CIFRAS SERIA SEGUN LA POSICION EN UN ARREGLO
                                              // OSEA PARA SACAR 1 TENDRIAMOS QUE INICIAR EN LA POSICION 0 Y PARA TERMINAR LA 1 QUE ES DONDE FINALIZA Y AGARRARA LA ANTERIOR QUE ES LA DELA POSICION 0

    }
*/
function calcular(){
        var cantidad;
        var cant;
        var pares = 0, impares = 0, sumap=0, sumaimp=0, sumatot=0, cifraMayor, cifraMenor;
        var cifras=[];

        //VALIDACION DEL DATO
        do{
            cantidad = prompt("Digite un numero");

            if(isNaN(cantidad)){
                alert("Digite un numero válido");
            }
        }while(isNaN(cantidad));

        cant = cantidad.length;
        document.write("La cantidad de cifras es: " + cant);

        for(var i=0; i<cant;i++){

            if(i == 0){
                var j = 1;
            }

            cifras[i] = cantidad.slice(i,j);    
                                            
            // LOS PARAMETRO SON DE SLICE() SON  "SLICE(STAR,END)"
            j++;
        }
        //Numeros pares e impares
        for(var i = 0; i<cant; i++){
            //numeros pares
            if(cifras[i]%2 == 0){
                
                    pares += 1;
                
                sumap = sumap + parseInt(cifras[i]);
            }
            //numeros impares
            if(cifras[i]%2 == 1){
                impares += 1;

                sumaimp = sumaimp + parseInt(cifras[i]);
            }

            sumatot = sumatot + parseInt(cifras[i]);
        }

        


        for(var i = 0; i<cant; i++){
            if(cifras[i] > cifraMayor){
                cifraMayor = cifras[i];
            }

            if(cifraMenor == 0){
                cifraMenor = cifras[i];
            } else if (cifras[i] < cifraMenor){
                cifraMenor = cifras[i];
            }
        }

        document.write("<br>Los numeros pares son: " + pares);
        document.write("<br>Los numeros impares son: " + impares);
        document.write("<br>La suma de los numeros pares es: " + sumap);
        document.write("<br>La suma de los numeros impares es:" + sumaimp);
        document.write("<br>La suma total de los numeros es: " + sumatot);
        document.write("<br>La menor cifra es: " + cifraMenor);
        document.write("<br>La mayor cifra es: " + cifraMayor);
}

window.onload = calcular;
