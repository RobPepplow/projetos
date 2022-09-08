import { createRouter, createWebHistory } from "vue-router";


function Pages(view) {
  return () => import(`../pages/${view}.vue`);
}

function PagesLogin(view) {
  return () => import(`../pages/login/${view}.vue`);
}

function PagesEscritorio(view) {
  return () => import(`../pages/escritorio/${view}.vue`);
}
//const auth = getAuth()
const routes = [
  {
    path: "/",
    component: Pages("HomePage"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        exact: true,
        component: Pages("DashboardPage"),
        meta: { requiresAuth: true },
      },
      {
        path: "/dispatcher",
        name: "dispatcher",
        exact: true,
        component: Pages("DispatcherPage"),
        meta: { requiresAuth: true },
      },
      //******ESCRITORIO
      {
        path: "/escritorio",
        name: "escritorio",
        exact: true,
        component: PagesEscritorio("EscritorioPage"),
        meta: { requiresAuth: true },
      },
      {
        path: "/escritorio/contabilidade",
        name: "contabilidade",
        exact: true,
        component: PagesEscritorio("ContabilidadePage"),
        meta: { requiresAuth: true },
      },
      {
        path: "/contabilidadelistar",
        name: "contabilidadelistar",
        exact: true,
        component: PagesEscritorio("ContabilidadeListar"),
        meta: { requiresAuth: true },
      },
      {
        path: "/escritorio/empresas",
        name: "empresas",
        exact: true,
        component: PagesEscritorio("EmpresasPage"),
        meta: { requiresAuth: true },
      },
      {
        path: "/escritorio/departamentos",
        name: "departamentos",
        exact: true,
        component: PagesEscritorio("DepartamentosPage"),
        meta: { requiresAuth: true },
      },
      {
        path: "/escritorio/permissoes",
        name: "permissoes",
        exact: true,
        component: PagesEscritorio("PermissoesPage"),
        meta: { requiresAuth: true },
      },
      {
        path: "/escritorio/usuarios",
        name: "usuarios",
        exact: true,
        component: PagesEscritorio("UsuariosPage"),
        meta: { requiresAuth: true },
      },
    ],
  },
  //Área Aberta

  {
    path: "/esqueceusenha",
    name: "esqueceusenha",
    exact: true,
    component: PagesLogin("EsqueceuSenhaPage"),
  },
  {
    path: "/login",
    component: PagesLogin("LoginPage"),
  },
  {
    path: "/register",
    component: PagesLogin("RegisterPage"),
  },

  //TESTE
  {
    path: "/menssagem",
    name: "menssagem",
    exact: true,
    component: Pages("MenssagemPage"),
    meta: { requiresAuth: true },
  },

 
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    exact: true,
    component: Pages("NotFoundPage"),
    meta: { requiresAuth: true },
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    else return { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  
  const requireAuth = to.matched.some((record) => record.meta.requiresAuth);
  const userLogged = localStorage.getItem("user");
  console.log("beforeEach", to.path + " - Auth: " + userLogged);
  console.log("beforeEach", requireAuth);

  if (requireAuth && !userLogged) {
    return next("/login");
  }

  next();
});

export default router;
