import { todoUserInterface } from "./UI/todoList.js";
import { todoManagement } from "./lib/todoManagement.js ";

let {
    addTodo,
    removeTodo,
    findTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone
  } = todoManagement()

let {
    showTodoItem, showNumberOfDone, showNumberOfNotDone 
} = todoUserInterface()

showTodoItem(addTodo('Watch movie'), 'Watch movie')
showTodoItem(addTodo('Sleep'), 'Sleep')

showNumberOfDone(getNumberOfDone())
showNumberOfNotDone(getNumberOfNotDone())