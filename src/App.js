import React from "react";
import NewTaskForm from "./ToDo/NewTaskForm";
import Footer from "./ToDo/Footer";
import TaskList from "./ToDo/TaskList";


function App() {
    let todos = [
        {id: 1, completed: false, title: 'Complete task'},
        {id: 2, completed: false, title: 'Editing task'},
        {id: 3, completed: false, title: 'Active task'},
    ];
    function toggleTodo(id) {
       todos = todos.map(todo => {
           if (todo.id === id) {
               todo.completed = !todo.completed
           }
           return todo
       })
    }
            return  (
            <section className='todoapp'>
                <NewTaskForm/>
                <section className='main'>
                    <TaskList todos={todos} onToggle={toggleTodo} />
                    <Footer />

                </section>
            </section>
        )
   }
export default App;

