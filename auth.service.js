// services/auth.service.js
(function() {
    'use strict';

    angular.module('quickCommerceApp')
    .factory('AuthService', ['$window', function($window) {
        var currentUser = null;
        var USER_STORAGE_KEY = 'qc_users';
        var CURRENT_USER_KEY = 'qc_current_user';

        // Load current user from local storage on init
        var storedUser = $window.localStorage.getItem(CURRENT_USER_KEY);
        if (storedUser) {
            currentUser = JSON.parse(storedUser);
        }

        function getUsers() {
            var users = $window.localStorage.getItem(USER_STORAGE_KEY);
            return users ? JSON.parse(users) : [];
        }

        function saveUsers(users) {
            $window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users));
        }

        return {
            register: function(user) {
                var users = getUsers();
                // Check if email exists
                var exists = users.find(function(u) { return u.email === user.email; });
                if (exists) {
                    return { success: false, message: 'Email already registered.' };
                }
                
                users.push(user);
                saveUsers(users);
                return { success: true };
            },
            
            login: function(email, password) {
                var users = getUsers();
                var user = users.find(function(u) { 
                    return u.email === email && u.password === password; 
                });
                
                if (user) {
                    currentUser = { name: user.name, email: user.email };
                    $window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
                    return { success: true };
                } else {
                    return { success: false, message: 'Invalid email or password.' };
                }
            },
            
            logout: function() {
                currentUser = null;
                $window.localStorage.removeItem(CURRENT_USER_KEY);
            },
            
            isLoggedIn: function() {
                return currentUser !== null;
            },
            
            getCurrentUser: function() {
                return currentUser;
            }
        };
    }]);

})();
