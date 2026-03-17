// controllers/main.controller.js
(function() {
    'use strict';

    angular.module('quickCommerceApp')
    .controller('MainController', ['AuthService', 'CartService', '$scope', '$location', function(AuthService, CartService, $scope, $location) {
        var vm = this;
        
        vm.isLoggedIn = function() {
            return AuthService.isLoggedIn();
        };
        
        vm.currentUser = function() {
            return AuthService.getCurrentUser();
        };
        
        vm.logout = function() {
            AuthService.logout();
            $location.path('/login');
        };
        
        vm.cartCount = function() {
            return CartService.getTotalCount();
        };

        // Listen for route changes to verify auth in real time
        $scope.$on('$routeChangeStart', function(event, next, current) {
            // Can handle pre-flight logic here if needed
        });
    }]);

})();
