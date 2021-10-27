// app.js

// Select the elements

const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("item");

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Show today dates
const options = { weekday: "long", month: "long", day: "numeric", year: "numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("pt-BR", options);

// add function to do

function addToDo(toDo) {

    const item = `
                <li class="item">
                    <i class="fa fa-circle-thin co" job="complete" id="0"></i>
                    <p class="text">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="0"></i>
                </li>
                `;

    const position = "beforeend";

    list.insertAdjacentHTML(position, item);

}

// Add an item to the list user the enter key

document.addEventListener('keyup', function (event) {

    if (event.keyCode === 13) {
        const toDo = input.value;

        // if the input isn't empty
        if (toDo) {
            addToDo(toDo);
        }
        input.value = "";
    }

});