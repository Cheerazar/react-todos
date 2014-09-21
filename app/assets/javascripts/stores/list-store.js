var ListStore = (function () {
  var _lists = [];

  return {
    createList: function (todoListTitle) {
      $.ajax({
        type: 'POST',
        url: '/lists',
        data: todoListTitle
      })
      .done(function (data) {
        this.triggerChange();
      }.bind(this))
      .fail(function (xhr) {
      }.bind(this));
    },

    getLists: function () {
      $.ajax({
        type: 'GET',
        url: '/lists'
      })
      .done(function (data) {
        _lists = data;
        this.triggerChange();
      }.bind(this))
      .fail(function (xhr) {
      });
    },

    lists: function () {
      return _lists;
    },

    addChangeEvent: function (callback) {
      $(this).on('change', callback);
    },

    triggerChange: function (data) {
      $(this).trigger('change', data);
    }
  }
}());
