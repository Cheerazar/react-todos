/** @jsx React.DOM */
//= require react.min

var TodoListEdit = React.createClass({displayName: 'TodoListEdit',
  getInitialState: function() {
    return {
      showEdit: false
    };
  },

  render: function() {
    if (this.state.showEdit) {
      var editForm = (React.DOM.form({id: "edit-list", onSubmit: this.editList}, 
        React.DOM.input({ref: "title", placeholder: this.props.todo.title, type: "text"}), 
        React.DOM.input({type: "submit", value: "Edit Todo List"})
      ))
    } else {
      var editForm = '';
    }

    return (
      React.DOM.div(null, 
        editForm, 
        React.DOM.button({onClick: this.showEdit}, "Edit")
      )
    );
  },

  showEdit: function (e) {
    e.preventDefault();
    this.setState({
      showEdit: true
    });
  },

  editList: function (e) {
    e.preventDefault();
    var todoListUpdate = { list: {} };
    todoListUpdate.id = this.props.todo.id;
    Object.keys(this.refs).forEach(function (ref) {
      todoListUpdate.list[ref] = this.refs[ref].getDOMNode().value;
    }.bind(this));
    this.setState({ showEdit: false });
    ListStore.updateList(todoListUpdate);
  }
});
