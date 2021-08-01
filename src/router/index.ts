import { createRouter,createWebHistory,RouteRecordRaw, useRouter, useRoute  } from "vue-router";

const routes:any = [
  {
    path: '/test',
    name: 'test',
    component: () => import('../components/Header/index.vue'),
    meta: {
        matchNav: 'MobileGameCenter'
    }
  } 
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
export { useRouter, useRoute };