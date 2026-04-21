let siteName = "My Simple Website";

function showMessage() {
  console.log("Welcome to " + siteName);
}

showMessage();
function enhanceAbout() {
  const aboutSection = document.getElementById("about");

  if (document.getElementById("extra-about")) return;

  const newParagraph = document.createElement("p");
  newParagraph.id = "extra-about";
  newParagraph.textContent =
    " I amToronto-based UI/UX designer dedicated to building intuitive and visually engaging digital products, focusing on user-centered design and meaningful experiences.";

  aboutSection.appendChild(newParagraph);

  showEnhancementMessage();
}

function showEnhancementMessage() {
  const message = document.createElement("p");
  message.id = "about-message";
  message.textContent = "More information loaded";

  document.getElementById("about").appendChild(message);

}