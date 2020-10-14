document
  .querySelectorAll(".plus")
  .forEach((item) => item.addEventListener("click", () => addToCart()));

document
  .querySelector(".footer-container")
  .addEventListener("click", () => deleteCartItem());

document.querySelector(".slide-footer").addEventListener("click", () => {
  validate();
});

function validate() {
  if (document.querySelector(".slide-footer").checked) {
    document.querySelector(".footer-container").style.bottom = -11.5 + "rem";
    document.querySelector(".checkbox-btn").style.bottom = 0;
    document.querySelector(".main-order-container").style.bottom =
      -11.5 + "rem";
    setTimeout(() => {
      document.querySelector(".checkbox-btn").innerHTML = "Slide-up";
    }, 1000);
  } else if (!document.querySelector(".slide-footer").checked) {
    document.querySelector(".footer-container").style.bottom = 0;
    document.querySelector(".checkbox-btn").style.bottom = 11.5 + "rem";
    document.querySelector(".main-order-container").style.bottom = 0;
    setTimeout(() => {
      document.querySelector(".checkbox-btn").innerHTML = "Slide-down";
    }, 1000);
  }
}

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
  document.querySelector(".main-order-container").style.bottom = 0;
  document.querySelector(".footer-container").style.visibility = "visible";

  document.querySelector(".checkbox-btn").style.bottom = 11.5 + "rem";
  document.querySelector(".checkbox-btn").innerHTML = "Slide-down";

  ul.appendChild(parent);
  updateCartsPrice();

  setTimeout(() => {
    elementAnimation.classList.remove("animation");
    document.querySelector(".checkbox-btn").style.opacity = 1;
    document.querySelector(".checkbox-btn").style.visibility = "visible";
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
    document.querySelector(".checkbox-btn").style.bottom = 0;
    document.querySelector(".checkbox-btn").innerHTML = "Slide-up";
    document.querySelector(".main-order-container").style.bottom = -12 + "rem";
  }
}
