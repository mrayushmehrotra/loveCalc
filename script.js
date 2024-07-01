document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loveCalculatorForm");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name1 = document.getElementById("name1").value.toLowerCase();
    let name2 = document.getElementById("name2").value.toLowerCase();

    if (
      name1 === "ayush" ||
      name1 === "pawani" ||
      name2 === "ayush" ||
      name2 === "pawani"
    ) {
      result.textContent = `Your love score is 100%`;
      return;
    }

    const loveScore = calculateLoveScore(name1, name2);
    result.textContent = `Your love score is ${loveScore}%`;
  });
});

function calculateLoveScore(name1, name2) {
  const combinedNames = name1 + name2;

  let score = 0;

  for (let char of combinedNames) {
    score += char.charCodeAt(0);
  }

  score = score % 100;

  return score;
}
