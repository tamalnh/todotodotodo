import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTodo, updateTodo } from '../store/actions'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            body: '',
            newTodoList: []
         }
    }

    deletetaskHandler = (id) => {
        const text = 'are you want to delete this? '
        if(window.confirm(text)){
            this.props.deleteTodo(id)
        }
    }


    updateTaskHandler = (selectTask) => {
        
        const newTaskList =  this.props.taskList.map(task => {
            if(selectTask.id === task.id) {
                task.isEdit = true
            }            
            return task
        })

                    
        this.setState({
            body: selectTask.body,
            newTodoList: newTaskList
        })
        
        
    }

    taskChangehandler = (event) => { 
        this.setState({
            body: event.target.value
        })
 
    }

    submitUpdatedList = (event) => {
        if(event.key === 'Enter'){
            this.props.updateTodo(this.state.newTodoList)

            
        }
        
    }

    renderTaskList = ({taskList}) => {
        if(taskList.length > 0) {
            return taskList.map(task => {  
                if(task.isEdit === false){
                    return (
                        <li key={task.id} className="list-group-item list-group-item-primary py-4">
                            {task.body} 
                            <div className="float-right">
                                <span className="text-success"><i className="fas fa-check"></i></span>
                                <span className="text-warning ml-2" onClick={() => this.updateTaskHandler(task)}>
                                    <i className="fas fa-edit"></i>
                                </span>

                                <span className="text-danger ml-2" onClick={ () => this.deletetaskHandler(task.id)}>
                                    <i className="fas fa-trash"></i>
                                </span>
                            </div>
                        </li>
                    )
                } else{
                    return (
                        <input key={task.id} 
                            type="text" 
                            className="form-control" 
                            value={this.state.body}
                            onKeyPress={this.submitUpdatedList}
                            onChange={(e) => this.taskChangehandler(e)}/>
                    )
                }
            })
        }
    }


    render() { 
        console.log(this.state);
        
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <ul className="list-group"> 
                            {this.renderTaskList(this.props)} 
                        </ul>
                    </div>
                </div>
            </div>
         );
    }
}

function mapStateToProps(state){
    // console.log(state);
    return {
        taskList: state.todo
    }
    
}

function mapDispatchToprops (dispatch){
    return bindActionCreators({
        deleteTodo: deleteTodo,
        updateTodo: updateTodo
    }, dispatch)
}
 
export default connect(mapStateToProps, mapDispatchToprops)(TodoList);