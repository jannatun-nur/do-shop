document.addEventListener('DOMContentLoaded', function () {
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const ratingFilter = document.getElementById('rating-filter');
    const productCards = document.querySelectorAll('.product-card');

    function filterProducts() {
        const selectedCategory = categoryFilter.value;
        const selectedPriceRange = priceFilter.value;
        const selectedRating = ratingFilter.value;

        productCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const price = parseFloat(card.getAttribute('data-price'));
            const rating = parseFloat(card.getAttribute('data-rating'));

            let isCategoryMatch = selectedCategory === 'all' || category === selectedCategory;
            let isPriceMatch = false;
            let isRatingMatch = selectedRating === 'all' || rating >= selectedRating;

            switch (selectedPriceRange) {
                case 'all':
                    isPriceMatch = true;
                    break;
                case '0-25':
                    isPriceMatch = price >= 0 && price <= 25;
                    break;
                case '25-50':
                    isPriceMatch = price > 25 && price <= 50;
                    break;
                case '50-100':
                    isPriceMatch = price > 50 && price <= 100;
                    break;
                case '100-200':
                    isPriceMatch = price > 100 && price <= 200;
                    break;
                case '200-':
                    isPriceMatch = price > 200;
                    break;
            }

            if (isCategoryMatch && isPriceMatch && isRatingMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
    ratingFilter.addEventListener('change', filterProducts);

    // Initialize the filter on page load
    filterProducts();
});
