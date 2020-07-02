export default [
  {
    path: '/',
    page: () => import('./pages/home')
  },
  {
    path: '/about',
    page: () => import('./pages/about')
  }
]