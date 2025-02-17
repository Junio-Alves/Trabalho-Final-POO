import { ComandaController } from "../controllers/comandaController";
import promptSync from "prompt-sync";
const prompt = promptSync();
const comandaController = ComandaController.getInstance();

export function listarComandaView() {
    console.clear();
    console.log("\n------------------------------------------");
    console.log("           🍽️  LISTAR COMANDAS 🍽️\n");
    try {
        comandaController.listarComandas();
        console.log("\n------------------------------------------");
        prompt("Pressione Enter para continuar...");
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Erro:", error.message);
            console.log("\n------------------------------------------");
            prompt("Pressione Enter para continuar...");
        }
    }
}
