import loadable from 'loadable-components'; // 路由懒加载

const Home = loadable(() => import('../pages/home'));
const Login = loadable(() => import('../pages/login'));
const NotFound = loadable(() => import('../pages/notFound'));

const ProductList = loadable(() => import('../pages/products/List'));
const ProductEdit = loadable(() => import('../pages/products/Edit'));
const Notice = loadable(() => import('../pages/notice'));

export const mainRoutes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/404',
    component: NotFound,
  },
];

export const adminRoutes = [
  {
    path: '/admin/home',
    component: Home,
    exact: true,
    isShow: true,
    title: '首页',
  },
  {
    path: '/admin/products',
    component: ProductList,
    exact: true,
    isShow: true,
    title: '产品列表',
  },
  {
    path: '/admin/products/edit/:id?',
    component: ProductEdit,
    exact: true,
  },
  {
    path: '/admin/notice',
    component: Notice,
    exact: true,
  },
];
