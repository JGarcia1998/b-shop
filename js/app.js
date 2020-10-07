let gridItems = document.querySelectorAll(".grid-item");
let footer = document.querySelector(".footer");

gridItems.forEach((item) => {
  const button = item.querySelector(".add-btn");
  button.addEventListener("click", () => {
    item.classList.add("animation");
    footer.innerHTML = `<ul class="footer-container">
    <li class="footer-items"></li>
  </ul>`;

    setTimeout(() => {
      item.classList.remove("animation");
    }, 5000);
  });
});
