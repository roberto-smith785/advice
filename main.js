var num = document.getElementById("num");
var quote = document.getElementById("quote");
var btn = document.getElementById("btn");

const getData = () => {
    fetch("https://api.adviceslip.com/advice", {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            num.innerText = data.slip.id;
            quote.innerText = '"' + data.slip.advice + '"';
        })
        .catch(error => {
            console.log(error);
        });
}

window.addEventListener("load", getData)
btn.addEventListener("click", getData);




console.log("CODE BY ROBERTO SMITH");