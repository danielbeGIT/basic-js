/**
 * Vue.js Basics
 *
 */

// Create our Vue app
const app = Vue.createApp({
	data() {
		return {
			newTodoTitleInput: "",
			todos: [
				{ title: "Make coffee", completed: true },
				{ title: "Drink coffee", completed: true },
				{ title: "Drink MOAR coffee", completed: false },
				{ title: "Drink ALL THE coffee", completed: false },
			],
		}
	},
	methods: {
		createNewTodo() {
			// create new todo and push it to the list of todos
			// const newTodo = { title: this.newTodoTitleInput, completed: false }
			this.todos.push({
				title: this.newTodoTitleInput,
				completed: false
			})

			// clear new todo title input
			this.newTodoTitleInput = ""
		},

		deleteTodo(todo) {
			this.todos = this.todos.filter(t => t !== todo)
		},

		toggleTodo(todo) {
			// console.log(todo)
			todo.completed = !todo.completed
		}
	},
	computed: {
		finishedTodos() {
			// filter out all completed todos, todo with complete = true
			return this.todos.filter(todo => todo.completed)
		},

		newTodoIsValid() {
			// have to input atleast 3 or longer to be able to use button
			return this.newTodoTitleInput.length >= 3
		},

		unfinishedTodos() {
			return this.todos.filter(todo => !todo.completed)
		},

		unfinishedTodosCount() {
			console.log("Recomputing unfinishedTodoCount property...")
			// reduce method example
			return this.todos.reduce((previousValue, todo) => {
				if (todo.completed) {
					return previousValue
				}

				return previousValue + 1
			}, 0)

			// filter method example, making a new array to check how long the new one is
			/*
			const unfinishedTodos = this.todos.filter(todo => !todo.completed)
			return unfinishedTodos.length
			*/
		}
	}
})

// Mount our Vue app on the element with id `app` in the DOM
app.mount('#app')