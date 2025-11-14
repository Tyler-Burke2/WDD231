// See which URL we are on — check the "search" property
console.log(window.location);

// Return the value of a specific search parameter
function getParams(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param); // returns a string or null
}

// Build HTML markup for a product object
function productTemplate(product) {
  return `
    <article class="product">
      <h2>${product.name}</h2>
      <img src="${product.image}" alt="${product.name}">
      <p>Price: $${product.price}</p>
    </article>
  `;
}

// Main function: find productId → find matching product → output to <main>
function getProductDetails() {
  const productId = getParams("productId");

  const main = document.querySelector("main");

  if (!productId) {
    main.innerHTML = "<p>No product selected.</p>";
    return;
  }

  // Compare as strings to avoid type mismatch issues
  const product = products.find(p => String(p.id) === String(productId));

  if (!product) {
    main.innerHTML = `<p>Product with ID ${productId} not found.</p>`;
    return;
  }

  // Insert the generated markup
  main.innerHTML = productTemplate(product);
}

// Run automatically when product.html loads
getProductDetails();
