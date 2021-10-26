// app.js

// Select the elements

const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Show today dates
const options = { weekday: "long", month: "long", day: "numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("pt-BR", options);
console.log(dateElement);