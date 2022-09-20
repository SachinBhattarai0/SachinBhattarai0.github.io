const navLinks = document.querySelectorAll("nav li a");

navLinks.forEach((navlink) => {
  navlink.addEventListener("click", (e) => {
    navLinks.forEach((i) => i.classList.remove("active"));
    e.target.classList.add("active");
  });
});

//for typewriter effect
const typewriterContainer = document.getElementById("typewriter");
const typewriterText = typewriterContainer.innerHTML.trim();
typewriterContainer.innerHTML = "";
let textIndex = 0;
const interval = setInterval(writeToDom, 140);

function writeToDom() {
  if (textIndex >= typewriterText.length) return clearInterval(interval);
  const currentText = typewriterContainer.innerHTML;
  const newText = currentText + typewriterText[textIndex];
  typewriterContainer.innerHTML = newText;
  textIndex++;
}
// end for typewriter effect
