// services/cart.service.js
(function() {
    'use strict';

    angular.module('quickCommerceApp')
    .factory('CartService', ['$window', '$rootScope', function($window, $rootScope) {
        var cart = [];
        var CART_STORAGE_KEY = 'qc_cart';

        // Load cart from local storage
        var storedCart = $window.localStorage.getItem(CART_STORAGE_KEY);
        if (storedCart) {
            cart = JSON.parse(storedCart);
        }

        function saveCart() {
            $window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
            $rootScope.$broadcast('cartUpdated');
        }

        return {
            getCart: function() {
                return cart;
            },
            
            addToCart: function(product) {
                var existingItem = cart.find(function(item) { return item.product.id === product.id; });
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({
                        product: product,
                        quantity: 1
                    });
                }
                saveCart();
            },
            
            removeFromCart: function(productId) {
                cart = cart.filter(function(item) { return item.product.id !== productId; });
                saveCart();
            },
            
            updateQuantity: function(productId, quantity) {
                var item = cart.find(function(i) { return i.product.id === productId; });
                if (item) {
                    if (quantity <= 0) {
                        this.removeFromCart(productId);
                    } else {
                        item.quantity = quantity;
                        saveCart();
                    }
                }
            },
            
            clearCart: function() {
                cart = [];
                saveCart();
            },
            
            getTotalCount: function() {
                return cart.reduce(function(total, item) {
                    return total + item.quantity;
                }, 0);
            },
            
            getTotalPrice: function() {
                return cart.reduce(function(total, item) {
                    return total + (item.product.price * item.quantity);
                }, 0);
            }
        };
    }]);

})();
