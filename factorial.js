 
$(document).ready(function(){

    $('.num').click(function () {
        var num = $(this);
        var text = $.trim(num.find('.txt').clone().children().remove().end().text());
        var telNumber = $('#numero');
        $(telNumber).val(telNumber.val() + text);
    });
});

 
function factorialNumber(){

    //obtenemos el valor del documento html del campo input id
   x=document.getElementById('numero').value;
    //creamos una variable para calcular el factorial
    let f=1;
    //Condicionamos si el valor ingresado esta en el rango 0-10
    if(x>=0 && x!=""){
         // realizamos un bucle repetitivo para calcular el factorial
        for(let i=1; i<=x; i++){
            //a lo que ingrese va realizando la operacion hasta llegar al numero factor
            f=f*i;
        }
          
         //Imprimimos el resultado en el html  en la parte de section con id
         document.getElementById('icono').innerHTML='&#xE876'; 
         document.getElementById('rs').innerHTML="Resultado";
        document.getElementById('mensajes').innerHTML="El factorial de "+x+ " es  = "+f;
        document.getElementById('numero').value="";
        }else{
            //Caso contrario que no esta en el rango de 0-10 imprime un mensaje
            document.getElementById('icono').innerHTML='&#xe000';
            document.getElementById('rs').innerHTML="Ups!";
            document.getElementById('mensajes').innerHTML="Ingrese un valor ";

            document.getElementById('numero').value="";
        }
       
       
     
     
     
     
     
    
    
}

 
	 
	// añade el elemento creado y su contenido al DOM
	
