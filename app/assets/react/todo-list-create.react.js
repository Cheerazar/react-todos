/** @jsx React.DOM */
//= require react.min
//= require stores/list-store

var TodoListCreate = React.createClass({
  render: function () {
    return (
      <form id="create-list" onSubmit={this.createList}>
        <input ref="title" placeholder="Todo List Title" type="text" />
        <input type="submit" value="Create Todo List" />
      </form>
    );
  },

  createList: function (e) {
    e.preventDefault();

  }
});

