document
  .querySelectorAll(".plus")
  .forEach((item) => item.addEventListener("click", () => addToCart()));

document
  .querySelector(".footer-container")
  .addEventListener("click", () => deleteCartItem());

function addToCart() {
  let ul = document.querySelector(".footer-container");
  let parent = event.target.parentNode.parentNode.cloneNode("true");
  let elementAnimation = event.target.parentNode.parentNode;

  parent.querySelector(".item-price").classList = "cart-price";
  parent.querySelector(".car-image").classList = "small-car-image";
  parent.querySelector(".add-btn").classList = "remove-item";
  parent.querySelector(".plus").innerHTML = "X";
  parent.querySelector(".plus").classList = "new-plus";

  ul.classList.add("slide-up-animation");
  elementAnimation.classList.add("animation");

  parent.classList = "footer-items";
  parent.removeAttribute("style");

  document.querySelector(".footer-container").style.bottom = 0;
  document.querySelector(".footer-container").style.visibility = "visible";
  ul.appendChild(parent);
  updateCartsPrice();

  setTimeout(() => {
    elementAnimation.classList.remove("animation");
  }, 2000);
}

function deleteCartItem() {
  if (event.target.classList == "new-plus") {
    let mainElement = event.target.parentNode.parentNode;
    mainElement.classList.add("remove-animation");
    setTimeout(() => {
      mainElement.remove();
      updateCartsPrice();
    }, 900);
  }
}

function updateCartsPrice() {
  let cartPrice = 0;
  document.querySelectorAll(".footer-items").forEach((item) => {
    cartPrice += parseInt(
      item.querySelector(".cart-price").getAttribute("value")
    );
  });
  document.querySelector(".info").innerHTML = cartPrice;

  if (cartPrice === 0) {
    document.querySelector(".footer-container").style.bottom = -12 + "rem";
  }
}
