// interfaces/IComandaController.ts
import { Item } from "../models/Item";

export interface IComandaController {
    abrirComanda(): void;
    listarComandas(): void;
    verComanda(id: number): void;
    adicionarItemComanda(id: number, item: Item): void;
    exibirItensDisponiveis(opcao:number): void
    fecharComanda(id: number): void;
}
