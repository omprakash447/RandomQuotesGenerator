let quotbox = document.getElementById("box");
let btn = document.getElementById("btn");
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


let getjoke = function() {
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            quotbox.textContent = `${data.joke}`;

        })
        .catch(function(error) {
            console.log("cannot fetch the data from server...");
        })
}

btn.addEventListener("click", function() {
    getjoke()
})
getjoke();