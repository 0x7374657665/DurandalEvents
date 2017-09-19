define(function(require) {
    var ko = require('knockout');

    return function() {
        var self = this;

        self.items = ko.observableArray([]);

        self.add = function(item) {
            self.items.push(item);
            console.log('pushed ', item);
        }

        self.clean = function(filter) {
            self.items.remove(filter);
        }

        return self;
    }

});