// Enhanced Sector Navigation with Smooth Transitions
let currentSector = 0;
const sectors = document.querySelectorAll('.sector');
const totalSectors = sectors.length;

// Function to update active sector
function updateActiveSector() {
    // Remove active class from all sectors
    sectors.forEach(sector => sector.classList.remove('active'));
    
    // Add active class to current sector
    sectors[currentSector].classList.add('active');
    
    // Add animation effect
    sectors[currentSector].style.animation = 'none';
    setTimeout(() => {
        sectors[currentSector].style.animation = 'fadeInUp 0.6s ease';
    }, 10);
}

// Auto-rotate sectors every 7 seconds
let sectorInterval = setInterval(() => {
    currentSector = (currentSector + 1) % totalSectors;
    updateActiveSector();
}, 7000);

// Pause auto-rotation when hovering over sectors
const sectorContainer = document.querySelector('.sector-container');
sectorContainer.addEventListener('mouseenter', () => {
    clearInterval(sectorInterval);
});

sectorContainer.addEventListener('mouseleave', () => {
    sectorInterval = setInterval(() => {
        currentSector = (currentSector + 1) % totalSectors;
        updateActiveSector();
    }, 7000);
});

// Enhanced Popup functionality with animations
const popup = document.getElementById('contact-popup');
const popupTitle = document.getElementById('popup-title');
const phoneNumber = document.getElementById('phone-number');
const email = document.getElementById('email');
const address = document.getElementById('address');

// Different contact information for each sector
const sectorContacts = {
    'AKARYAKIT DİNLENME TESİSİ': {
        phone: '0541 464 59 00',
        email: 'akaryakit@saygiogullari.com',
        address: 'Tekirdağ Şubesi, Türkiye'
    },
    'ZAHİRECEİLİK': {
        phone: '0542 661 53 84',
        email: 'zahire@saygiogullari.com',
        address: 'Tekirdağ Şubesi, Türkiye'
    },
    'İNŞAAT & KENTSEL DÖNÜŞÜM': {
        phone: '0541 464 59 00',
        email: 'insaat@saygiogullari.com',
        address: 'Tekirdağ Şubesi, Türkiye'
    },
    'KURTARICI VE VİNÇ HİZMETLERİ': {
        phone: '0532 413 41 70',
        email: 'kurtarici@saygiogullari.com',
        address: 'Tekirdağ Şubesi, Türkiye'
    },
    'TARIM': {
        phone: '0533 612 19 01',
        email: 'tarim@saygiogullari.com',
        address: 'Tekirdağ Şubesi, Türkiye'
    },
    'İÇ MİMARLIK': {
        phone: '0506 485 77 77',
        email: 'icmimarlik@saygiogullari.com',
        address: 'Tekirdağ Şubesi, Türkiye'
    }
};

// Open popup with sector-specific information
function openPopup(sectorName) {
    const contactInfo = sectorContacts[sectorName];
    
    if (contactInfo) {
        popupTitle.textContent = `${sectorName} - İletişim`;
        phoneNumber.textContent = contactInfo.phone;
        email.textContent = contactInfo.email;
        address.textContent = contactInfo.address;
    } else {
        popupTitle.textContent = 'İletişim Bilgileri';
        phoneNumber.textContent = '+90 555 555 55 55';
        email.textContent = 'info@saygiogullari.com';
        address.textContent = 'İstanbul, Türkiye';
    }
    
    // Enhanced popup opening animation
    popup.style.display = 'block';
    popup.style.opacity = '0';
    popup.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        popup.style.transition = 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)';
        popup.style.opacity = '1';
        popup.style.transform = 'scale(1)';
    }, 10);
    
    document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
}

// Close popup with animation
function closePopup() {
    popup.style.opacity = '0';
    popup.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }, 400);
}

// Close popup when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        closePopup();
    }
});

// Handle Escape key to close popup
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && popup.style.display === 'block') {
        closePopup();
    }
});

// Enhanced Form submission with validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !phone || !message) {
        alert('Lütfen tüm alanları doldurunuz.');
        return;
    }
    
    // Enhanced submission feedback
    const submitBtn = this.querySelector('button');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Gönderiliyor...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        submitBtn.textContent = 'Gönderildi!';
        submitBtn.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
        
        setTimeout(() => {
            alert(`Teşekkürler ${name}! Mesajınız alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.`);
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
            
            // Reset form
            this.reset();
        }, 1500);
    }, 2000);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation to elements when they come into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add hover effects to social media links
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");
    
    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
        ripple.remove();
    }
    
    button.appendChild(circle);
}

document.querySelectorAll('.contact-btn, #contact-form button').forEach(button => {
    button.addEventListener('click', createRipple);
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.7);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);