// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
var wishlist = [
  {
    title: "Tesla Model S",
    quantity: 2,
    price: 90000,
  },
  {
    title: "4 carat diamond ring",
    quantity: 1,
    price: 45000,
  },
  {
    title: "Fancy hacky Sack",
    quantity: 1,
    price: 5,
  },
  {
    title: "Gold fidgit spinner",
    quantity: 2,
    price: 2000,
  },
  {
    title: "A second Tesla Model S",
    quantity: 1,
    price: 90000,
  },
];

function shoppingSpree(wishlist) {
  // Write code here...
  return wishlist.reduce((totalPrice, item) => {
    return totalPrice += item.price * item.quantity;
  }, 0);
}
console.log(shoppingSpree(wishlist));