/** @jsx React.DOM */
//= require react.min

var TodoList = React.createClass({
  render: function () {
    var todoId = 'todo-' + this.props.todo.id;
    return (
      <div>
        <h1 id={todoId}>{this.props.todo.title}</h1>
        <button onClick={this.deleteTodoList}>Delete</button>
      </div>
    );
  },

  deleteTodoList: function (e) {
    e.preventDefault();
    ListStore.deleteTodoList(this.props.todo.id)
  }
});
