import Restaurant from '../views/pages/restaurant';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Restaurant, // default page
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
