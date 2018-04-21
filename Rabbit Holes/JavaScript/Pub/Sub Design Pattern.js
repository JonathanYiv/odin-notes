function Event(name) {
    this._handlers = [];
    this.name = name;
}
Event.prototype.addHandler = function(handler) {
    this._handlers.push(handler);
};
Event.prototype.removeHandler = function(handler) {
    for (var i = 0; i < handlers.length; i++) {
        if (this._handlers[i] == handler) {
            this._handlers.splice(i, 1);
            break;
        }
    }
};
Event.prototype.fire = function(eventArgs) {
    this._handlers.forEach(function(h) {
        h(eventArgs);
    });
};

var eventAggregator = (function() {
    var events = [];

    function getEvent(eventName) {
        return $.grep(events, function(event) {
            return event.name === eventName;
        })[0];
    }

    return {
        publish: function(eventName, eventArgs) {
            var event = getEvent(eventName);

            if (!event) {
                event = new Event(eventName);
                events.push(event);
            }
            event.fire(eventArgs);
        },

        subscribe: function(eventName, handler) {
            var event = getEvent(eventName);

            if (!event) {
                event = new Event(eventName);
                events.push(event);
            }

            event.addHandler(handler);
        }
    };
})();

function Cart() {
    var items = [];

    this.addItem = function(item) {
        items.push(item);
        eventAggregator.publish("itemAdded", item);
    };
}

var cartView = (function() {
    eventAggregator.subscribe("itemAdded", function(eventArgs) {
        var newItem = $('<li></li>')
            .html(eventArgs.getDescription())
            .attr('id-cart', eventArgs.getId())
            .appendTo("#cart");
    });
})();

var cartController = (function(cart) {
    eventAggregator.subscribe("productSelected", function(eventArgs) {
        cart.addItem(eventArgs.product);
    });
})(new Cart());

function Product(id, description) {
    this.getId = function() {
        return id;
    };
    this.getDescription = function() {
        return description;
    };
}

var products = [
    new Product(1, "Star Wars Lego Ship"),
    new Product(2, "Barbie Doll"),
    new Product(3, "Remote Control Airplane")];

var productView = (function() {
    function onProductSelected() {
        var productId = $(this).attr('id');
        var product = $.grep(products, function(x) {
            return x.getId() == productId;
        })[0];
        eventAggregator.publish("productSelected", {
            product: product
        });
    }

    products.forEach(function(product) {
        var newItem = $('<li></li>')
            .html(product.getDescription())
            .attr('id', product.getId())
            .dblclick(onProductSelected)
            .appendTo("#products");
    });
})();

// I'll write an explanation of how this works for self-reference later