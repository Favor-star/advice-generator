"use strict";
let adviceDiv = document.getElementById("advice-id");
let titleDiv = document.getElementById("title-id");
let changer = document.getElementById("icon");

function getData() {
  return new Promise((resolve, reject) => {
    fetch("https://api.adviceslip.com/advice", { mode: "cors" })
      .then((response) => {
        // console.log("Success");
        return response.json();
      })
      .then((info) => {
        // console.log(info);
        resolve(info);
      })
      .catch((error) => {
        alert(error);
        reject(error);
      });
  });
}
function displayData() {
    getData()
  .then((data) => {
      titleDiv.textContent = ` Advice  # ${data.slip.id}`
      adviceDiv.textContent = `${data.slip.advice}`;
  })
  .catch((error) => {});
}
window.onload = displayData();

  changer.addEventListener('click', displayData)

