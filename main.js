// active bar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse .collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})

// Function to Sort Products
function sortProducts() {
  const sortOption = document.getElementById("sort").value;
  const productsContainer = document.getElementById("tab-content");
  const products = Array.from(productsContainer.getElementsByClassName("product"));

  let sortedProducts = products;

  if (sortOption === "price-low-to-high") {
      sortedProducts = products.sort((a, b) => {
          return a.getAttribute("data-price") - b.getAttribute("data-price");
      });
  } else if (sortOption === "price-high-to-low") {
      sortedProducts = products.sort((a, b) => {
          return b.getAttribute("data-price") - a.getAttribute("data-price");
      });
  } else if (sortOption === "rating") {
      sortedProducts = products.sort((a, b) => {
          return b.getAttribute("data-rating") - a.getAttribute("data-rating");
      });
  }

  // Re-attach sorted products to the container
  productsContainer.innerHTML = "";
  sortedProducts.forEach(product => productsContainer.appendChild(product));
}

// Function to Filter Products by Category
function filterProducts() {
  const filterOption = document.getElementById("filter").value;
  const productsContainer = document.getElementById("tab-content");
  const products = Array.from(productsContainer.getElementsByClassName("product"));

  products.forEach(product => {
      const category = product.getAttribute("data-category");

      if (filterOption === "all" || filterOption === category) {
          product.style.display = "block";
      } else {
          product.style.display = "none";
      }
  });
}

// Initial load of products (optional)
/*window.onload = function() {
  sortProducts();  // Sort based on the default option
  filterProducts();  // Apply filter based on the default option
};*/


const reviewPopup = document.querySelector('.review-popup');
        const reviewOverlay = document.querySelector('.review-overlay');
        const reviewText = document.getElementById('review-text');
        const submitReviewButton = document.getElementById('submit-review');
        const closeReviewButton = document.getElementById('close-review');

        document.addEventListener('click', function (e) {
            if (e.target.classList.contains('write-review')) {
                currentReviewProductId = parseInt(e.target.getAttribute('data-id'));
                openReviewPopup();
            }
        });
                // Handle review popup
                function openReviewPopup() {
            reviewPopup.classList.add('active');
            reviewOverlay.classList.add('active');
        }

        function closeReviewPopup() {
            reviewPopup.classList.remove('active');
            reviewOverlay.classList.remove('active');
            reviewText.value = ''; // Clear the text area after closing
        }

        // Handle review submission
        submitReviewButton.addEventListener('click', function () {
            const review = reviewText.value.trim();
            if (review) {
                alert(`Review for Product ID ${currentReviewProductId}: ${review}`);
                closeReviewPopup();
            } else {
                alert("Please write a review before submitting.");
            }
        });

        closeReviewButton.addEventListener('click', closeReviewPopup);

// Store cart items in localStorage
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const product = this.closest('.product');
        const productId = product.getAttribute('data-id');
        const productName = product.getAttribute('data-name');
        const productPrice = product.getAttribute('data-price');

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if product is already in the cart
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({
                id: productId,
                name: productName,
                price: productPrice,
                quantity: 1
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(productName + ' has been added to the cart!');
    });
});


document.addEventListener('DOMContentLoaded', function() {
  const cartButton = document.querySelector('.add-to-cart');

  cartButton.addEventListener('click', function() {
    cartButton.classList.add('pulse');

    
    cartButton.addEventListener('animationend', function() {
      cartButton.classList.remove('pulse');
    }, { once: true });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const videoContainer = document.querySelector('.video-container');
  const playButton = document.querySelector('.play-button');
  const videoPlaceholder = document.getElementById('video-placeholder');

  playButton.addEventListener('click', function() {
      const videoId = 'dQw4w9WgXcQ'; // Replace with your YouTube video ID
      const iframe = document.createElement('iframe');

      iframe.setAttribute('src', `https://youtu.be/NYpkCxyOfWA?si=wHMN_e2C4qOv_ceb`);
      iframe.setAttribute('width', '100%');
      iframe.setAttribute('height', '315');
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      iframe.setAttribute('allowfullscreen', true);

      // Replace the thumbnail with the video player
      videoPlaceholder.appendChild(iframe);

      // Hide the video container
      videoContainer.style.display = 'none';
  });
});
