// Modal functionality for transport details
class TransportModal {
    constructor() {
        this.modal = document.getElementById('transportModal');
        this.modalContent = this.modal?.querySelector('.modal-content');
        this.closeBtn = this.modal?.querySelector('.modal-close');
        this.hotelNameEl = document.getElementById('modalHotelName');
        this.hotelAddressEl = document.getElementById('modalHotelAddress');
        this.transportContainer = document.getElementById('transportOptionsContainer');
        
        this.init();
    }
    
    init() {
        if (!this.modal) return;
        
        // Close button event
        this.closeBtn?.addEventListener('click', () => this.close());
        
        // Click outside to close
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });
        
        // Prevent modal content clicks from closing modal
        this.modalContent?.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen()) {
                this.close();
            }
        });
    }
    
    open(hotelId) {
        const hotel = hotelData[hotelId];
        if (!hotel) {
            console.error(`Hotel data not found for ID: ${hotelId}`);
            return;
        }
        
        try {
            this.populateContent(hotel);
            this.modal.classList.add('active');
            this.modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            
            // Focus management for accessibility
            this.closeBtn?.focus();
        } catch (error) {
            console.error('Error opening modal:', error);
        }
    }
    
    close() {
        this.modal.classList.remove('active');
        this.modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
    }
    
    isOpen() {
        return this.modal.classList.contains('active');
    }
    
    populateContent(hotel) {
        // Set hotel name and address
        if (this.hotelNameEl) {
            this.hotelNameEl.textContent = hotel.name;
        }
        if (this.hotelAddressEl) {
            this.hotelAddressEl.textContent = hotel.address;
        }
        
        // Clear existing transport options
        if (this.transportContainer) {
            this.transportContainer.innerHTML = '';
        }
        
        // Populate transport options
        hotel.transport?.forEach(option => {
            const optionEl = this.createTransportOption(option);
            this.transportContainer?.appendChild(optionEl);
        });
    }
    
    createTransportOption(option) {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'transport-option';
        
        const headerDiv = document.createElement('div');
        headerDiv.className = 'transport-header';
        
        const iconDiv = document.createElement('div');
        iconDiv.className = 'transport-icon';
        iconDiv.textContent = option.icon;
        
        const titleEl = document.createElement('h4');
        titleEl.className = 'transport-title';
        titleEl.textContent = option.title;
        
        headerDiv.appendChild(iconDiv);
        headerDiv.appendChild(titleEl);
        
        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'transport-details';
        
        option.details?.forEach(detail => {
            const detailBox = document.createElement('div');
            detailBox.className = 'detail-box';
            
            const labelEl = document.createElement('div');
            labelEl.className = 'detail-label';
            labelEl.textContent = detail.label;
            
            const valueEl = document.createElement('div');
            valueEl.className = `detail-value ${detail.class || ''}`;
            valueEl.textContent = detail.value;
            
            detailBox.appendChild(labelEl);
            detailBox.appendChild(valueEl);
            detailsDiv.appendChild(detailBox);
        });
        
        optionDiv.appendChild(headerDiv);
        optionDiv.appendChild(detailsDiv);
        
        return optionDiv;
    }
}

// Initialize modal when DOM is loaded
let transportModal;
document.addEventListener('DOMContentLoaded', () => {
    transportModal = new TransportModal();
});

// Global function for opening modal (for backward compatibility)
function openTransportModal(hotelId) {
    if (transportModal) {
        transportModal.open(hotelId);
    } else {
        console.error('Transport modal not initialized');
    }
}

// Global function for closing modal
function closeModal() {
    if (transportModal) {
        transportModal.close();
    }
}
