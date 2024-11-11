// Classificador de Nível de Herói

const nomeDoHeroi = "King";
let xpDoHeroi = 10001
let nivelDoHeroi = ""

switch (true) {
    case xpDoHeroi >= 0 && xpDoHeroi <= 1000:
        nivelDoHeroi = "Ferro";
        break;
case xpDoHeroi >= 1001 && xpDoHeroi <= 2000:
    nivelDoHeroi = "Bronze";
    break; 
case xpDoHeroi >= 2001 && xpDoHeroi <= 3000:
nivelDoHeroi = "Prata";
break;
case xpDoHeroi >= 3001 && xpDoHeroi <= 5000:
    nivelDoHeroi = "Ouro";
    break;
case xpDoHeroi >= 5001 && xpDoHeroi <= 6000:
nivelDoHeroi = "Platina";
break;
case xpDoHeroi >= 6001 && xpDoHeroi <= 8000:
    nivelDoHeroi = "Ascendente";
    break;
case xpDoHeroi >= 8001 && xpDoHeroi <= 10000:
    nivelDoHeroi = "Imortal";
    break;
case xpDoHeroi >= 10001:
    nivelDoHeroi = "Maioral";
    break;
    default:
    nivelDoHeroi = "Desconhecido";
}

console.log ("O nome do Herói é " + nomeDoHeroi + " e ele está no nível " + nivelDoHeroi) 