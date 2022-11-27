//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getData)

function getData(){
  const date = document.querySelector('input').value
  fetch(`https://api.nasa.gov/planetary/apod?api_key=ciOPRZIsf9D7FYlGIfgXth7j7CttJalGkDrRvlgu&date=${date}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h5').innerText = data.title;
      document.querySelector('img').src = data.url;
      document.querySelector('p').innerText = data.explanation;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
