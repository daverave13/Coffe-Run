(function (window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function formHandler(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  formHandler.prototype.addSubmitHandler = function (fn) {
    console.log('Setting submit handler to form');
    this.$formElement.on('submit', function (event) {
      event.preventDefault();

      var data = {};
      $(this).serializeArray().forEach(function (item) {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(data);
      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  };

  App.formHandler = formHandler;
  window.App = App;
})(window);
