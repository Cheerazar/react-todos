/** @jsx React.DOM */
//= require react.min
//= require react/todo-list.react
//= require react/todo-list-create.react
//= require stores/list-store

var TodoLists = React.createClass({
  getInitialState: function() {
    return {
      todoLists: ListStore.lists()
    };
  },

  componentDidMount: function() {
    ListStore.addChangeEvent(function () {
      this.setState({
        todoLists: ListStore.lists()
      });
    }.bind(this));
    ListStore.getLists();
  },

  render: function () {
    var todoLists = [];
    this.state.todoLists.forEach(function (todo) {
      todoLists.push(<TodoList todo={todo} />);
    });
    return (
      <div>
        <TodoListCreate />
        {todoLists}
      </div>
    );
  }
});

$(document).ready(function () {
  React.renderComponent(<TodoLists />, $('#todo-lists')[0]);
});
