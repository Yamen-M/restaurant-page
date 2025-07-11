export function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const contactHero = document.createElement('section');
    contactHero.className = 'contact-hero';
    contactHero.innerHTML = `
        <div class="contact-overlay"></div>
        <div class="contact-content">
            <h1 class="contact-title">CONTACT</h1>
            <div class="contact-subtitle">
                <div class="subtitle-line"></div>
                <p>Reservations & Private Dining</p>
                <div class="subtitle-line"></div>
            </div>
        </div>
    `;
    content.appendChild(contactHero);

    const contactDetails = document.createElement('div');
    contactDetails.className = 'contact-details';
    contactDetails.innerHTML = `
        <div class="detail-group">
            <i class="fas fa-map-marker-alt"></i>
            <h3>LOCATION</h3>
            <p>250 Modernist Avenue<br>Metropolis, NY 10018</p>
        </div>
        <div class="detail-group">
            <i class="fas fa-phone"></i>
            <h3>PHONE</h3>
            <p><a href="tel:+12125553258">(212) 555-ECLAT</a></p>
        </div>
        <div class="detail-group">
            <i class="fas fa-envelope"></i>
            <h3>EMAIL</h3>
            <p><a href="mailto:reservations@eclat.com">reservations@eclat.com</a></p>
        </div>
    `;
    contactHero.appendChild(contactDetails);

    const cta = document.createElement('div');
    cta.className = 'contact-cta';
    cta.innerHTML = `
        <a href="#" class="cta-button">BOOK A TABLE</a>
        <p>For private events, please inquire <a href="#">here</a>.</p>
    `;
    contactHero.appendChild(cta);
}