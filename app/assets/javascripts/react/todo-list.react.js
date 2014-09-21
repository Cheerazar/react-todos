/** @jsx React.DOM */
//= require react.min
//= require react/todo-list-edit.react

var TodoList = React.createClass({displayName: 'TodoList',
  render: function () {
    var todoId = 'todo-' + this.props.todo.id;
    return (
      React.DOM.div(null, 
        React.DOM.h1({id: todoId}, this.props.todo.title), 
        TodoListEdit({todo: this.props.todo}), 
        React.DOM.button({onClick: this.deleteTodoList}, "Delete")
      )
    );
  },

  deleteTodoList: function (e) {
    e.preventDefault();
    ListStore.deleteTodoList(this.props.todo.id)
  }
});
