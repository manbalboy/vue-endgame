<template>
    <header>
        <div>
            <router-link :to="logLink" class="logo">
                TIL
                <span v-if="isUserLogin">by {{ getUsername }}</span>
            </router-link>
        </div>
        <div class="navigations">
            <template v-if="isUserLogin">
                <a
                    href="javascript:;"
                    @click="logoutUser"
                    class="logout-button"
                >
                    Logout
                </a>
            </template>

            <template v-else>
                <router-link :to="loginUrl">로그인</router-link>
                <router-link :to="signupUrl">회원가입</router-link>
            </template>
        </div>
    </header>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';
export default {
    data() {
        return {
            baseUrl: process.env.VUE_APP_BASE_URL,
        };
    },
    computed: {
        logLink() {
            return this.$store.getters.isLogin
                ? `${this.baseUrl}/main`
                : `${this.baseUrl}/login`;
        },
        loginUrl() {
            return this.baseUrl + '/login';
        },

        signupUrl() {
            return this.baseUrl + '/signup';
        },
        isUserLogin() {
            return this.$store.getters.isLogin;
        },
        getUsername() {
            return this.$store.state.username;
        },
    },
    methods: {
        logoutUser() {
            this.$store.commit('clearUsername');
            this.$store.commit('clearToke');
            deleteCookie('til_auth');
            deleteCookie('til_user');
            this.$router.push(`${process.env.VUE_APP_BASE_URL}/login`);
        },
    },
};
</script>

<style scoped>
.username {
    color: white;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #927dfc;
    z-index: 2;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
    color: #dedede;
    font-size: 18px;
}
a.logo {
    font-size: 30px;
    font-weight: 900;
    color: white;
}
.logo > span {
    font-size: 14px;
    font-weight: normal;
}
.navigations a {
    margin-left: 10px;
}
.fixed {
    position: fixed;
    top: 0;
    width: 100%;
}
.logout-button {
    font-size: 14px;
}
a.router-link-exact-active {
    color: white;
    font-weight: bold;
}
</style>
