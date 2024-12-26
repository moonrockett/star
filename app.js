// // Initialize app when DOM is loaded
// document.addEventListener('DOMContentLoaded', function() {
//     // Parse URL parameters
//     const urlParams = new URLSearchParams(window.location.search);
//     const userData = {
//         userId: urlParams.get('user_id'),
//         userName: urlParams.get('username'),
//         referralCount: parseInt(urlParams.get('referrals') || '0'),
//         starsEarned: parseInt(urlParams.get('stars') || '0'),
//         referralLink: urlParams.get('ref_link')
//     };

//     // Initialize UI components
//     initializeTabs();
//     initializeBuySection();
//     initializeEarnDashboard(userData);
//     hideLoadingOverlay();
// });

// // Tab Navigation
// function initializeTabs() {
//     const buySection = document.getElementById('buySection');
//     const earnSection = document.getElementById('earnSection');
//     const buyButton = document.querySelector('[data-tab="buy"]');
//     const earnButton = document.querySelector('[data-tab="earn"]');

//     // Set initial state
//     buySection.style.display = 'block';
//     earnSection.style.display = 'none';
//     buyButton.classList.add('active');
//     earnButton.classList.remove('active');

//     // Buy tab click handler
//     buyButton.addEventListener('click', () => {
//         buySection.style.display = 'block';
//         earnSection.style.display = 'none';
//         buyButton.classList.add('active');
//         earnButton.classList.remove('active');
//     });

//     // Earn tab click handler
//     earnButton.addEventListener('click', () => {
//         buySection.style.display = 'none';
//         earnSection.style.display = 'block';
//         earnButton.classList.add('active');
//         buyButton.classList.remove('active');
//     });
// }

// // Buy Section
// function initializeBuySection() {
//     let currentStars = 50;
//     const starsDisplay = document.getElementById('starsDisplay');
//     const totalPrice = document.getElementById('totalPrice');
    
//     // Star amount controls
//     document.getElementById('increaseBtn').addEventListener('click', () => {
//         currentStars += 50;
//         updateStarsDisplay();
//     });

//     document.getElementById('decreaseBtn').addEventListener('click', () => {
//         if (currentStars > 50) {
//             currentStars -= 50;
//             updateStarsDisplay();
//         }
//     });

//     function updateStarsDisplay() {
//         starsDisplay.textContent = currentStars;
//         const price = calculatePrice(currentStars);
        
//         if (currentStars >= 500) {
//             const originalPrice = (Math.ceil(currentStars / 50) * 0.13).toFixed(2);
//             totalPrice.innerHTML = `<span class="price-strike">${originalPrice} TON</span>${price} TON`;
//         } else {
//             totalPrice.textContent = `${price} TON`;
//         }
//     }

//     // Purchase button
//     document.getElementById('purchaseBtn').addEventListener('click', () => {
//         const orderId = generateOrderId();
//         showPaymentModal(currentStars, orderId);
//     });
// }

// // Earn Dashboard
// function initializeEarnDashboard(userData) {
//     if (!userData.userId) return;

//     // Update user info
//     document.getElementById('userName').textContent = userData.userName || 'N/A';
//     document.getElementById('userId').textContent = userData.userId;
//     document.getElementById('referralCount').textContent = userData.referralCount;
//     document.getElementById('starsEarned').textContent = `${userData.starsEarned} ⭐️`;
//     document.getElementById('referralLink').textContent = userData.referralLink;

//     // Update withdrawal progress
//     const progress = (userData.referralCount / 100) * 100;
//     document.getElementById('withdrawalProgress').style.width = `${Math.min(progress, 100)}%`;
    
//     // Update withdrawal status
//     const withdrawButton = document.getElementById('withdrawButton');
//     const withdrawalInfo = document.getElementById('withdrawalInfo');
    
//     if (userData.referralCount >= 100) {
//         withdrawButton.disabled = false;
//         withdrawalInfo.textContent = 'You can now withdraw your stars!';
//     } else {
//         const remaining = 100 - userData.referralCount;
//         withdrawalInfo.textContent = `${remaining} more referrals needed to withdraw`;
//     }
// }

// // Utility Functions
// function calculatePrice(stars) {
//     let basePrice = Math.ceil(stars / 50) * 0.13;
//     if (stars >= 500) {
//         basePrice *= 0.7; // 30% discount
//     }
//     return basePrice.toFixed(2);
// }

// function generateOrderId() {
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     return Array.from({length: 12}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
// }

// function hideLoadingOverlay() {
//     const loadingOverlay = document.getElementById('loadingOverlay');
//     loadingOverlay.style.opacity = '0';
//     setTimeout(() => {
//         loadingOverlay.style.display = 'none';
//     }, 300);
// }

// // Copy to Clipboard Function
// function copyToClipboard(elementId) {
//     const text = document.getElementById(elementId).textContent;
//     navigator.clipboard.writeText(text).then(() => {
//         showToast(`${elementId.replace(/([A-Z])/g, ' $1').toLowerCase()} copied to clipboard`);
//     });
// }

// function showToast(message) {
//     const toast = document.getElementById('toastNotification');
//     const toastMessage = document.getElementById('toastMessage');
//     toastMessage.textContent = message;
//     toast.classList.add('show');
//     setTimeout(() => {
//         toast.classList.remove('show');
//     }, 3000);
// } 
