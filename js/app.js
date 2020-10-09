let gridItems = document.querySelectorAll(".grid-item");
let ul = document.querySelector(".footer-container");
let num = 0;

gridItems.forEach((item1) => {
  const button = item1.querySelector(".add-btn");

  button.addEventListener("click", () => {
    num++;
    if (num > 0) {
      ul.classList.add("slide-up-animation");
      ul.style.bottom = 0 + "px";
    }
    item1.classList.add("animation");
    setTimeout(() => {
      item1.classList.remove("animation");
    }, 5000);

    ul.insertAdjacentHTML(
      "beforeend",
      `<li class="footer-items">
      <button class="remove-item">X</button>
      <div class="side-by-side">     
      ${
        item1.querySelector(".title").textContent
      } <img class="cart-image" src="${item1
        .querySelector(".bike-image")
        .getAttribute("src")}"/></div> <span class="cart-price">${
        item1.querySelector(".item-price").textContent
      }</span> </li>`
    );

    // DELETE ITEM FROM CART

    document.querySelectorAll(".remove-item").forEach((item) => {
      item.addEventListener("click", function () {
        num--;
        if (num === 0) {
          setTimeout(() => {
            ul.style.bottom = -200 + "px";
          }, 1000);
        }
        item.parentNode.classList.add("remove-animation");

        setTimeout(() => {
          item.parentNode.remove();
        }, 900);
      });
    });
  });
});
