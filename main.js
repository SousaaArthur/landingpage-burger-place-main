
window.addEventListener("scroll", function(){
  let nav = document.querySelector("#navbar");
  nav.classList.toggle('transparent-nav', window.scrollY > 0)
  nav.classList.toggle('orange-nav', window.scrollY > 500)
})

const btnFood = document.getElementById("btnFood");
const foodMenu = document.querySelector(".food__menu");

btnFood.addEventListener("click", function(){
  btnFood.classList.add("btnActive");
  foodMenu.classList.remove("hidden");

  btnDrinks.classList.remove("btnActive");
  drinksMenu.classList.add("hidden");
  btnDessert.classList.remove("btnActive");
  dessertMenu.classList.add("hidden");
});

const btnDrinks = document.getElementById("btnDrinks");
const drinksMenu = document.querySelector(".drinks__menu");

btnDrinks.addEventListener("click", function(){
  btnDrinks.classList.add("btnActive");
  drinksMenu.classList.remove("hidden");

  btnFood.classList.remove("btnActive");
  foodMenu.classList.add("hidden");
  btnDessert.classList.remove("btnActive");
  dessertMenu.classList.add("hidden");
});

const btnDessert = document.getElementById("btnDessert");
const dessertMenu = document.querySelector(".dessert__menu");

btnDessert.addEventListener("click", function(){
  btnDessert.classList.add("btnActive");
  dessertMenu.classList.remove("hidden");

  btnDrinks.classList.remove("btnActive");
  drinksMenu.classList.add("hidden");
  btnFood.classList.remove("btnActive");
  foodMenu.classList.add("hidden");
});