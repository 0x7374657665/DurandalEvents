define(function (require) {
    var ko = require('knockout');
    var Events = require('durandal/events');

    var eventAggregator = {};
    Events.includeIn(eventAggregator);
    eventAggregator.on('all').then(function (event, payload) {
        console.log('Event observed:', {
            event: event,
            payload: payload,
        });
    });

    var clean = function() {
        eventAggregator.trigger('task:clean');
    };

    var cleanVisible = ko.observable(false);
    eventAggregator.on('list:show').then(function () {
        cleanVisible(true);
    });
    eventAggregator.on('list:hide').then(function () {
        cleanVisible(false);
    });


    return {
        eventAggregator: eventAggregator,
        clean: clean,
        cleanVisible: cleanVisible
    }
});