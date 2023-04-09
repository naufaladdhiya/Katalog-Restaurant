import RestaurantSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div tabindex="0" class="main">
      <h2 tabindex="0" class="explore-restaurant__label">Detail Restaurant</h2>
      <section id="detail-rest"></section>
    </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#detail-rest');
    // const hero = document.querySelector('#hero');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(
      restaurant.restaurant,
    );
  },
};

export default Detail;
