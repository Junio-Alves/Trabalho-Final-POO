import { Item,tipoItem } from './Item';

export class ItemPrato extends Item {

  constructor(nome: string, preco: number, tamanho: string) {
      super(nome, preco, tipoItem.PRATO,tamanho);
    }

  public detalhes(): string {
    return `Nome: ${this.nome} - Preço: R$${this.preco.toFixed(2)} - Tamanho: ${this.tamanho} - Tipo: ${this.tipo}`;
  }

  public getTamanho(): string {
    return this.tamanho;
  }
}
