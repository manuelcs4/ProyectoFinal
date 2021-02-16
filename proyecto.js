//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%


//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

//Mensaje de Bienvenida para el programa
alert("Bienvenido al Cotizador de Polizas de TK-U")
alert("Por favor ingrese los datos solicitados a continuacion")

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor. Ingrese Salir para Cerrar el Programa")

while ("SALIR" != nombre.toUpperCase()){
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
var edad_numero = parseInt(edad)

//Comparacion Si el usuario es mayor de edad 
if (edad_numero >= 18){
  alert("El usario cumple con la mayoria de edad")
  
//Solicitud de numero de Propiedades del usuario 
var numero_propiedades = 0
var cantidad_propiedades = prompt("Ingrese el numero de propiedades que posee") 
    numero_propiedades = parseInt(cantidad_propiedades)

//Solicitud del Ingreso del usuario 
var sueldo_numero = 0
var sueldo = prompt("Ingrese el sueldo del Usuario") 
    sueldo_numero = parseInt(sueldo)
  
//Comprobacion si el usuario esta o no casado
var casado = prompt("Esta casado, ingrese SI o No")
var edad_conyugue
var edad_conyugue_numero

//Consulta Edad Conyugue solo si esta casado 
if ("SI" == casado.toUpperCase()){
	edad_conyugue = prompt("Que edad tiene su conyugue. Ingrese solo numeros")
	edad_conyugue_numero = parseInt(edad_conyugue)
} else {
	edad_conyugue_numero = 0
}

//Evaluacion si el usuario tiene hijos o hijas 

var hijos = prompt("¿Tiene hijos o hijas? Ingrese SI o NO")
var cantidad_hijos 
 
//Se consulta cuantos hijos tiene solo si el usuario tiene hijos 

if ("SI" == hijos.toUpperCase()){
	cantidad_hijos = prompt("Ingrese el numero de hijos")
	var numero_hijos = parseInt(cantidad_hijos)
} else {
	numero_hijos = 0
}
//Seccion para realizar los calculos de dependiente de los valores ingresados 
//**Calculos de Recargo por Edad de Asegurado 
var recargo_titular 
if (edad_numero>=18 && edad_numero<25){
	recargo_titular = edad_18
} else if (edad_numero>= 25 && edad_numero<49){
	recargo_titular = edad_25
} else {
	recargo_titular = edad_50
}

alert("El recargo del titular es de "+recargo_titular)

//**Calculos de Recargo por Edad Conyugue
var recargo_conyugue = 0
if (edad_conyugue_numero>=18 && edad_conyugue_numero<25){
	recargo_conyugue = edad_18
} else if (edad_conyugue_numero>= 25 && edad_conyugue_numero<49){
	recargo_conyugue = edad_25
} else if (edad_conyugue_numero >=50){
	recargo_conyugue = edad_50
} else {
	recargo_convugue = 0
}


alert("El recargo del conyugue es de "+recargo_conyugue)

var recargo_propiedad = .35*numero_propiedades
var recargo_ingreso = .05*sueldo_numero

//**Calculos de Recargo por Hijos 

var recargo_hijos = 0
    recargo_hijos = hijos_recargo*numero_hijos
alert("El recargo por numero de hijos es de "+recargo_hijos)

alert("El recargo por propiedades es de "+recargo_propiedad) 

alert("El recargo por sueldo es de "+recargo_ingreso) 

//Calculo del Recargo Total 

recargo_total = precio_base*recargo_titular + precio_base*recargo_conyugue + precio_base*recargo_hijos + precio_base*recargo_propiedad + recargo_ingreso
alert("El recargo total por para el titular es de "+recargo_total)

precio_final = precio_base + recargo_total 

alert("Para el usuario "+nombre)
alert("El recargo total en base a los valores ingresados es "+recargo_total) 
alert("El precio total del seguro es de "+precio_final)

//Fin del Programa debido a que el usuario no cumple con la mayoria de edad 
} else {
  alert("Lo sentimos, el usuario no cumple con la mayoria de edad")
  
}}

