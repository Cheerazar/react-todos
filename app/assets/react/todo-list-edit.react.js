/** @jsx React.DOM */
//= require react.min

var TodoListEdit = React.createClass({
  getInitialState: function() {
    return {
      showEdit: false
    };
  },

  render: function() {
    if (this.state.showEdit) {
      var editForm = (<form id="edit-list" onSubmit={this.editList}>
        <input ref="title" placeholder={this.props.todo.title} type="text" />
        <input type="submit" value="Edit Todo List" />
      </form>)
    } else {
      var editForm = '';
    }

    return (
      <div>
        {editForm}
        <button onClick={this.showEdit}>Edit</button>
      </div>
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
