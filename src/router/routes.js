import authService from "../services/AuthService"

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '', 
        component: () => import('src/pages/Dashboard.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/Dashboard2', 
        component: () => import('src/pages/Dashboard2.vue'),
        meta: {
          requiresAuth: false
        }
      },
      {
        path: '/Profile', 
        component: () => import('pages/UserProfile.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/Map', 
        component: () => import('pages/Map.vue')
      },
      {
        path: '/MapMarker', 
        component: () => import('pages/MapMarker.vue')
      },
      {
        path: '/TreeTable', 
        component: () => import('pages/TreeTable.vue')
      },
      {path: '/StreetView', component: () => import('pages/StreetView.vue')},
      {path: '/Cards', component: () => import('pages/Cards.vue')},
      {path: '/Tables', component: () => import('pages/Tables.vue')},
      {path: '/Contact', component: () => import('pages/Contact.vue')},
      {path: '/Checkout', component: () => import('pages/Checkout.vue')},
      {path: '/Ecommerce', component: () => import('pages/ProductCatalogues.vue')},
      {path: '/Pagination', component: () => import('pages/Pagination.vue')},
      {path: '/Charts', component: () => import('pages/Charts.vue')},
      {path: '/Calendar', component: () => import('pages/Calendar.vue')},
      {path: '/TaskBoard', component: () => import('pages/TaskBoard.vue')},
      {path: '/Directory', component: () => import('pages/Directory.vue')},
      {path: '/Footer', component: () => import('pages/Footer.vue')},
      {path: '/CardHeader', component: () => import('pages/CardHeader.vue')},
      

      // Not completed yet
      // {path: '/Taskboard', component: () => import('pages/TaskBoard.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/Mail',
    component: () => import('layouts/Mail.vue')
  },
  {
    path: '/Maintenance',
    component: () => import('pages/Maintenance.vue')
  },
  {
    path: '/Pricing',
    component: () => import('pages/Pricing.vue')
  },
  {
    path: '/Login',
    component: () => import('src/pages/Login.vue'),
    beforeEnter (_, __, next) { // Impede usuários assinados de
      if (!authService.isSignedIn()) {      // acessar a página de login.
        next();
        return;
      }
      next('/')
    }
  },
  {
    path: '/Lock-2',
    component: () => import('src/pages/LockScreen2.vue')
  },
  {
    path: '/Lock',
    component: () => import('src/pages/LockScreen.vue')
  }
]

export default routes
