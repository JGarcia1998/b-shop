document
  .querySelector(".filter-container")
  .addEventListener("click", () => filterAction());

function filterAction() {
  document.querySelectorAll(".grid-item").forEach((item) => {
    let categoryAtt = item.getAttribute("cat");

    function category() {
      let btn = document.querySelectorAll(".category");
      for (let cat of btn) {
        if (cat.checked) {
          return cat.getAttribute("cat-type");
        }
      }
    }

    if (category() == categoryAtt || category() == "all") {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function checkAtributeToggle() {
  document.querySelector(".filter-container").addEventListener("click", () => {
    document.querySelectorAll(".category").forEach((item) => {
      item.removeAttribute("checked");
    });

    if (event.target.classList == "category") {
      event.target.setAttribute("checked", "");
    }
  });
}

checkAtributeToggle();
