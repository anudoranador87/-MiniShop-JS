// =====================================
// PROYECTO MINISHOP 🛒
// =====================================

// PRODUCTO
function Product(name, price, stock) {
  this.name = name;
  this.price = price;
  this.stock = stock;

  this.describe = function() {
    console.log(`${this.name} - ${this.price}€ (stock: ${this.stock})`);
  }
}

// CARRITO
function Cart() {
  this.items = [];

  this.addProduct = function(product) {
    this.items.push(product);
    console.log(`${product.name} añadido al carrito`);
  }

  this.getTotal = function() {
    return this.items.reduce((sum, product) => sum + product.price, 0);
  }
}

// PRODUCTOS
const product1 = new Product("Camiseta", 15, 10);
const product2 = new Product("Pantalon", 30, 5);

// CARRITO
const myCart = new Cart();

myCart.addProduct(product1);
myCart.addProduct(product2);

console.log("Total:", myCart.getTotal(), "€");
