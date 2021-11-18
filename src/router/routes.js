const routes = [
    {
      path: '/',
      component: () => import('layouts/MainLayout.vue'),
      children: [
        { path: '', component: () => import('pages/Index.vue') },
        {
          path: '/FranksSurprise',
          name: 'FranksSurprise',
          component: () => import('src/views/FranksSurprise.vue')
        },
        {
          path: '/PiasSurprise',
          name: 'PiasSurprise',
          component: () => import('src/views/PiasSurprise.vue')
        },
        {
          path: '/UllasSurprise',
          name: 'UllasSurprise',
          component: () => import('src/views/UllasSurprise.vue')
        },
      ]
      
    },
  
    // Always leave this as last one,
    // but you can also remove it
    {
      path: '/:catchAll(.*)*',
      component: () => import('pages/Error404.vue')
    }
  ]
  
  export default routes
  