/** @jsx React.DOM */
//= require react.min
//= require react/todo-list.react
//= require react/todo-list-create.react
//= require stores/list-store

var TodoLists = React.createClass({displayName: 'TodoLists',
  getInitialState: function() {
    return {
      todoLists: ListStore.lists()
    };
  },

  componentDidMount: function() {
    $(ListStore).on('change', function () {
      this.setState({
        todoLists: ListStore.lists()
      });
    }.bind(this));
    ListStore.getLists();
  },

  render: function () {
    var todoLists = [];
    this.state.todoLists.forEach(function (todo) {
      todoLists.push(TodoList({todo: todo}));
    });
    return (
      React.DOM.div(null, 
        TodoListCreate(null), 
        todoLists
      )
    );
  }
});

$(document).ready(function () {
  React.renderComponent(TodoLists(null), $('#todo-lists')[0]);
});
