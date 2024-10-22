const contentDiv = document.querySelector("#content");

function createTitle() {
  const div = document.createElement("div");
  div.setAttribute("id", "title");

  // const text = document.createElement("p");
  // text.textContent = "Beary's Breakfast Bar";

  // div.appendChild(text);

  div.textContent = "Beary's Breakfast Bar";
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

function createSecondBox() {
  const div = document.createElement("div");
  div.setAttribute("class", "info-box");

  const boxTitle = document.createElement("p");
  boxTitle.setAttribute("class", "box-title");
  boxTitle.textContent = "Hours";

  const text = document.createElement("p");
  text.setAttribute("class", "text");
  text.innerText = `Sunday: 8am - 8pm 
          Monday: 6am - 6pm 
          Tuesday: 6am - 6pm 
          Wednesday: 6am - 6pm 
          Thursday: 6am - 10pm 
          Friday: 6am - 10pm 
          Saturday: 8am - 10pm  `;

  div.appendChild(boxTitle);
  div.appendChild(text);

  contentDiv.appendChild(div);
}

function createThirdBox() {
  const div = document.createElement("div");
  div.setAttribute("class", "info-box");

  const boxTitle = document.createElement("p");
  boxTitle.setAttribute("class", "box-title");
  boxTitle.textContent = "Location";

  const text = document.createElement("p");
  text.setAttribute("class", "text");
  text.innerText = "123 Forest Drive, Forestville, Maine";

  div.appendChild(boxTitle);
  div.appendChild(text);

  contentDiv.appendChild(div);
}

function createHome() {
  createTitle();
  createFirstBox();
  createSecondBox();
  createThirdBox();
}

export { createHome };
