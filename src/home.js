export default function loadHome() {
    const content = document.getElementById('content');

    content.innerHTML = `
    <main class="main-content">
        <section class="hero">
            <div class="hero-content">
                <h1 class="hero-title">ÉCLAT</h1>
                <p class="hero-subtitle">Where innovation meets tradition</p>
            </div>
        </section>

        <section class="section about-section">
            <h2 class="section-title">Our Philosophy</h2>
            <p class="section-text">Éclat redefines modern dining with a bold approach to contemporary cuisine. Our Michelin-starred chef combines molecular gastronomy with farm-to-table freshness, creating dishes that surprise and delight.</p>
            <div class="about-highlights">
                <div class="highlight-card">
                    <i class="fas fa-seedling"></i>
                    <h3>Locally Sourced</h3>
                    <p>95% of ingredients from within 50 miles</p>
                </div>
                <div class="highlight-card">
                    <i class="fas fa-wine-glass-alt"></i>
                    <h3>Curated Pairings</h3>
                    <p>Expertly selected wine and cocktail pairings</p>
                </div>
                <div class="highlight-card">
                    <i class="fas fa-star"></i>
                    <h3>Michelin Rated</h3>
                    <p>Two stars for culinary excellence</p>
                </div>
            </div>
        </section>

        <section class="section hours-section">
            <h2 class="section-title">Experience Éclat</h2>
            <div class="hours-container">
                <div class="hours-card">
                    <h3 class="hours-title">Dining Hours</h3>
                    <ul class="hours-list">
                        <li>Tuesday - Thursday: 5PM - 10PM</li>
                        <li>Friday - Saturday: 5PM - 11PM</li>
                        <li>Sunday: 5PM - 9PM</li>
                        <li>Monday: Closed</li>
                    </ul>
                </div>
                <div class="hours-card special-events">
                    <h3 class="hours-title">Special Events</h3>
                    <div class="event">
                        <h4>Chef's Table</h4>
                        <p>Fridays at 7PM - 10 course tasting menu</p>
                    </div>
                    <div class="event">
                        <h4>Mixology Night</h4>
                        <p>Every third Wednesday - Cocktail pairings</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section location-section">
            <h2 class="section-title">Find Us</h2>
            <div class="location-grid">
                <div class="location-info">
                    <h3 class="location-title">Éclat Restaurant</h3>
                    <address>
                        250 Modernist Avenue<br>
                        Culinary District<br>
                        Metropolis, NY 10018
                    </address>
                    <p class="location-phone">
                        <i class="fas fa-phone"></i> (212) 555-ECLAT
                    </p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
                <div class="location-map">
                    <div class="map-placeholder">
                        <i class="fas fa-map-marked-alt"></i>
                        <p>Interactive map would appear here</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    `;
}