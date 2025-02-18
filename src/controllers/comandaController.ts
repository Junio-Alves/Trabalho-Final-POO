import { bebidasMock, pratosMock, sobremesasMock } from '../data/mockItems';
import { Comanda } from '../models/Comanda';
import { Item } from '../models/Item';
import { IComandaController } from './iComandaController';


export class ComandaController implements IComandaController {
    private comandas: Comanda[] = [];
    private nextId: number = 0;

    private static instance: ComandaController;

    public static getInstance(): ComandaController {
        if (!ComandaController.instance) {
            ComandaController.instance = new ComandaController();
        }
        return ComandaController.instance;
    }

    public abrirComanda(): Comanda {
        const comanda = new Comanda(this.nextId++);
        this.comandas.push(comanda);
        return comanda;
    }

    public listarComandas(): void {
        if (this.comandas.length === 0) {
            throw new Error("Nenhuma comanda aberta.");
        }
        this.comandas.forEach((comanda) => {
            console.log(`Comanda ID: ${comanda.getId()}`);
        });
        
    }

    public verComanda(id: number): void {
        const comanda = this.comandas.find(c => c.getId() === id);
    
        if (!comanda) {
            console.log("Comanda não encontrada.");
            return;
        }
    
        console.log(`\n📋 Comanda ${comanda.getId()}:\n-------------------------`);
    
        const itens = comanda.listarItens();
    
        if (itens.length === 0) {
            console.log("⚠️ Comanda está vazia.");
        } else {
            let total = 0;
            itens.forEach((item, index) => {
                console.log(`${index + 1}. ${item.getNome()} - ${item.getTipo()} - R$ ${item.getPreco().toFixed(2)} - Tamanho: ${item.getTamanho()}`);
                total += item.getPreco(); // Acumula o preço total
            });
    
            // Exibe o valor total
            console.log("-------------------------");
            console.log(`💰 Total da Comanda: R$ ${total.toFixed(2)}`);
        }
    
        console.log("-------------------------");
    }
    

    public adicionarItemComanda(id: number, item: Item): void {
        const comanda = this.comandas.find(comanda => comanda.getId() === id);
        if (comanda) {
            comanda.adicionarItem(item);
            console.log(`Item '${item.getNome()}' adicionado à Comanda ${id}`);
        } else {
            throw new Error("Comanda não encontrada!");;
        }
    }

    public exibirItensDisponiveis(tipo: number): void {
        console.clear();
        console.log("\nItens Disponíveis para Adicionar à Comanda:");
        console.log("------------------------------------------");
    
        switch (tipo) {
            case 1:
                // Exibir Pratos
                console.log("\nPratos:");
                pratosMock.forEach((item, index) => {
                    console.log(`${index}. ${item.getNome()} - R$ ${item.getPreco().toFixed(2)} - Tamanho: ${item.getTamanho()}`);
                });
                break;
    
            case 2:
                // Exibir Bebidas
                console.log("\nBebidas:");
                bebidasMock.forEach((item, index) => {
                    console.log(`${index}. ${item.getNome()} - R$ ${item.getPreco().toFixed(2)} - Tamanho: ${item.getTamanho()}`);
                });
                break;
    
            case 3:
                // Exibir Sobremesas
                console.log("\nSobremesas:");
                sobremesasMock.forEach((item, index) => {
                    console.log(`${index}. ${item.getNome()} - R$ ${item.getPreco().toFixed(2)} - Tamanho: ${item.getTamanho()}`);
                });
                break;
    
            default:
                console.log("Opção inválida!");
                break;
        }
    
        console.log("------------------------------------------");
    }
    

    fecharComanda(id: number) {
        const index = this.comandas.findIndex(comanda => comanda.getId() === id);

        if (index === -1) {
            console.log("Comanda não encontrada.");
            return;
        }

        this.comandas.splice(index, 1); // Remove a comanda da lista
        console.log(`Comanda ${id} fechada e removida da lista.`);
    }

    public verificarComanda(id: number): boolean {
        return this.comandas.some(comanda => comanda.getId() === id);
    }

}
