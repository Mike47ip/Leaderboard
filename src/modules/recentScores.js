const recentScore = document.querySelector('.Recont');

const score = `
<section>
 <div class="head1">
  <h2 class="recentScore">Recent Scores</h2>
  <button id="refresh"><b>Refresh</b></button>
 </div>

 <ul id="Scorelist"></ul>
</section>`;

const recentScores = () => {
  recentScore.innerHTML = score;
};

export default recentScores;