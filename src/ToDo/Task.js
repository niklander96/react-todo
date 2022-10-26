import PropTypes from "prop-types";
import {Component} from "react";

export default class Task extends Component{


    state = {
        done: false
    }
    onSpanClick = () => {
        this.setState({
            done: true,
            editing: false
        })
    }



render() {
   const {todo, onChange} = this.props;
    const { done, important } = this.state;
    let taskItem = 'li'
    if (done) {
        taskItem += ' completed'
    }

    return (
        <li className={taskItem}>

            <div className='view'>
                <input type="checkbox"
                       className='toggle'

                />
                <label>
                        <span className='description'
                              onClick={this.onSpanClick}
                        >{todo.title}</span>
                    <span className='created'>created 5 minutes ago</span>
                </label>
                <button className='icon icon-edit'></button>
                <button className='icon icon-destroy'></button>
            </div>
            <input type="text" className="edit" value={this.props.todo.title}/>
        </li>

    )
}



}

Task.propTypes = {
    todo: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}

