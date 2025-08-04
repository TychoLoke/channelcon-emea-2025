// Main application logic for ChannelCon EMEA 2025 Hotel Guide
class HotelGuide {
    constructor() {
        this.hotelGrid = document.getElementById('hotelGrid');
        this.init();
    }
    
    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.render());
        } else {
            this.render();
        }
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // External link security
        document.querySelectorAll('a[target="_blank"]').forEach(link => {
            if (!link.getAttribute('rel')) {
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }
    
    render() {
        if (!this.hotelGrid) {
            console.warn('Hotel grid container not found');
            return;
        }
        
        this.hotelGrid.innerHTML = '';
        
        // Render available hotels
        Object.entries(hotelData).forEach(([hotelId, hotel]) => {
            const hotelCard = this.createHotelCard(hotelId, hotel);
            this.hotelGrid.appendChild(hotelCard);
        });
        
        // Render unavailable hotels card
        const unavailableCard = this.createUnavailableHotelsCard();
        this.hotelGrid.appendChild(unavailableCard);
    }
    
    createHotelCard(hotelId, hotel) {
        const card = document.createElement('div');
        card.className = 'hotel-card';
        card.setAttribute('data-hotel-id', hotelId);
        card.addEventListener('click', () => this.handleHotelCardClick(hotelId));
        
        // Create badges
        const badgesHTML = hotel.badges?.map(badgeType => {
            const config = badgeConfig[badgeType];
            return config ? `<span class="badge ${config.class}">${config.text}</span>` : '';
        }).join('') || '';
        
        // Create features list
        const featuresHTML = hotel.features?.map(feature => 
            `<li>${this.escapeHtml(feature)}</li>`
        ).join('') || '';
        
        card.innerHTML = `
            <div class="hotel-name">${this.escapeHtml(hotel.name)}</div>
            ${badgesHTML}
            <div class="price ${hotel.priceClass}">${this.escapeHtml(hotel.price)}</div>
            ${hotel.priceNote ? `<div style="font-size: 0.9rem; color: #6b7280; margin-bottom: 1rem;">${hotel.priceNote}</div>` : ''}
            <div class="commute">${hotel.commute}</div>
            <ul class="features">
                ${featuresHTML}
            </ul>
        `;
        
        // Add hover effect tooltip
        card.setAttribute('title', 'Click for transport details');
        
        return card;
    }
    
    createUnavailableHotelsCard() {
        const card = document.createElement('div');
        card.className = 'hotel-card unavailable';
        
        const unavailableListHTML = unavailableHotels.map(hotel => 
            `• ${this.escapeHtml(hotel)}`
        ).join('<br>');
        
        card.innerHTML = `
            <div class="hotel-name unavailable">⚠️ Unavailable for Oct 12-15</div>
            <span class="badge" style="background: var(--accent-red);">Fully Booked</span>
            <div style="color: #6b7280; text-decoration: line-through; margin: 1rem 0;">
                ${unavailableListHTML}
            </div>
            <div style="color: var(--accent-red); font-size: 0.9rem; font-style: italic;">
                These hotels are fully booked for ChannelCon EMEA dates. Consider the available alternatives above or check nearby options.
            </div>
        `;
        
        return card;
    }
    
    handleHotelCardClick(hotelId) {
        // Only open modal for available hotels
        if (hotelData[hotelId] && hotelData[hotelId].transport) {
            openTransportModal(hotelId);
        }
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Utility functions
const utils = {
    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    // Smooth scroll to element
    scrollToElement(element, offset = 0) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

// Performance monitoring
const performance = {
    startTime: Date.now(),
    
    log(message) {
        if (console && console.log) {
            console.log(`[${Date.now() - this.startTime}ms] ${message}`);
        }
    },
    
    measure(name, fn) {
        const start = Date.now();
        const result = fn();
        this.log(`${name}: ${Date.now() - start}ms`);
        return result;
    }
};

// Error handling
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    // Could send to analytics service here
});

// Initialize the application
let hotelGuide;
document.addEventListener('DOMContentLoaded', () => {
    performance.log('DOM Content Loaded');
    hotelGuide = new HotelGuide();
    performance.log('Hotel Guide Initialized');
});

// Handle page load performance
window.addEventListener('load', () => {
    performance.log('Page Fully Loaded');
    
    // Optional: Add loading animation fade out
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(el => {
        el.style.opacity = '0';
        setTimeout(() => el.remove(), 300);
    });
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', utils.debounce(() => {
    // Could add responsive adjustments here if needed
    performance.log('Window Resized');
}, 250));