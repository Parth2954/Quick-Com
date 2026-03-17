// controllers/checkout.controller.js
(function() {
    'use strict';

    angular.module('quickCommerceApp')
    .controller('CheckoutController', ['CartService', '$location', '$timeout', function(CartService, $location, $timeout) {
        var vm = this;
        
        // If cart is empty, go back to home or cart
        if (CartService.getTotalCount() === 0) {
            $location.path('/home');
            return;
        }

        vm.shippingInfo = {};
        vm.isPlacingOrder = false;
        vm.orderPlaced = false;
        
        vm.getCartItems = function() {
            return CartService.getCart();
        };
        
        vm.getTotalPrice = function() {
            return CartService.getTotalPrice();
        };
        
        vm.getDeliveryFee = function() {
            var total = vm.getTotalPrice();
            if (total === 0) return 0;
            return total > 20 ? 0 : 2.50;
        };
        
        vm.getGrandTotal = function() {
            return vm.getTotalPrice() + vm.getDeliveryFee();
        };

        vm.placeOrder = function() {
            vm.isPlacingOrder = true;
            
            // Simulate API call for placing order
            $timeout(function() {
                vm.isPlacingOrder = false;
                vm.orderPlaced = true;
                
                // Clear cart after successful order
                CartService.clearCart();
            }, 1500);
        };
    }]);

})();
