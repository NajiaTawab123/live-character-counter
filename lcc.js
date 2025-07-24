const messageInput = document.getElementById("messageInput");
const charCount = document.getElementById("charCount");
const toggle = document.getElementById("darkModeToggle");

// Character counter
messageInput.addEventListener("input", () => {
  const length = messageInput.value.length;
  charCount.textContent = length;

  if (length > 100) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = document.body.classList.contains("dark") ? "#90c0ff" : "#468ef3";
  }
});

// Dark mode toggle
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
