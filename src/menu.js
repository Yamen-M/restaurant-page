export function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuHero = document.createElement('section');
    menuHero.className = 'menu-hero';
    menuHero.innerHTML = `
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h2 class="hero-title">Our Menu</h2>
        <div class="hero-subtitle">
          <div class="subtitle-line"></div>
          <p>Seasonal • Artisanal • Inspired</p>
          <div class="subtitle-line"></div>
        </div>
        <div class="scroll-hint">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    `;
    content.prepend(menuHero);

    const gradientOverlay = document.createElement('div');
    gradientOverlay.className = 'dynamic-gradient-overlay';
    menuHero.appendChild(gradientOverlay);

    const menuSection = document.createElement('section');
    menuSection.className = 'section menu-section';

    const title = document.createElement('h2');
    title.className = 'section-title menu-title';
    title.textContent = 'Our Menu';
    title.style.paddingBottom = '10px';
    menuSection.appendChild(title);

    const categoriesContainer = document.createElement('div');
    categoriesContainer.className = 'menu-categories';

    const categories = [
        {
            name: 'Appetizers',
            items: [
                {
                    name: 'Truffle Arancini',
                    description: 'Crispy risotto balls with black truffle essence',
                    ingredients: 'Arborio rice, black truffle, mozzarella, breadcrumbs',
                    price: '$14',
                    image: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
                    accent: '#8B5A2B'
                },
                {
                    name: 'Tuna Tartare',
                    description: 'Fresh yellowfin tuna with avocado mousse',
                    ingredients: 'Sushi-grade tuna, avocado, yuzu, sesame oil',
                    price: '$18',
                    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
                    accent: '#E63946'
                },
                {
                    name: 'Burrata Salad',
                    description: 'Creamy burrata with heirloom tomatoes',
                    ingredients: 'Fresh burrata, cherry tomatoes, basil, balsamic glaze',
                    price: '$16',
                    image: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
                    accent: '#F4A261'
                }
            ]
        },
        {
            name: 'Main Courses',
            items: [
                {
                    name: 'Filet Mignon',
                    description: '8oz grass-fed beef with red wine reduction',
                    ingredients: 'Beef tenderloin, shallots, thyme, red wine',
                    price: '$42',
                    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
                    accent: '#A8DADC'
                },
                {
                    name: 'Pan-Seared Salmon',
                    description: 'Wild-caught salmon with lemon beurre blanc',
                    ingredients: 'Salmon fillet, butter, lemon, white wine',
                    price: '$36',
                    image: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
                    accent: '#1D3557'
                },
                {
                    name: 'Mushroom Risotto',
                    description: 'Creamy arborio rice with wild mushrooms',
                    ingredients: 'Arborio rice, wild mushrooms, parmesan, white wine',
                    price: '$26',
                    image: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
                    accent: '#6D6875'
                }
            ]
        },
        {
            name: 'Sides',
            items: [
                {
                    name: 'Truffle Fries',
                    description: 'Hand-cut fries with truffle aioli',
                    ingredients: 'Russet potatoes, truffle oil, garlic, parsley',
                    price: '$12',
                    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
                    accent: '#B5838D'
                },
                {
                    name: 'Grilled Asparagus',
                    description: 'Seasonal asparagus with hollandaise',
                    ingredients: 'Fresh asparagus, butter, egg yolks, lemon',
                    price: '$10',
                    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
                    accent: '#588157'
                }
            ]
        },
        {
            name: 'Desserts',
            items: [
                {
                    name: 'Chocolate Soufflé',
                    description: 'Warm chocolate soufflé with vanilla ice cream',
                    ingredients: 'Dark chocolate, eggs, sugar, vanilla bean',
                    price: '$14',
                    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1527&q=80',
                    accent: '#6D4C41'
                },
                {
                    name: 'Crème Brûlée',
                    description: 'Classic vanilla custard with caramelized sugar',
                    ingredients: 'Heavy cream, vanilla bean, egg yolks, sugar',
                    price: '$12',
                    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
                    accent: '#FFD166'
                }
            ]
        },
        {
            name: 'Drinks',
            items: [
                {
                    name: 'Signature Cocktails',
                    description: 'Seasonal craft cocktails with premium spirits',
                    ingredients: '',
                    price: '$14-18',
                    image: 'https://images.unsplash.com/photo-1551751299-1b51cab2694c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
                    accent: '#EF476F'
                },
                {
                    name: 'Wine Selection',
                    description: 'Curated international wine pairings',
                    ingredients: '',
                    price: '$12-25/glass',
                    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
                    accent: '#6A4C93'
                }
            ]
        }
    ];

    // Create category elements
    categories.forEach((category, index) => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'menu-category';
        categoryElement.style.cssText = `--category-accent: ${category.items[0].accent}`;

        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = category.name;
        categoryElement.appendChild(categoryTitle);

        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'menu-items';

        category.items.forEach((item, itemIndex) => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.style.animationDelay = `${index * 0.1 + itemIndex * 0.05}s`;

            const itemImage = document.createElement('div');
            itemImage.className = 'item-image';
            itemImage.style.backgroundImage = `url(${item.image})`;

            const itemDetails = document.createElement('div');
            itemDetails.className = 'item-details';

            const itemName = document.createElement('h4');
            itemName.className = 'item-name';
            itemName.style.color = item.accent;
            itemName.textContent = item.name;

            const itemDescription = document.createElement('p');
            itemDescription.className = 'item-description';
            itemDescription.textContent = item.description;

            const itemIngredients = document.createElement('p');
            itemIngredients.className = 'item-ingredients';
            itemIngredients.innerHTML = item.ingredients
                ? `<strong>Ingredients:</strong> ${item.ingredients}`
                : '';

            const itemPrice = document.createElement('p');
            itemPrice.className = 'item-price';
            itemPrice.textContent = item.price;
            itemPrice.style.color = item.accent;

            itemDetails.append(itemName, itemDescription, itemIngredients, itemPrice);
            menuItem.append(itemImage, itemDetails);
            itemsContainer.appendChild(menuItem);
        });

        categoryElement.appendChild(itemsContainer);
        categoriesContainer.appendChild(categoryElement);
    });

    menuSection.appendChild(categoriesContainer);
    content.appendChild(menuSection);

    initMenuAnimations();
}

function initMenuAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                if (entry.target.classList.contains('menu-category')) {
                    entry.target.querySelector('.category-title').classList.add('animate-line');
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.menu-item, .menu-category').forEach(element => {
        observer.observe(element);
    });

    const menuTitle = document.querySelector('.menu-title');
    if (menuTitle) {
        setTimeout(() => {
            menuTitle.classList.add('animate-line');
        }, 300);
    }
}