import { createBrowserRouter } from 'react-router';
import LazyComponent from '@/components/LazyComponent'; 
const getResolvePath = (path) => `pages/${path}`;

const router = createBrowserRouter([
  {
    path: '/',
    Component: LazyComponent(getResolvePath('views/Home')),
  },
  {
    path: '/about',
    Component: LazyComponent(getResolvePath('views/About')),
  },
]);

export default router;
