// app.js
(function() {
    'use strict';

    angular.module('quickCommerceApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'HomeController',
                controllerAs: 'homeCtrl'
            })
            .when('/cart', {
                templateUrl: 'views/cart.html',
                controller: 'CartController',
                controllerAs: 'cartCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'AuthController',
                controllerAs: 'authCtrl'
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'AuthController',
                controllerAs: 'authCtrl'
            })
            .when('/checkout', {
                templateUrl: 'views/checkout.html',
                controller: 'CheckoutController',
                controllerAs: 'checkoutCtrl',
                resolve: {
                    auth: ['AuthService', '$location', function(AuthService, $location) {
                        if (!AuthService.isLoggedIn()) {
                            $location.path('/login');
                            return false;
                        }
                        return true;
                    }]
                }
            })
            .otherwise({
                redirectTo: '/home'
            });
    }])
    .run(['$rootScope', '$location', 'AuthService', function($rootScope, $location, AuthService) {
        // Global route change event to handle auth if needed outside of resolve
        $rootScope.$on('$routeChangeStart', function(event, next, current) {
            // Additional route protection logic if necessary
        });
    }]);

})();
