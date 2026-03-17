// services/product.service.js
(function() {
    'use strict';

    angular.module('quickCommerceApp')
    .factory('ProductService', [function() {
        
        // Static Mock Data for 15-20 products
        var categories = ['Fruits', 'Vegetables', 'Snacks', 'Beverages', 'Dairy'];
        
        var products = [
            // Fruits
            { id: 1, name: 'Fresh Bananas (1 Dozen)', price: 2.50, category: 'Fruits', image: 'https://images.unsplash.com/photo-1571501712815-38ceb26fb516?auto=format&fit=crop&w=400&q=80', recommended: true },
            { id: 2, name: 'Red Apples (1 kg)', price: 3.20, category: 'Fruits', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6faa6?auto=format&fit=crop&w=400&q=80', recommended: false },
            { id: 3, name: 'Nagpur Oranges (1 kg)', price: 4.00, category: 'Fruits', image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=400&q=80', recommended: true },
            { id: 4, name: 'Green Grapes (500g)', price: 3.50, category: 'Fruits', image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=400&q=80', recommended: false },
            
            // Vegetables
            { id: 5, name: 'Fresh Tomatoes (1 kg)', price: 1.80, category: 'Vegetables', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80', recommended: true },
            { id: 6, name: 'Potatoes (2 kg)', price: 2.00, category: 'Vegetables', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80', recommended: false },
            { id: 7, name: 'Onions (1 kg)', price: 1.50, category: 'Vegetables', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=400&q=80', recommended: false },
            { id: 8, name: 'Fresh Spinach (1 bunch)', price: 0.99, category: 'Vegetables', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=400&q=80', recommended: true },
            
            // Snacks
            { id: 9, name: 'Potato Chips - Salted', price: 1.50, category: 'Snacks', image: 'https://images.unsplash.com/photo-1566478989037-eade3f7ceabe?auto=format&fit=crop&w=400&q=80', recommended: true },
            { id: 10, name: 'Chocolate Chip Cookies', price: 2.20, category: 'Snacks', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80', recommended: false },
            { id: 11, name: 'Mixed Nuts (200g)', price: 5.50, category: 'Snacks', image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=400&q=80', recommended: true },
            { id: 12, name: 'Popcorn - Movie Butter', price: 1.50, category: 'Snacks', image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=400&q=80', recommended: false },
            
            // Beverages
            { id: 13, name: 'Orange Juice (1L)', price: 3.50, category: 'Beverages', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80', recommended: true },
            { id: 14, name: 'Cola Soda (6 Pack)', price: 4.99, category: 'Beverages', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80', recommended: false }, // Placeholder
            { id: 15, name: 'Mineral Water (1L)', price: 0.99, category: 'Beverages', image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=400&q=80', recommended: false },
            
            // Dairy
            { id: 16, name: 'Whole Milk (1 Gallon)', price: 3.80, category: 'Dairy', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=400&q=80', recommended: true },
            { id: 17, name: 'Cheddar Cheese (200g)', price: 4.50, category: 'Dairy', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=400&q=80', recommended: true },
            { id: 18, name: 'Greek Yogurt (500g)', price: 3.20, category: 'Dairy', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80', recommended: false },
            { id: 19, name: 'Butter (250g)', price: 2.80, category: 'Dairy', image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=400&q=80', recommended: false }
        ];

        return {
            getAllProducts: function() {
                return products;
            },
            
            getCategories: function() {
                return categories;
            },
            
            getRecommendedProducts: function() {
                return products.filter(function(p) { return p.recommended; });
            }
        };
    }]);

})();
