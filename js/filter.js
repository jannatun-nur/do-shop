

const priceFilter = document.getElementById('price-filter');
const ratingFilter = document.getElementById('rating-filter');
const productCards = document.querySelectorAll('.product-card');

function filterProducts() {
    const priceValue = priceFilter.value;
    const ratingValue = parseInt(ratingFilter.value, 10);

    productCards.forEach(card => {
        const cardPrice = parseFloat(card.getAttribute('data-price'));
        const cardRating = parseInt(card.getAttribute('data-rating'), 10);

        let priceMatch = false;
        if (priceValue === 'all') {
            priceMatch = true;
        } else if (priceValue === '200-') {
            priceMatch = cardPrice > 200;
        } else {
            const [minPrice, maxPrice] = priceValue.split('-').map(Number);
            priceMatch = cardPrice >= minPrice && cardPrice <= maxPrice;
        }

        const ratingMatch = ratingValue === 0 || cardRating >= ratingValue;

        if (priceMatch && ratingMatch) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}


priceFilter.addEventListener('change', filterProducts);
ratingFilter.addEventListener('change', filterProducts);


filterProducts();
