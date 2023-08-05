const displayScores = async () => {
  // const apiKey = 'YOUR_NEW_API_KEY';  // Replace 'YOUR_NEW_API_KEY' with your actual API key
  // const requestURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores/`;
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MMQ7MBZcKSEvlBIOtnAq/scores/';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const scores = await response.json();
  return scores;
};

export default displayScores;