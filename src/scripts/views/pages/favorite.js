import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <main tabindex="0" id="mainContent" class="main-resto_container">
        <section class="content">
            <h2 tabindex="0" class="explore-restaurant__label">
              Favorite
            </h2>
            <h2 class="restaurant-item__not__found"></h2>
            <div id="main-resto_list" class="list-resto"></div>
        </section>
      </main>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.getElementById('main-resto_list');
    const empty = document.querySelector('.restaurant-item__not__found');
    if (restaurants.length === 0) {
      empty.innerHTML = `
      <h3>Tidak ada favorite restaurant yang ditampilkan</h3>
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    const skipLinkElem = document.querySelector('.skip2content');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      const mainContentElem = document.querySelector('#mainContent');
      if (mainContentElem) {
        setTimeout(() => {
          mainContentElem.focus();
        }, 10);
      }
    });
  },
};

export default Favorite;
