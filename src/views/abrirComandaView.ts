import { ComandaController } from "../controllers/comandaController";
import promptSync from "prompt-sync";
const prompt = promptSync();
const comandaController = ComandaController.getInstance();

export function abrirComandaView() {
    console.clear();
    console.log("\n------------------------------------------");
    console.log("            🍽️  ABRIR COMANDA 🍽️\n");
    const comanda = comandaController.abrirComanda();
    console.log(`Comanda ID: ${comanda.getId()}`);
    console.log("\n------------------------------------------\n");
    prompt("Comanda aberta com sucesso! Pressione Enter para continuar...");
}
