const addScore = document.querySelector('.AddScore');

const newScore = `
<h2>Add your score</h2>
<form id="form" action="">
 <input type="text" id="name" placeholder="Your name.." />
 <input type="number" id="number" placeholder="Your score.." required/>
 <div id="butt">
  <button type="submit"><b>Submit</b></button>
 </div>
</form>`;

const addNewScore = () => {
  addScore.innerHTML = newScore; // Set the innerHTML to the content of newScore
};

export default addNewScore;
