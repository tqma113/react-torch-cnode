export default [
  {
    path: '/',
    page: () => import('./home')
  },
  {
    path: '/about',
    page: () => import('./about')
  }
]