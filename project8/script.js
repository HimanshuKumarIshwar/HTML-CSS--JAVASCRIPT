const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiUrl ="https://api.quotable.io/random";

 async function getQuote(){
try {

btnEl.innerText ="Loading...";

btnEl.disabled = true;

quoteEl.innerText = "updating...";
authorEl.innerText = "Updating...";

    const respones = await fetch(apiUrl)
    const data = await respones.json();
    const quoteContant = data.content;
    const quoteAuthor  = data.author;
    quoteEl.innerText = quoteContant;
    authorEl.innerText = quoteAuthor;
    btnEl.innerText = "GET A  QUOTE";
    btnEl.disabled = false;
} catch (error) {
    console.log(error);
    quoteEl.innerText = "AN error happened, try again Later";
    authorEl.innerText = "An error ";
    btnEl.innerText = "GET A  QUOTE";
    btnEl.disabled = true;
}



}



getQuote();


btnEl.addEventListener("click", getQuote);

