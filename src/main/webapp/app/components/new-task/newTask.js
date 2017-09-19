define(function(require) {
    var ko = require('knockout');
    var Task = require('models/task');
    var $ = require('jquery');

    var focusInput = function() {
        $('section.new-task input').focus();
    };

    return function(params) {
        var self = this;

        self.eventAggregator = params.events;

        self.description = ko.observable();

        self.addTask = function() {
            var task = new Task(self.description());
            self.eventAggregator.trigger('task:new list:show', task);
            self.description('');
            focusInput();
        }

        self.eventAggregator.on('list:hide').then(function () {
            focusInput();
        });

        return self;
    }
});