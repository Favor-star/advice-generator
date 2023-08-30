"use strict";
let adviceDiv = document.getElementById("advice-id");
let titleDiv = document.getElementById("title-id");

function getData() {
  return new Promise((resolve, reject) => {
    fetch("https://api.adviceslip.com/advice", { mode: "cors" })
      .then((response) => {
        console.log("Success");
        return response.json();f
      })
      .then((info) => {
        console.log(info);
        resolve(info);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

getData()
  .then((data) => {
      titleDiv.textContent = ` Advice  # ${data.slip.id}`
      adviceDiv.textContent = `${data.slip.advice}`;
  })
  .catch((error) => {});


