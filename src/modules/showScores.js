const showScores = (obj, displayScores) => {
  const scores = obj.result;
  scores.forEach((userScore) => {
    const li = document.createElement('li');
    li.innerHTML = `${userScore.user}: <span>${userScore.score}</span>`;
    displayScores.appendChild(li);
  });
};

export default showScores;