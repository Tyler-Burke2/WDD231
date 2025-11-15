console.log(window.location);

function getParams(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

function productTemplate(product) {
  return `
    <article class="product">
      <h2>${product.name}</h2>
      <img src="${product.image}" alt="${product.name}">
      <p>Price: $${product.price}</p>
    </article>
  `;
}

function getProductDetails() {
  const productId = getParams("productId");

  const main = document.querySelector("main");

  if (!productId) {
    main.innerHTML = "<p>No product selected.</p>";
    return;
  }

  const product = products.find(p => String(p.id) === String(productId));

  if (!product) {
    main.innerHTML = `<p>Product with ID ${productId} not found.</p>`;
    return;
  }

  main.innerHTML = productTemplate(product);
}

getProductDetails();
