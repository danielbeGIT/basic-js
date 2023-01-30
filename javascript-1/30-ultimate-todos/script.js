/**
 * Ultimate TODOs
 *
 * 1. Sortera todos baserat på titel
 *
 * 2. Filtrera todos så ni har två listor, en med saker som är kvar att göra,
 * och en lista med avklarade saker.
 *
 * 3. Rendera ut varje TODO's ID till DOM istället för dess array-index.
 *
 * 4. Uppdatera click-eventhandler:n så att den hämtar ID från förälderns
 * data-attribut istället för index. Använd sedan detta ID för att hitta rätt
 * TODO i `todos`-array:en.
 *
 * 5. (extra utmaning)
 * När man skapar en ny TODO, se om du kan få till en funktion som hämtar ut
 * det högsta ID som finns och tar +1 på det, och använder det talet som den
 * nya TODO:ns ID.
 *
 */

// get references to DOM elements
const todosEl = document.querySelector('#todos');
const completeEl = document.querySelector('#completed')
const newTodoFormEl = document.querySelector('#new-todo-form');

// list of todos
const todos = [
	{
		id: 1,
		title: "Eat",
		completed: false,
	},
	{
		id: 2,
		title: "Code",
		completed: true,
	},
	{
		id: 3,
		title: "Sleep",
		completed: false,
	},
	{
		id: 4,
		title: "Repeat",
		completed: false,
	},
    {
        id: 5,
        title: "Learn JavaScript",
        completed: true,
    }
];

// sort todos
todos.sort( (a, b) => {
    if (a.title < b.title) {
        return -1;
    }

    if (a.title > b.title) {
        return 1;
    }

    return 0;
});



// render TODOs to DOM
const renderTodos = () => {
    // empty UL of both lists of todos
    todosEl.innerHTML = "";
    completeEl.innerHTML = "";

    // get all unfinished todos
    const inCompleteTodos = todos.filter(todo => !todo.completed);
    // const inCompleteTodos = todos.filter(todo => {
    //     return !todo.completed;
    // });

    // get all completed todos
    const completedTodos = todos.filter(todo => todo.completed);
    // const completedTodos = todos.filter(todo => {
    //     return todo.completed;
    // });
    
    // render incomplete todos
    todosEl.innerHTML = inCompleteTodos.map(todo => {
        // Append a LI-element to the UL
        return `
            <li class="list-group-item" data-id="${todo.id}">
                ${todo.title}
                <button class="ms-2 btn btn-sm btn-danger">🤢</button>
            </li>`;
    }).join('');


    // render completed todos
    completedTodos.forEach(todo => {
        // Append a LI-element to the UL
        completeEl.innerHTML += `
            <li class="list-group-item" data-id="${todo.id}">
                ${todo.title}
                <button class="ms-2 btn btn-sm btn-danger">🤢</button>
            </li>`;
    });
};

// render (initial list of) todos
renderTodos();


newTodoFormEl.addEventListener('submit', e => {
    // stop form from being submitted to the web server
    // and hence causing a page reload
    e.preventDefault();

    const newTodoDescription = e.target.newTodo.value;

    // empty input
    e.target.newTodo.value = "";

    // find max id of todos
    /*
    let maxId = 0;
    todos.forEach(todo => {
        if (todo.id > maxId) {
            maxId = todo.id;
        }
    });
    console.log(maxId)
    */

    /*
    const maxId = todos.reduce((max, todo) => (todo.id > max) 
    ? todo.id 
    : max
    , 0);
    */

    const todoIds = todos.map(todo => todo.id);
    const maxId = (todoIds.length) 
    ? Math.max(...todoIds) 
    : 0;

    // increase maxId
    const newTodoId = maxId + 1;

    // create a object for the new todo
    const newTodo = {
        id: newTodoId,
        title: newTodoDescription,
        completed: false
    }

    // add todo to array of todos
    todos.push(newTodo);

    // render todos
    renderTodos();
});

newTodoFormEl.addEventListener('reset', e => {
    alert("good job!")
});

// get all todo-lists and attach a click-handler to each lsit
document.querySelectorAll('.todos').forEach(listEl => {
    listEl.addEventListener('click', e => {
        // check if user clicked on a LI element and removes the element
    if (e.target.tagName === "LI") {
        // find id of todo
        const todo_id = e.target.dataset.id;

        // find todo with id `todo_id` in list of todos
        const found_todo = todos.find(todo => todo.id == todo_id);
        
        // todos.find(todo => {
        //     return todo.id == todo_id;

        //     if (todo.id == todo_id) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // });

        // change completed-status of found_todo
        found_todo.completed = !found_todo.completed;
        
        // if (found_todo.completed === true) {
        //     found_todo.completed = false;
        // } else if (found_todo.completed === false) {
        //     found_todo.completed = true;
        // }

		// Render todos
        renderTodos();

    } else if (e.target.tagName === "BUTTON") {
        // how to find the flicked todo in our array
        const todo_id = e.target.parentElement.dataset.id;

        // find array-index of todo with id `todo_id`
        const found_todo_index = todos.findIndex(todo => todo.id == todo_id);

        // Remove item with index from array
		todos.splice(found_todo_index, 1);

		// Render todos
		renderTodos();
    }
    })
})






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
