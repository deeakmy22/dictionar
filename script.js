let dictionary = [];

function addWord(word) {
  let wordInput = document.getElementById("wordInput");
  let dictionaryList = document.getElementById("dictionaryList");

  if (wordInput.value != "") {
    let word = wordInput.value.toLowerCase();
    if (!dictionary.includes(word)) {
      dictionary.push(word);
      dictionaryList.innerHTML += "<li>" + word + "</li>";
      wordInput.value = "";
    } else {
      alert("The word already exist in the dictionary list!");
    }
  }
}

function searchWord() {
  let searchInput = document.getElementById("searchInput");
  let word = searchInput.value.toLowerCase();

  if (dictionary.includes(word)) {
    alert("The words exist in dictionary!");
  } else {
    alert("The word does not exist in dictionary!");
  }
}
