
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/index.vue') },
      { path: 'posts', component: () => import('pages/posts/posts.vue') },
      { path: 'artigo/:id', component: () => import('pages/Artigo.vue') },
      { path: 'notas', component: () => import('pages/notas/Notas.vue') },
      { path: 'notificacoes', component: () => import('pages/notificacoes/Notificacoes.vue') },
      { path: 'detalhes/:id', component: () => import('pages/notificacoes/DetalhesNotificacoes.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
