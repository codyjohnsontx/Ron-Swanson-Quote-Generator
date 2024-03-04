document.querySelector("img").addEventListener("click", getQuote);

function getQuote() {
  fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then((response) => response.json())
    .then((data) => {
      const quote = data[0];
      const quoteElement = document.getElementById("quote");
      if (quoteElement) {
        quoteElement.textContent = quote;
      } else {
        console.error(`error ${error} was found`);
      }
    })
    .catch((error) => console.error(`Error fetching quote: ${error}`));
}
