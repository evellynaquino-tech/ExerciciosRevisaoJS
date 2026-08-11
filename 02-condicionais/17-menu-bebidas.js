// EXERCÍCIO 17 - SWITCH
// Considere:
//
// let opcao = 3;
//
// Utilize switch para mostrar:
// 1 = "Água"
// 2 = "Suco"
// 3 = "Refrigerante"
// 4 = "Café"
// Outro valor = "Opção inválida"

// Escreva sua solução abaixo:

let opcao = 3;

switch (opcao) {
    case 1:
        console.log("água");
        break;
    case 2:
        console.log("suco");
        break;
    case 3:
        console.log("refrigerante");
        break;
    case 4:
        console.log("café");
        break;
        default:
            console.log("opção inválida");    
}

