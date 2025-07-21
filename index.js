// Function to generate a random HEX color
function getRandomHexColor() {
  const chars = "0123456789ABCDEF";
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += chars[Math.floor(Math.random() * 16)];
  }
  return hex;
}

// Function to calculate contrast color (white/black) based on brightness
function getTextColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 125 ? "#000000" : "#FFFFFF";
}

// Main function to apply the new color to the box
function generateColor() {
  const colorBox = document.getElementById("colorBox");
  const newColor = getRandomHexColor();
  colorBox.style.backgroundColor = newColor;
  colorBox.textContent = newColor;
  colorBox.style.color = getTextColor(newColor);
}

// Optionally: generate an initial random color on page load
window.onload = generateColor;
