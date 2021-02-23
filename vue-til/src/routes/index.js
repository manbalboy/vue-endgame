import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
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
        },
        {
            path: `${process.env.VUE_APP_BASE_URL}/add`,
            component: () => import('@/views/PostAddPage.vue'),
        },
        {
            path: `${process.env.VUE_APP_BASE_URL}/post/:id`,
            component: () => import('@/views/PostEditPage.vue'),
        },
        {
            // 등록되지 않은 페이지 등록
            path: `*`,
            component: () => import('@/views/NotFoundPage.vue'),
        },
    ],
});
