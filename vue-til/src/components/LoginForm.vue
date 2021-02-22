<template>
    <form @submit.prevent="submitForm">
        <div>
            <label for="username">ID : </label>
            <input id="username" type="text" v-model="username" />
        </div>
        <div>
            <label for="password">PW : </label>
            <input id="password" type="text" v-model="password" />
        </div>
        <button type="submit">로그인</button>
        <p>{{ logMessage }}</p>
    </form>
</template>

<script>
import { loginUser } from '@/api/index.js';
export default {
    data() {
        return {
            password: '',
            username: '',
            logMessage: '',
        };
    },
    methods: {
        async submitForm() {
            const userData = {
                password: this.password,
                username: this.username,
            };
            const { data } = await loginUser(userData);
            console.log(data);

            this.logMessage = `${data.user.username} 님 환영합니다.`;
            this.initForm();
        },
        initForm() {
            this.username = '';
            this.password = '';
        },
    },
};
</script>

<style></style>
