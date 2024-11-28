// import { createProduct } from "../controller/controller.js";

// const ULRImage = document.getElementById("URL");
// const Title = document.getElementById("Title");
// const Price = document.getElementById("Price");
// const Button = document.getElementById("Button");

export function renderCard(produto) {
  // produto.image produto.title produto.price
  const card = document.createElement("div");
  card.className = "produto-card";
  // console.log(produto.imagem);

  card.innerHTML = `<img src="${produto.imagem}"/> <div>${produto.title}</div><div>${produto.price}</div>`;
  const main = document.getElementById("main");
  main.appendChild(card);
  // const produtoContent = document.getElementById("produtos");
  // produtoContent.appendChild(card);
}

// Button.addEventListener("click", () => {
//   console.log(ULRImage.value, Title.value, Price.value);
//   createProduct(ULRImage.value, Title.value, Price.value);
//   (ULRImage.value = ""), (Title.value = ""), (Price.value = "");
// });
