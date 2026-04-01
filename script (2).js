// ==========================
// TYPING EFFECT
// ==========================
const text = "Lakshmipathi D 😎";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}

typing();


// ==========================
// SCROLL FUNCTION
// ==========================
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}


// ==========================
// OPTIONAL SUCCESS MESSAGE
// ==========================
// This works with Formspree (no backend needed)

const form = document.querySelector("form");

form.addEventListener("submit", function () {
  setTimeout(() => {
    alert("✅ Message sent successfully!");
  }, 500);
});