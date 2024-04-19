
window.addEventListener("scroll", function(){
  let nav = document.querySelector("#navbar");
  nav.classList.toggle('transparent-nav', window.scrollY > 0)
  nav.classList.toggle('orange-nav', window.scrollY > 500)
})