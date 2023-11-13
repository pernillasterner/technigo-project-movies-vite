window.addEventListener("keydown", handleDropdownMenu);

// Globals
let isActive = false;

function handleDropdownMenu(e) {
  let dropdown = document.querySelector(".dropdown");

  if (!isActive && e.keyCode === 77) {
    dropdown.classList.add("is-active");
    isActive = true;
  } else if (isActive && e.keyCode === 77) {
    dropdown.classList.remove("is-active");
    isActive = false;
  }
}
