function Event(name) { 
    this._handlers = [];
    this.name = name;
}
// This is a Constructor Function for Event
// There are three ways to create objects: Class Syntax, Constructor Function Syntax, and Factory Function Syntax.
// Factory Functions create a prototype object and use `Object.create` to create the object.
// Class Syntax uses the `class` keyword.
// Constructor Functions use function() with a capitalized name and assign functions on the prototype of the function.

Event.prototype.addHandler = function(handler) {
    this._handlers.push(handler);
};
// This adds the `addHandler` function to the Event prototype
// It pushes a handler to the `handlers` array defined above

Event.prototype.removeHandler = function(handler) {
    for (var i = 0; i < handlers.length; i++) {
        if (this._handlers[i] == handler) {
            this._handlers.splice(i, 1);
            break;
        }
    }
};
// This adds the `removeHandler` function to the Event prototype
// It iterates through the handlers array until it identifies the handler and then removes it

Event.prototype.fire = function(eventArgs) {
    this._handlers.forEach(function(h) {
        h(eventArgs);
    });
};
// Adds the `fire` function, which passes eventArgs to all of the handlers associated with an event
// i.e. if an event happens, all event handlers will take the eventArgs associated with the event and 'do something'

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
// Uses the Module Pattern (which namespaces an IIFE's scope) to create the eventAggregator namespaced scope
// It has the `publish` function which checks to see if an event exists and creates it if not, then fires it with the eventargs
// It has the `subscribe` function which lets you select an event to attach a handler function (your response to when the event fires) to
// It has the private function `getEvent` which uses jquery's grep (searching function) to find the event if it exists

function Cart() {
    var items = [];

    this.addItem = function(item) {
        items.push(item);
        eventAggregator.publish("itemAdded", item);
    };
}
// Constructor Function for a Cart, which adds a function inside the constructor function, even though earlier, it was added outside
// Inconsistency eh...
// The `addItem` function adds an item to the cart's `item` array and publishes the item to the "itemAdded" event

var cartView = (function() {
    eventAggregator.subscribe("itemAdded", function(eventArgs) {
        var newItem = $('<li></li>')
            .html(eventArgs.getDescription())
            .attr('id-cart', eventArgs.getId())
            .appendTo("#cart");
    });
})();
// The Cart View subscribes to the "itemAdded" event and passes an event handler function
// Which takes the eventArgs (i.e. the item) and creates a list element with the description and id, and appends it to the element with id 'cart'

var cartController = (function(cart) {
    eventAggregator.subscribe("productSelected", function(eventArgs) {
        cart.addItem(eventArgs.product);
    });
})(new Cart());
// The Cart Controller subscribes to the "productSelected" event and passes an event handler function
// This function justs adds the item to the cart whenever a product is selected

function Product(id, description) {
    this.getId = function() {
        return id;
    };
    this.getDescription = function() {
        return description;
    };
}
// Constructor Function for a cart

var products = [
    new Product(1, "Star Wars Lego Ship"),
    new Product(2, "Barbie Doll"),
    new Product(3, "Remote Control Airplane")];
// Some standard generic products

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
// The Product View uses a Module Pattern
// It creates a function `onProductSelected` which gets the product id to get the product object, then publishes it to the "productSelected" event
// which triggers the event handler function that adds the item to the cart
// which triggers the event handler function subscribing to the itemAdded event which triggers the event handler that appends it to the #cart
// Then for each product it creates a li element and adds a double click event handler to trigger everything