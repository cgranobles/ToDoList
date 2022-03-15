import { Todo } from "./todo.class";


export class TodoList {
    
    constructor() {
        
        //this.todos = [];
        this.cargarLocalStorage();
        this.contarPendientes();

    }
    nuevoTodo( todo ){
        this.todos.push( todo );
        this.guardarLocalStorage();
        this.contarPendientes();
    }

    eliminarTodo( id ){
        
        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarLocalStorage();
        this.contarPendientes();
    }

    marcarCompletado( id ){

        for( const todo of this.todos ){
            
            if( todo.id == id ){
                
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                this.contarPendientes();
                break;
            }
        }
    }

    eliminarCompletados(){
        
        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();
        this.contarPendientes();
    
    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){

        this.todos = ( localStorage.getItem('todo')) 
                        ? JSON.parse(localStorage.getItem('todo')) 
                        : this.todos = [];

        this.todos = this.todos.map( obj => Todo.fromJson( obj ));
    
    }

    contarPendientes(){
        let contarPendientes = 0;
        for( const todo of this.todos ){
            
            if( todo.completado === false ){
                contarPendientes++;
                this.guardarLocalStorage();
            }
        }
        
        return contarPendientes;
    }
}