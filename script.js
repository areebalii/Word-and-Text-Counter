let charactersEl = document.querySelector("#characters");
let textCountEl = document.querySelector(".textCount");
let wordCountEl = document.querySelector(".wordCount");

charactersEl.addEventListener("input", () => {
  countCharacters();
})

function countCharacters() {
  let text = charactersEl.value;
  // give the number of text
  textCountEl.innerText = "Number of characters: " + text.replaceAll(" ", "").length;
  // give the number of words
  let words = text.split(" ");
  let filterWord = words.filter(word => word != "");
  wordCountEl.innerText = "Number of words: " + filterWord.length;
}