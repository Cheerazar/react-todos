/** @jsx React.DOM */
//= require react.min
//= require react/todo-list.react

var TodoLists = React.createClass({
  render: function () {
    return (
      <div>
        <TodoList />

      </div>
    );
  }
});

$(document).ready(function () {
  React.renderComponent(<TodoLists />, $('#todo-lists')[0]);
});
