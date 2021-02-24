import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: `${process.env.VUE_APP_BASE_URL}/`,
            redirect: `${process.env.VUE_APP_BASE_URL}/login`,
        },
        {
            path: `${process.env.VUE_APP_BASE_URL}/login`,
            // 코드 스플릿팅
            component: () => import('@/views/LoginPage.vue'),
        },
        {
            path: `${process.env.VUE_APP_BASE_URL}/signup`,
            component: () => import('@/views/SignupPage.vue'),
        },
        {
            path: `${process.env.VUE_APP_BASE_URL}/main`,
            component: () => import('@/views/MainPage.vue'),
            meta: {
                auth: true,
            },
        },
        {
            path: `${process.env.VUE_APP_BASE_URL}/add`,
            component: () => import('@/views/PostAddPage.vue'),
            meta: {
                auth: true,
            },
        },
        {
            path: `${process.env.VUE_APP_BASE_URL}/post/:id`,
            component: () => import('@/views/PostEditPage.vue'),
            meta: {
                auth: true,
            },
        },
        {
            // 등록되지 않은 페이지 등록
            path: `*`,
            component: () => import('@/views/NotFoundPage.vue'),
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (to.meta.auth && !store.getters.isLogin) {
        next(`${process.env.VUE_APP_BASE_URL}/login`);
        return;
    }
    next();
});
export default router;
