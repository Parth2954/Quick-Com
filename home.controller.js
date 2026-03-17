// controllers/home.controller.js
(function() {
    'use strict';

    angular.module('quickCommerceApp')
    .controller('HomeController', ['ProductService', 'CartService', '$timeout', function(ProductService, CartService, $timeout) {
        var vm = this;
        
        vm.products = [];
        vm.categories = [];
        vm.recommended = [];
        
        vm.searchQuery = '';
        vm.selectedCategory = 'All';
        
        vm.isLoading = true;
        
        // Simulate network delay for loading state
        $timeout(function() {
            vm.products = ProductService.getAllProducts();
            vm.categories = ['All'].concat(ProductService.getCategories());
            vm.recommended = ProductService.getRecommendedProducts();
            vm.isLoading = false;
        }, 300); // 300ms mock delay
        
        vm.selectCategory = function(category) {
            vm.selectedCategory = category;
        };
        
        vm.filterProducts = function(product) {
            // Category Filter
            var categoryMatch = vm.selectedCategory === 'All' || product.category === vm.selectedCategory;
            // Search Filter
            var searchMatch = !vm.searchQuery || product.name.toLowerCase().indexOf(vm.searchQuery.toLowerCase()) !== -1;
            
            return categoryMatch && searchMatch;
        };
        
        vm.addToCart = function(product) {
            CartService.addToCart(product);
            
            // Simple visual feedback
            product.added = true;
            $timeout(function() {
                product.added = false;
            }, 1000);
        };
    }]);

})();
