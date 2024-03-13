const dynamicText = document.querySelector("#introduction span");
const words = ["Aspiring software developer", "Practicing coder", "Avid learner", "Creative thinker"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingAnimation = () => {
  const currentWord = words[wordIndex];
  const currentChar = isDeleting ? currentWord.substring(0, charIndex) : currentWord.substring(0, charIndex + 1);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add("stop-blinking");

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typingAnimation, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typingAnimation, 100);
  } else {
    isDeleting = !isDeleting;
    dynamicText.classList.remove("stop-blinking");
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typingAnimation, 1200);
  }
};

typingAnimation();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});