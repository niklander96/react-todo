import { formatDistanceToNow } from 'date-fns';

function TaskListCompleted() {
    let timeOut = formatDistanceToNow(new Date(2022, 9, 25, 19, 14, 40),  {includeSeconds: true})
    return (
        <li className='completed'>
            <div className='view'>
                <input type="checkbox" className='toggle'/>
                <label>
                    <span className='description'>Completed task</span>
                    <span className='created'>{timeOut}</span>
                </label>
                <button className='icon icon-edit'></button>
                <button className='icon icon-destroy'></button>
            </div>
        </li>
    )
}

export default TaskListCompleted;