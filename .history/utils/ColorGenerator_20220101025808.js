function generateRandomColor() {
  return (
    'rgb(' +
    Math.floor(Math.random() * 200) +
    ',' +
    Math.floor(Math.random() * 200) +
    ',' +
    Math.floor(Math.random() * 200) +
    ')'
  );
}
