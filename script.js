// new Exercise Async:
// //1. try to get 5 randomusers from https://randomuser.me/api
// //2. try to add their information into a webpage and after finishing with loading(1 sec delay) add the styles (BGcolor)

async function getUser() {
  let result = await fetch(
    "https://cors-anywhere.herokuapp.com/http://randomuser.me/api/?results=5"
  );

  var x = await result.json();
  var userArr = await x.results;
  console.log(userArr);

  var container = document.getElementById("cont");

  var counter = 0;
  var display = setInterval(() => {
    container.innerHTML += `<img src="${userArr[counter].picture.thumbnail}"> ${userArr[counter].name.first} ${userArr[counter].name.last}, ${userArr[counter].location.city} in ${userArr[counter].location.country}  <br>`;
    counter++;
    if (counter == userArr.length) {
      clearInterval(display);
    }
  }, 500);

  setTimeout(() => {
    container.style.backgroundColor = "lightblue";
    container.style.color = "white";
  }, 6000);
}

getUser();
