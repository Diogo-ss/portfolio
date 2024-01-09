let consecutiveClicks = 0;

function openLink() {
  consecutiveClicks++;
  if (consecutiveClicks === 5) {
    window.open("https://www.bibliacatolica.com.br/biblia-ave-maria/sao-joao/1/", "_blank");
    consecutiveClicks = 0;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const quoteElement = document.querySelector(".quote");

  quoteElement.addEventListener("click", function (event) {
    if (event.target.classList.contains("quote")) {
      event.target.classList.add("quote-clicked");
      setTimeout(() => {
        event.target.classList.remove("quote-clicked");
      }, 500);
      openLink();
    }
  });

  quoteElement.addEventListener("mouseleave", function () {
    consecutiveClicks = 0;
  });
});
