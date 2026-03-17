// controllers/auth.controller.js
(function() {
    'use strict';

    angular.module('quickCommerceApp')
    .controller('AuthController', ['AuthService', '$location', '$timeout', function(AuthService, $location, $timeout) {
        var vm = this;
        
        // If already logged in, redirect to home
        if (AuthService.isLoggedIn()) {
            $location.path('/home');
            return;
        }

        vm.user = {};
        vm.errorMessage = '';
        vm.successMessage = '';
        vm.isLoading = false;

        vm.login = function() {
            vm.errorMessage = '';
            vm.isLoading = true;
            
            $timeout(function() {
                var response = AuthService.login(vm.user.email, vm.user.password);
                vm.isLoading = false;
                
                if (response.success) {
                    $location.path('/home');
                } else {
                    vm.errorMessage = response.message;
                }
            }, 500);
        };

        vm.register = function() {
            vm.errorMessage = '';
            
            if (vm.user.password !== vm.user.confirmPassword) {
                vm.errorMessage = 'Passwords do not match.';
                return;
            }
            
            vm.isLoading = true;
            
            $timeout(function() {
                var response = AuthService.register({
                    name: vm.user.name,
                    email: vm.user.email,
                    password: vm.user.password
                });
                
                vm.isLoading = false;
                
                if (response.success) {
                    vm.successMessage = 'Registration successful! Redirecting to login...';
                    $timeout(function() {
                        $location.path('/login');
                    }, 1500);
                } else {
                    vm.errorMessage = response.message;
                }
            }, 800);
        };
    }]);

})();
