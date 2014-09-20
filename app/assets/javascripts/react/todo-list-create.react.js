/** @jsx React.DOM */
//= require react.min
//= require stores/list-store

var TodoListCreate = React.createClass({displayName: 'TodoListCreate',
  render: function () {
    return (
      React.DOM.form({id: "create-list", onSubmit: this.createList}, 
        React.DOM.input({ref: "title", placeholder: "Todo List Title", type: "text"}), 
        React.DOM.input({type: "submit", value: "Create Todo List"})
      )
    );
  },

  createList: function (e) {
    e.preventDefault();

  }
});

