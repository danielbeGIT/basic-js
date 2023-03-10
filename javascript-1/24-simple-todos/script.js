/**
 * Simple TODOs
 * ## Steg 1
 * Skapa en lista av TODOs. Man ska kunna lägga till nya genom att klicka på en knapp som tar emot TODO-beskrivning genom en prompt().
 *
 * ## Steg 2
 * Gör så att det även gå att ta bort TODOs.
 *
 * ## Steg 3
 * Lägg därefter till en input-fält istället och skriv så att knappen för att lägga till TODO istället hämtar beskrivningen ifrån input-fältet.
 *
 * ## Steg 4
 * Se om du kan få till så att istället för att ta bort TODOs så blir dem överstrukna. Kan du kanske kombinera båda så att när man klickar på texten så blir dem överstrukna, men om man klickar på en knapp på varje TODO så tags dem bort?
 *
 * Exempel:
 *
 * <li>list item 1 <button>🗑</button></li>
 *
 */

// get references to DOM elements
const todosEl = document.querySelector('#todos');
// const btnAddNewTodoEl = document.querySelector('#btnAddNewTodo');
const newTodoFormEl = document.querySelector('#new-todo-form')
// const newTodoDescriptionEl = document.querySelector('#new-todo-description');

newTodoFormEl.addEventListener('submit', e => {
    // stop form from being submitted to the web server
    // and hence causing a page reload
    e.preventDefault();

    const newTodoDescription = e.target.newTodo.value;

    // empty input
    e.target.newTodo.value = "";

    // add todo to list of todos
    todosEl.innerHTML += `
        <li class="list-group-item">
            ${newTodoDescription}
            <button class="ms-2 btn btn-sm btn-danger">🤢</button>
        </li>`;
});

newTodoFormEl.addEventListener('reset', e => {
    // alert("good job!")
});

// react to when user clicks on something in our TODO list
todosEl.addEventListener(`click`, (e) => {
    // check if user clicked on a LI element and removes the element

    // this will remove any element
    // e.target.remove()

    // this will ONLY remove LI's
    if (e.target.tagName === "LI") {
        // remove element
        // e.target.remove();

        // toggle class(style) "completed" to LI
        e.target.classList.toggle('completed');

    } else if (e.target.tagName === "BUTTON") {
        // remove todo from list
        // e.target.parentElement.classList.add('completed');
        e.target.parentElement.remove();

    }

    console.log(`You clicked on a ${e.target.tagName}:`, e.target);
});





/*
// react to when user clicks events on "Add TODO" button
btnAddNewTodoEl.addEventListener('click', () => {
    // get todo to add to list of todos
    // const newTodo = prompt("What do you want to do?");
    const newTodo = newTodoDescriptionEl.value;

    // empty input
    newTodoDescriptionEl.value = "";

    // add todo to list of todos
    todosEl.innerHTML += `
        <li class="list-group-item">
            ${newTodo}
            <button class="ms-2 btn btn-sm btn-danger">🤢</button>
        </li>`;
});
*/
