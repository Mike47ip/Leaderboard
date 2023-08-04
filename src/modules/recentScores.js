const recentScore = document.querySelector('.Recont');

const score = `
<div class="head1">
<h2 class="recentScore">Recent Scores</h2>
<button><b>Refresh</b></button>
</div>

<div class="listContainer">
<div class="List">
 <ul id="Scorelist">
  <li>Name: 100</li>
  <li>Name: 20</li>
  <li>Name: 50</li>
  <li>Name: 78</li>
  <li>Name: 125</li>
  <li>Name: 77</li>
  <li>Name: 42</li>
 </ul>
</div>
</div>`;

const displayScores = () => {
  recentScore.innerHTML = score;
};

export default displayScores;