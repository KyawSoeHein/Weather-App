function generateRandomColor() {
  randomColor =
    'rgb(' +
    Math.floor(Math.random() * 200) +
    ',' +
    Math.floor(Math.random() * 200) +
    ',' +
    Math.floor(Math.random() * 200) +
    ')';
  console.log(randomColor);
}
