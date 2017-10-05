

// promp que solicite frase a encriptar
var codeToModify= prompt("Introduzca una frase que quiera encriptar:");

/function cipher(sentence){
// genero un array vacio para los caracteres a trasformar
var answer='';
sentence = sentence.toUpperCase();
// recorrer sentence y saber cuáles son los carácteres	
	for(var i = 0; i < sentence.length; i++) {
// verificar que prompt no sea vacio ni número	  
	  if(codeToModify !== ( ) && !== codeToModify typeof number ) {
	    if else( codeToModify = sentence){
	      answer+= sentence.charAt(i);
//una vez recorrido con for, saber cuántos carácteres hay que encriptar	      
	   }
	    else { String.fromCharCode( sentence.charCodeAt(i)- 65 + 33) % 26 + 65
	}//fórmula cifrado cesar + acci y transformando en string nuevamente
	  
	   return answer;
   }*

