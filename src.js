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
    console.log(data);
    document.getElementById("author").innerHTML = data.originator.name;
    document.getElementById("quote").innerHTML = data.content;
  });

const wordInput = document.getElementById("quote1");
const form_el = document.getElementById("quote-form");
const quote = document.getElementById("quote-list");
const newquote = document.createElement("h3");
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
const refreshButton = document.querySelector(".refresh-button");

const refreshPage = () => {
  location.reload();
};

refreshButton.addEventListener("click", refreshPage);

const btn = document.querySelector("button");
const icon = document.querySelector("button i");

btn.addEventListener("click", () => {
  if (btn.className === "test") {
    btn.classList.add("animate");
  } else {
    btn.classList.remove("animate");
  }
});

