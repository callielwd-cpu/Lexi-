function copiarID(id) {
  navigator.clipboard.writeText(id).then(() => {
    document.getElementById("popup").style.display = "flex";
  }).catch(() => {
    alert("Erro ao copiar ID");
  });
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}

// Pesquisa
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  let found = false;

  cards.forEach(card => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    if (title.includes(value)) {
      card.style.display = "flex";
      found = true;
    } else {
      card.style.display = "none";
    }
  });

  noResults.style.display = found ? "none" : "block";
});

// Carregar cards dinamicamente
const cardsContainer = document.getElementById("cards-container");
const cardFiles = ["cards/card1.html", "cards/card2.html", "cards/card3.html"];

cardFiles.forEach(file => {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      cardsContainer.insertAdjacentHTML("beforeend", html);
    });
});