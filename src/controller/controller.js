import { Product } from "../models/model.js";
import { renderCard } from "../view/view.js";

// CRIA UM PRODUTO USANDO UM MODELO
export function createProduct(imagem, title, price) {
  const product = new Product(imagem, title, price);
  // console.log(product.imagem);

  renderCard(product);
}
