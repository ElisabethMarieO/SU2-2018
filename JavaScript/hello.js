let myButton = document.querySelector("#myButton");

myButton.addEventListener("click", e => {
  console.log("Fikk klikk-event!");
  let url = "https://breaking-bad-quotes.herokuapp.com/v1/quotes";
  //let url = "https://www.metaweather.com/api/location/search/?query=oslo";
  fetch(url, {
    method: "GET"
  })
    .then(response => response.json())
    .then(json => handleResponse(json))
    .catch(error => console.error("Error: ", error));
});

function handleResponse(json) {
  let myParagraph = document.querySelector("#myParagraph");
  console.log(JSON.stringify(json[0].quote));
  myParagraph.innerHTML = json[0].quote;
  myParagraph.className = "niceParagraph"; // Change style to something nice
}
