/** @jsx React.DOM */
//= require react.min
//= require react/todo-list.react
//= require react/todo-list-create.react

var TodoLists = React.createClass({
  render: function () {
    return (
      <div>
        <TodoListCreate />
        <TodoList />

      </div>
    );
  }
});

$(document).ready(function () {
  React.renderComponent(<TodoLists />, $('#todo-lists')[0]);
});
