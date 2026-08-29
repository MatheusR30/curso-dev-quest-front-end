const toggle = document.getElementById("theme-toggle");
// O teste para ver se esta chamando corretamente é, ná web, na aba de Console
// console.log(toggle);

const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  body.classList.add(savedTheme);
  toggle.checked = true;
}

// Adiciona um evento ao clicar ou ao mudar (change)
toggle.addEventListener("change", () => {
  // volta o resultado true ou false, se esta checado ou nao
  //   console.log(toggle.checked);
  if (toggle.checked) {
    // se a classe toggle estiver checada (true) o tema ficara dark
    body.classList.add("dark");
    // se estiver dark, setaremos chave valor, [theme, dark] no local storage
    localStorage.setItem("theme", "dark");

    // SE NAO (false) o tema ficara branco
  } else {
    //remove a classe dark do body, assim ficando branco novamente
    body.classList.remove("dark");
    //e tirando a informacao chave valor do local storage
    localStorage.removeItem("theme");
  }
});
