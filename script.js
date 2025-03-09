function changeColor() {
  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("demo").style.color = randomColor;
}
