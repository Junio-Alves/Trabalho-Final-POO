import promptSync from 'prompt-sync';
const prompt = promptSync();
import { ComandaController } from '../controllers/comandaController';
import { listarComandaView } from '../views/listarComandas';
import { adicionarItemComandaView } from '../views/adicionarItemComandaView';
import { VerComandaView } from '../views/verComandaView';
import { abrirComandaView } from '../views/abrirComandaView';
import { fecharComandaView } from '../views/fecharComandaView';
const comandaController = ComandaController.getInstance();

export default function menuComandaView(){
    while (true) {
        let opcao: number;
        console.clear();
        console.log("\n------------------------------------------");
        console.log("            🍽️  SISTEMA DE COMANDA 🍽️");
        console.log("------------------------------------------");
        console.log("1. 🆕 Abrir comanda ");
        console.log("2. 📋 Listar comandas ");
        console.log("3. 🔍 Ver comanda ");
        console.log("4. ➕ Adicionar item à comanda ");
        console.log("5. 🚪 Fechar comanda ");
        console.log("0. 🚶 Sair ");
        console.log("------------------------------------------");

      
        opcao = parseInt(prompt("Escolha uma opção: "));
      
        if (opcao === 0) {
          console.log("Saindo...");
          break;
        }
      
        switch (opcao) {
          // Abrir comanda
          case 1:
            abrirComandaView();
            break;
          // Listar comandas
          case 2:
            listarComandaView();
            break;
          // Ver comanda
          case 3:
            VerComandaView();
            break;
          // Adicionar item a comanda
          case 4:
            adicionarItemComandaView();
            break;
          // Fechar comanda
          case 5:
            fecharComandaView();
            break;
          default:
            console.log("Opção inválida, tente novamente.");
        }
      }
}
