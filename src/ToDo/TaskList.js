import Task from "./Task";
import PropTypes from 'prop-types'

function TaskList(props) {


    return (
        <ul className='todo-list'>
            {props.todos.map(todo => {
                return <Task
                    todo={todo}
                    key={todo.id}
                    onChange={props.onToggle}
                />
            })
            }
        </ul>
    )

}
TaskList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object.isRequired),
    onToggle: PropTypes.func.isRequired
}
export default TaskList;



