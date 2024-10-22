const contentDiv = document.querySelector("#content");

function createTitle() {
  const div = document.createElement("div");
  div.setAttribute("id", "title");

  const text = document.createElement("p");
  text.textContent = "Beary's Breakfast Bar";

  div.appendChild(text);
  contentDiv.appendChild(div);
}

function createFirstBox() {
  const div = document.createElement("div");
  div.setAttribute("class", "info-box");

  const text = document.createElement("p");
  text.setAttribute("class", "text");
  text.textContent = `Beary's has the best porridge! The atmosphere and customer service
  make you feel like you are sitting in the middle of the woods, eating
  like a bear! This is exactly the kind of place that I like to return
  to again and again.`;

  const author = document.createElement("p");
  author.setAttribute("class", "author");
  author.textContent = "Goldilocks";

  div.appendChild(text);
  div.appendChild(author);

  contentDiv.appendChild(div);
}

function createSecondBox() {}

function createThirdBox() {}

function createHome() {
  createTitle();
  createFirstBox();
  createSecondBox();
  createThirdBox();
}

export { createHome };
