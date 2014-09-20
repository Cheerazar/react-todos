var ListStore = (function () {
  return {
    createList: function (todoListTitle) {
      $.ajax({
        type: 'POST',
        url: '/lists',
        data: todoListTitle
      })
      .done(function (data) {
      })
      .fail(function (xhr) {
      })
    }
  }
}());
