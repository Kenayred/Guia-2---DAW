/*
    METODO DE LA BURBUJA

            for(i=0; i<max-1; i++){
            for(j=i+1; j<max; j++){
            if(numeros[i]>numeros[j]){
            temp = numeros[j];
            numeros[j] = numeros[i];
            numeros[i] = temp;
            }
        }
    }
*/

function ordenar(){

    var cantidad=0, numero=0, max;
    var nums = [];
    var temp;
    //VALIDACION
    var menu;
    //RECEPCION DE DATOS

    do{
        cantidad = prompt("Ingrese cuantos numero va a ingresar");

        if(isNaN(cantidad)){
            alert("Numero no valido, inngrese de nuevo");
        }
    }while(isNaN(cantidad));

    
    var contador=1;
    for(var i=0; i<cantidad; i++){
        nums[i] = prompt("Ingrese el numero N°" + contador);
        contador = contador + 1;
    }

    
        menu = prompt("Escriba la opcion 'ascendente' o 'descendente'");

        switch(menu){
            case "ascendente":

                for(i=0; i<max-1; i++){
                    for(j=i+1; j<max; j++){
                    if(nums[i]>nums[j]){
                    temp = nums[j];
                    nums[j] = nums[i];
                    nums[i] = temp;
                    }
                    }
                    }
            
            //IMPRESION DE DATOS
                    document.write("Numeros de manera ascendente<br>");
                    for(var i=0; i<cantidad; i++){
                        document.write(nums[i] + " ");
                    }
            break;
    
            case "descendente":
            
                var temp;
            
                for(i=0; i<max+1; i++){
                    for(j=i+1; j<max; j++){
                    if(nums[i]<nums[j]){
                    temp = nums[j];
                    nums[j] = nums[i];
                    nums[i] = temp;
                    }
                    }
                    }
            
                    document.write("Numeros de manera descendente <br>");
                    for(var i=0; i<cantidad; i++){
                        document.write(nums[i] + " ");
                    }
            break;
            default:
                    alert("Ingrese una opcion valida");
            break;
    
        }
    
    
    


    
}

window.onload = ordenar;