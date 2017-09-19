define(function (require) {
    var ko = require('knockout');
    var List = require('models/list');

    return function(params) {
        var self = this;

        self.list = new List();

        self.eventAggregator = params.events;
        self.eventAggregator.on('task:new').then(function (task) {
            self.list.add(task);
        });
        self.eventAggregator.on('task:clean').then(function () {
            self.list.clean(function (item) {
                return item.complete();
            });
            if(self.list.items().length === 0) {
                self.eventAggregator.trigger('list:hide');
            }
        });

        return self;
    }
});