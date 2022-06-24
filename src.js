const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b927733739mshbab0909e1347b4ep1c1a2fjsn652f8f4dff61",
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};

fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("Author").innerHTML = data.originator.name;
    document.getElementById("quote").innerHTML = data.content;
  });

const wordInput = document.getElementById("quote1");
const form_el = document.getElementById("quote-form");
const quote = document.getElementById("quote-list");
const newquote = document.createElement("li");
form_el.addEventListener("submit", function (push) {
  push.preventDefault();
  addQuote();
});

function addQuote() {
  newquote.innerText = wordInput.value;
  quote.append(newquote);
}

form_el.addEventListener("submit", myFunction);

function myFunction() {
  alert("Thank you for submitting your quote");
}
