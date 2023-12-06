//Desafio de Programação classificação de Herói
//obs.:Nota-se que existe um gap no esquema proposto para o desafio entre a classificação PRATA e OURO onde os resultados para experiencia de numero 6001 a 7000 iriam ficar sem resultado associado, dado a problematica tomei a decisão de redistribuir os valores.
console.log ("\n\nDesafio de Classificação de Herói\n")//Título
//Declaração das Variáveis
let charName = "Gustavo"
let charXp = 5200
//Dado a qtde. de opções a estrutura escolhida foi a Switch-Case
switch(true){

    case(charXp <= 1000):
    console.log ("O Herói de nome "+charName+" está no nível Ferro\n")
    break;

    case(charXp > 1000 && charXp <=2000):
    console.log ("O Herói de nome "+charName+" está no nível Bronze\n")
    break;

    case(charXp > 2000 && charXp <=5000):
    console.log ("O Herói de nome "+charName+" está no nível Prata\n")

    break;

    case(charXp > 5000 && charXp <=7000):
    console.log ("O Herói de nome "+charName+" está no nível Ouro\n")
    break;

    case(charXp > 7000 && charXp <=8000):
    console.log ("O Herói de nome "+charName+" está no nível Platinan\n")
    break;

    case(charXp > 8000 && charXp <=9000):
    console.log ("O Herói de nome "+charName+" está no nível Ascendente\n")
    break;

    case(charXp > 9000 && charXp <=10000):
    console.log ("O Herói de nome "+charName+" está no nível Imortal\n")
    break;

    case(charXp > 10000):
    console.log ("O Herói de nome "+charName+" está no nível Radiante\n")
    break;

}
