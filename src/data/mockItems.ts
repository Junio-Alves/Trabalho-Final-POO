import { ItemBebida } from "../models/Item_bebida";
import { ItemPrato } from "../models/Item_prato";
import { ItemSobremesa } from "../models/Item_sobremesa";

/// Mock de Pratos
export const pratosMock = [
    new ItemPrato("Feijoada", 35.50, "Grande"),
    new ItemPrato("Bife à Parmegiana", 29.90, "Média"),
    new ItemPrato("Frango Grelhado", 22.00, "Pequena"),
    new ItemPrato("Salada Caesar", 18.50, "Pequena"),
];

// Mock de Bebidas
export const bebidasMock = [
    new ItemBebida("Cerveja", 8.00, "Long Neck"),
    new ItemBebida("Refrigerante", 5.00, "Lata"),
    new ItemBebida("Suco de Laranja", 7.50, "Copo"),
    new ItemBebida("Água Mineral", 3.00, "Garrafa 500ml"),
];

// Mock de Sobremesas
export const sobremesasMock = [
    new ItemSobremesa("Pudim", 10.00, "Fatia"),
    new ItemSobremesa("Torta de Limão", 12.50, "Fatia"),
    new ItemSobremesa("Mousse de Chocolate", 14.00, "Porção"),
    new ItemSobremesa("Sorvete", 8.00, "Copo"),
];
