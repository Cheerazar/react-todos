/** @jsx React.DOM */
//= require react.min
//= require react/todo-list.react
//= require react/todo-list-create.react

var TodoLists = React.createClass({displayName: 'TodoLists',
  render: function () {
    return (
      React.DOM.div(null, 
        TodoListCreate(null), 
        TodoList(null)

      )
    );
  }
});

$(document).ready(function () {
  React.renderComponent(TodoLists(null), $('#todo-lists')[0]);
});
