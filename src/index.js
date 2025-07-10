import "./styles.css";
import loadHome from './home';
import {loadMenu} from './menu';
// import loadContact from './contact';

loadHome();

const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const tabName = tab.dataset.tab;
        switch(tabName) {
            case 'home':
                loadHome();
                break;
            case 'menu':
                loadMenu();
                break;
            case 'contact':
                // loadContact();
                break;
        }
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});