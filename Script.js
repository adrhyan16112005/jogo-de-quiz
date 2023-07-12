var arraypergunta01 = ["qual é o nome de um obijeto que utilizamos muito em uma  facudade de um curso de informatica",'A=computador, B=porta,C=mouse,D=Internet'];
var arraypergunta02 = ["qual obigitivo de de ter um curso de informatica" ,'A=para aprender mas um pouco de computação ,B= para que nos podemos utilizar em nos dias diariaos como hoje em dia,C=para que podem ver video na internet ,C=para que podem comverar com pessoas na inernet ,D=para que podem ver fotos e tira hoje em dias'];
var arraypergunta03 = ["A Internet é uma rede de computadores do tipo",'A=VPN,B=WAN,C=LAN,D=RAN.'];
var pontos=0;
alert(arraypergunta01) ;
resposta = prompt("computador");
resposta =resposta.toUpperCase();
 if ( resposta=="A"){ 
    alert('respostacoreta');
     pontos=pontos+100
 }

alert( arraypergunta02)
resposta = prompt("para aprender mas um pouco de computação");
resposta =resposta.toUpperCase();
if ( resposta=="A"){ 
    alert ('respostacoreta');
    pontos=pontos+100
}
alert( arraypergunta03)

resposta = prompt("VPN");
resposta =resposta.toUpperCase();
if ( resposta=="A"){ 
    pontos=pontos+100

}

alert ("sua pontução final é : "+ pontos);
{
    alert("obrigado dela sua partipação")
}













