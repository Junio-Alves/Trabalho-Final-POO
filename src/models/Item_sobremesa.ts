import { Item,tipoItem} from './Item';

export class ItemSobremesa extends Item {
  private tamanho: string;

  constructor(nome: string, preco: number, tamanho: string) {
      super(nome, preco, tipoItem.PRATO);
      this.tamanho = tamanho;
    }

  // Implementando o cálculo de desconto para bebidas
  public calcularDesconto(): number {
    if (this.tamanho === 'grande') {
      return this.preco * 0.1; // Exemplo de desconto para tamanho grande
    } else if (this.tamanho === 'pequeno') {
      return this.preco * 0.05; // Exemplo de desconto para tamanho pequeno
    }
    return 0; // Nenhum desconto
  }

  public detalhes(): string {
    return `${this.nome} - Preço: R$${this.preco.toFixed(2)}`;
  }
  
  public getTamanho(): string {
    return this.tamanho;
  }
}
