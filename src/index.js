import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

//const tarea = new Todo("Aprender Javascript");
//todoList.nuevoTodo( tarea );
//console.log(todoList);
//crearTodoHtml( tarea );
//localStorage.setItem('mi-key','ABC1234');

todoList.todos.forEach( todo => crearTodoHtml( todo ) );
