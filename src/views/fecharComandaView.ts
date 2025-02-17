import { ComandaController } from "../controllers/comandaController";
import promptSync from "prompt-sync";

const prompt = promptSync();

const comandaController = ComandaController.getInstance();

export function fecharComandaView() {
    console.clear();
    console.log("\n--- Fechar Comanda ---");
    comandaController.listarComandas(); // Mostra as comandas disponíveis

    const id = parseInt(prompt("Digite o ID da comanda a ser fechada: "));
    comandaController.fecharComanda(id);
}
