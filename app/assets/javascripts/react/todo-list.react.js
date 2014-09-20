/** @jsx React.DOM */
//= require react.min

var TodoList = React.createClass({displayName: 'TodoList',
  render: function () {
    return (
      React.DOM.div(null, 
        React.DOM.h1(null, "Render list 1")
      )
    );
  }
});
