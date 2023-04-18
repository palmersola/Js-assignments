let cart = JSON.parse(localStorage.getItem("cart"));

const Item = class {
  constructor(name, price) {
    this.id = new Date().getTime();
    this.name = name;
    this.price = price;
  }
};

const initializeCart = () =>
  (cart = cart ? JSON.parse(localStorage.getItem("cart")) : localStorage.setItem("cart", JSON.stringify([])));

initializeCart();

const displayCart = () => {
  let list = document.getElementById("list");
  list.innerHTML = "";
  let listItems = JSON.parse(localStorage.getItem("cart"));
  console.log(listItems);
  listItems.map(item => {
    let li = document.createElement("li");
    let del = document.createElement("button");
    del.innerText = "Delete";
    del.classList.add("delete");
    del.setAttribute("id", item.id);
    li.innerHTML = `Item: ${item.name}, Price: ${item.price}`;
    li.append(del);
    list.append(li);
  });
  let delButt = document.getElementsByClassName("delete");
  buttHand(delButt);
};

const addItem = (name, price) => {
  console.log(cart);
  let item = new Item(name, price);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
};

const removeItem = (cartRemove, id) => {
  console.log(cartRemove[0].id);
  let removed = cartRemove.filter(item => item.id != id);
  localStorage.setItem("cart", JSON.stringify(removed));
  cart = JSON.parse(localStorage.getItem("cart"));
  displayCart();
};

const buttHand = delButt => {
  for (button of delButt) {
    button.addEventListener("click", e => {
      e.preventDefault();
      console.log(e.target.id);
      removeItem(cart, e.target.id);
    });
  }
};

document.getElementById("addItemForm").addEventListener("submit", e => {
  e.preventDefault();
  let itemName = document.getElementById("itemName");
  let itemPrice = document.getElementById("itemPrice");
  addItem(itemName.value, itemPrice.value);
});

document.getElementById("displayCartButton").addEventListener("click", e => {
  e.preventDefault();
  displayCart();
});
