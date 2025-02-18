import { ComandaController } from "../controllers/comandaController";
import promptSync from "prompt-sync";
import { ItemPrato } from "../models/Item_prato";
import { ItemBebida } from "../models/Item_bebida";
import { ItemSobremesa } from "../models/Item_sobremesa";
import { bebidasMock, pratosMock, sobremesasMock } from "../data/mockItems";
const prompt = promptSync();
const comandaController = ComandaController.getInstance();

export function adicionarItemComandaView() {
    console.clear();
    console.log("\n------------------------------------------");
    console.log("         🍽️  ADICIONAR ITEM A COMANDA 🍽️");
    console.log("\n------------------------------------------");
    const idComanda = parseInt(prompt("Digite o ID da comanda para adicionar o item: "));    
    if(!comandaController.verificarComanda(idComanda)){
        console.log("Comanda não encontrada!");
        prompt("Pressione Enter para continuar...");
        return;
    }
    
    let item;
    let pratoEscolhido;
    while (true) {
        console.clear();
        console.log("\nEscolha o tipo de item a adicionar:");
        console.log("1. 🍽️  Prato");
        console.log("2. 🍹 Bebida");
        console.log("3. 🍰 Sobremesa");
        const tipo = parseInt(prompt("Digite o número da opção: "));
        switch (tipo) {
            case 1:
                comandaController.exibirItensDisponiveis(1);
                pratoEscolhido = parseInt(prompt("Digite o número do prato escolhido: "));
                item = pratosMock[pratoEscolhido];
                break;
            case 2:
                comandaController.exibirItensDisponiveis(2);
                pratoEscolhido = parseInt(prompt("Digite o número da bebida escolhida: "));
                item = bebidasMock[pratoEscolhido];
                break;
            case 3:
                comandaController.exibirItensDisponiveis(3);
                pratoEscolhido = parseInt(prompt("Digite o número da sobremesa escolhida: "));
                item = sobremesasMock[pratoEscolhido];
                break;
            default:
                console.log("Opção inválida! Digite um valor de 1 a 3.");
                prompt("Pressione Enter para continuar...");
                continue;
        }
        break;
    }

    

    try {
        console.clear();
        comandaController.adicionarItemComanda(idComanda, item);
        console.log("Item adicionado com sucesso!");
        prompt("Pressione Enter para continuar...");
    } catch (error) {
        console.clear();
        console.error("Erro ao adicionar item:", error);
        prompt("Pressione Enter para continuar...");
    }
}
