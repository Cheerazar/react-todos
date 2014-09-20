/** @jsx React.DOM */
//= require react.min
//= require react/todo-list.react

var TodoLists = React.createClass({displayName: 'TodoLists',
  render: function () {
    return (
      React.DOM.div(null, 
        TodoList(null)

      )
    );
  }
});

$(document).ready(function () {
  React.renderComponent(TodoLists(null), $('#todo-lists')[0]);
});
