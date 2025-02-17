import { ComandaController } from "../controllers/comandaController";
import promptSync from "prompt-sync";
const prompt = promptSync();
const comandaController = ComandaController.getInstance();

export function VerComandaView() {
    console.clear();
    console.log("\n------------------------------------------\n");
    console.log("         🍽️  VER COMANDA 🍽️\n");
    console.log("\n------------------------------------------\n");
    const idComanda = parseInt(prompt("Digite o ID da comanda para ver os itens: "));
    comandaController.verComanda(idComanda);
    console.log("\n------------------------------------------\n");
    prompt("Pressione Enter para continuar...");
}
