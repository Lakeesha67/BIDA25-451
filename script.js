document.addEventListener("DOMContentLoaded", function() {
  // 1. Interactive Menu Buttons
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      alert(`You clicked on ${link.textContent}!`);
    });
  });

  // 2. Dark Mode / Theme Switcher
  const themeButton = document.createElement("button");
  themeButton.textContent = "Toggle Dark Mode";
  themeButton.className = "button";
  document.querySelector("nav").appendChild(themeButton);

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      alert("Dark mode activated!");
    } else {
      alert("Light mode activated!");
    }
  });

  // 3. Donation Calculator
  const donateSection = document.querySelector(".donation-calculator");
  if (donateSection) {
    const input = donateSection.querySelector("input");
    const output = donateSection.querySelector(".impact");

    input.addEventListener("input", () => {
      const amount = parseFloat(input.value) || 0;
      // Example: $10 = 1 child supported
      const childrenSupported = Math.floor(amount / 10);
      output.textContent = `Your donation can support ${childrenSupported} child(ren).`;
    });
  }
});
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


