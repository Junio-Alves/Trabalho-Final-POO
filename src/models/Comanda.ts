import { Item } from "./Item";

export class Comanda {
    private id: number;
    private itens: Item[] = [];
    private aberta: boolean = true;
  
    constructor(id: number) {
      this.id = id;
      this.itens = [];
    }
  
    getId(): number {
      return this.id;
    }
  
    setId(id: number): void {
      if (id <= 0) throw new Error("ID da comanda deve ser maior que 0.");
      this.id = id;
    }
  
    adicionarItem(Item:Item ): void {
      if (!this.aberta) throw new Error("Comanda fechada. Não é possível adicionar itens.");
      this.itens.push(Item);
    }
  
    fecharComanda(): void {
      this.aberta = false;
    }
  
    listarItens(): Item[] {
      return this.itens;
    }
  }
  