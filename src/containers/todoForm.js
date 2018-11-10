import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uniqId from 'uniqid';
import {addTodo} from '../store/actions'

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            body: '',
            isEdit: false
         }
    }

    inputChangeHandler = (event) => {
        this.setState({
            body: event.target.value
        })

    }

    formSubmitHandler = (e) => {
        e.preventDefault();  
        const {body, isEdit} = this.state
        const id = uniqId()
        this.props.addTodo({id, body, isEdit})

        this.setState({
            body: ''
        })
    }



    render() {
 
        return ( 
            <div className="container">
                <div className="row py-3">
                    <div className="col-sm-8 offset-sm-2">
                        <form className="form-group d-flex" onSubmit={this.formSubmitHandler}>
                            <input type="text" 
                                className="form-control" 
                                placeholder="add todo..." 
                                value={this.state.body}
                                onChange={this.inputChangeHandler}/>
                            <button className="btn btn-dark ml-1" ><i className="fas fa-plus"></i></button>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}

function mapStateToProps (state) { 
    return{
        todoList: state.todo
    }
}

function mapDispatchToProps (dispatch) {

    return bindActionCreators({
        addTodo: addTodo
    }, dispatch)
    
}
 
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);