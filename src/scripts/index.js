import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import DATA from '../DATA.json';

const hamburger = document.querySelector('#menu');
const main = document.querySelector('main');
const drawer = document.querySelector('#navmenu');
const hero = document.querySelector('#hero');
const nav = document.getElementById('navcontainer');

hamburger.addEventListener('click', (event) => {
  if (drawer.style.maxHeight) {
    drawer.style.maxHeight = null;
  } else {
    drawer.style.maxHeight = `${drawer.scrollHeight}px`;
  }
  event.stopPropagation();
});

main.addEventListener('click', (event) => {
  drawer.style.maxHeight = null;
  event.stopPropagation();
});

nav.addEventListener('click', (event) => {
  drawer.style.maxHeight = null;
  event.stopPropagation();
});

hero.addEventListener('click', (event) => {
  drawer.style.maxHeight = null;
  event.stopPropagation();
});

const getExploreRestaurant = (data) => {
  data.restaurants.forEach((restaurant) => {
    const restaurantItem = document.getElementById('main-resto_list');
    restaurantItem.innerHTML += `
        
        <article tabindex="0" class="resto-item">
            <a href="#">
                <div class="resto-item_content">
                    <img class="resto-item_image" src="${restaurant.pictureId}" alt="Gambar ${restaurant.name}" tabindex="0"/>
                    <p tabindex="0" class="resto-item_city" alt="kota restoran">${restaurant.city}<span class="resto-item_rating" 
                        aria-label="rating resto ${restaurant.rating}">&star; ${restaurant.rating}</span>
                    </p>
                    <p tabindex="0" class="resto-item_name" alt="nama restoran">${restaurant.name}</p>
                    <p tabindex="0" class="resto-item_desc" alt="deskripsi restoran">${restaurant.description}</p>
                </div>
            </a>
        </article>
        `;
  });
};

getExploreRestaurant(DATA);
