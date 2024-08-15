const reviews = [
    {
        text: "This store has an amazing selection of products. Very impressive !!.",
        author: "John Doe",
        title: "Satisfied Customer",
    },
    {
        text: "I love the variety of items available, and the prices are unbeatable.",
        author: "Jane Smith",
        title: "Happy Shopper"
    },
    {
        text: "The shipping was fast, and the products were exactly as described.",
        author: "Alice Brown",
        title: "Frequent Buyer"
    },
    {
        text: "Great quality and excellent customer service. Delivered in sharp time.",
        author: "Michael White",
        title: "Returning Customer"
    },
    {
        text: "The website is easy to navigate, and the checkout process is smooth.",
        author: "Emma Johnson",
        title: "New Customer"
    }
];

let currentReviewIndex = 0;

const reviewTextElement = document.querySelector('.review-text');
const reviewAuthorElement = document.querySelector('.review-author');
const reviewTitleElement = document.querySelector('.review-title');
const reviewContentElement = document.querySelector('.review-content');

function updateReview() {
    reviewContentElement.style.transform = 'translateX(-100%)';

    setTimeout(() => {
        currentReviewIndex = (currentReviewIndex === reviews.length - 1) ? 0 : currentReviewIndex + 1;
        const currentReview = reviews[currentReviewIndex];
        reviewTextElement.textContent = currentReview.text;
        reviewAuthorElement.textContent = currentReview.author;
        reviewTitleElement.textContent = currentReview.title;

        reviewContentElement.style.transition = 'none'; 
        reviewContentElement.style.transform = 'translateX(100%)';
        setTimeout(() => {
            reviewContentElement.style.transition = 'transform 0.5s ease-in-out'; 
            reviewContentElement.style.transform = 'translateX(0)'; 
        }, 20);
    }, 500);
}

function startAutoCarousel() {
    setInterval(() => {
        updateReview();
    }, 3000); 
}


document.addEventListener("DOMContentLoaded", function() {
    
    updateReview();
    
    
    startAutoCarousel();
});
