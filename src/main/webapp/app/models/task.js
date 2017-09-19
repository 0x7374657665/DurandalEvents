define(function(require) {
    var ko = require('knockout');

    return function(desc) {
        var self = this;

        self.description = ko.observable(desc);
        self.id = +(new Date());
        self.complete = ko.observable(false);

        return self;
    }

});