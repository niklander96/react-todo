import TaskListCompleted from "./TaskListCompleted";
import TaskListEditing from "./TaskListEditing";
import Task from "./Task";

function TaskLIst() {
    return (
        <ul className='todo-list'>
            <TaskListCompleted/>
            <TaskListEditing/>
            <Task/>
        </ul>
    )
}

export default TaskLIst;