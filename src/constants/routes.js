import HomePage from '../views/HomePage';
import AboutPage from '../views/AboutPage';
import FaqPage from '../views/FaqPage';

const indexRoutes = [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutPage },
    { path: "/faq", component: FaqPage }
];

export default indexRoutes;