let burger = document.querySelector('.burger');
let nav = document.querySelector('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
  let paragraph = document.getElementById("typing-text");

  let lines = [
    "I'm Luka Shushtakashvili, a 16-year-old Front-end Developer from Georgia.",
    "I'm a junior developer skilled in creating well-designed, responsive web pages using HTML, CSS/SCSS, JavaScript, and Angular.",
    "If you want to make a website, follow me on social media!",
    "You can also check out my projects on GitHub."
  ];

  let lineIndex = 0;
  let charIndex = 0;

  function typeLine() {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        paragraph.innerHTML = lines
          .slice(0, lineIndex)
          .join('\n') + (lineIndex > 0 ? '\n' : '') +
          lines[lineIndex].substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeLine, 40);
      } else {
        lineIndex++;
        charIndex = 0;
        setTimeout(typeLine, 500);
      }
    }
  }

  typeLine();
});