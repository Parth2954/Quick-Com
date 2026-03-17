// controllers/cart.controller.js
(function() {
    'use strict';

    angular.module('quickCommerceApp')
    .controller('CartController', ['CartService', function(CartService) {
        var vm = this;
        
        vm.getCartItems = function() {
            return CartService.getCart();
        };
        
        vm.updateQuantity = function(productId, quantity) {
            CartService.updateQuantity(productId, quantity);
        };
        
        vm.removeItem = function(productId) {
            CartService.removeFromCart(productId);
        };
        
        vm.clearCart = function() {
            CartService.clearCart();
        };
        
        vm.getTotalPrice = function() {
            return CartService.getTotalPrice();
        };
        
        vm.getTotalCount = function() {
            return CartService.getTotalCount();
        };
        
        vm.getDeliveryFee = function() {
            var total = vm.getTotalPrice();
            if (total === 0) return 0;
            return total > 20 ? 0 : 2.50;
        };
        
        vm.getGrandTotal = function() {
            return vm.getTotalPrice() + vm.getDeliveryFee();
        };
    }]);

})();
