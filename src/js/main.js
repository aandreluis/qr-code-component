const buttonToggle = document.querySelector("#card .change-theme .btn-theme")
const imgButton = document.querySelector("#card .change-theme .btn-theme img")
const theme = window.localStorage.getItem("theme")

// verifica se o prefers-color-scheme do usuario é dark OU se o tema armazenado no localStorage é dark
if (
  (window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches) ||
  theme === "dark"
) {
  document.body.classList.add("dark")
  imgButton.setAttribute("src", "./public/light-mode.png")
  window.localStorage.setItem("theme", "dark")
}

// evento para quando o botão de alterar o tema for clicado
buttonToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark")
  //Altera o icon do button
  document.body.classList.value === "dark"
    ? imgButton.setAttribute("src", "./public/light-mode.png")
    : imgButton.setAttribute("src", "./public/dark-mode.png")

  if (theme === "dark") {
    window.localStorage.setItem("theme", "light")
  } else window.localStorage.setItem("theme", "dark")
})
