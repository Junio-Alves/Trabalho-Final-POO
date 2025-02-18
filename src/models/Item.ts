export enum tipoItem{
  PRATO = "Prato",
  BEBIDA = "Bebida",
  SOBREMESA = "Sobremesa"
}

export abstract class Item {
    constructor(
      protected nome: string,
      protected preco: number,
      protected tipo: tipoItem
    ) {}
  
    getNome(): string {
      return this.nome;
    }
  
    setNome(nome: string): void {
      if (nome.trim() === "") throw new Error("Nome do Item não pode ser vazio.");
      this.nome = nome;
    }
  
    getPreco(): number {
      return this.preco;
    }
  
    setPreco(preco: number): void {
      if (preco <= 0) throw new Error("Preço do Item deve ser maior que 0.");
      this.preco = preco;
    }

    getTipo(): string {
      return this.tipo;
  }
  
  
    // Método abstrato para exibir os detalhes do Item
    abstract detalhes(): string;
  }
  