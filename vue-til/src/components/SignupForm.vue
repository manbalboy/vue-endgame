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
        <div>
            <label for="nickname">NICKNAME : </label>
            <input id="nickname" type="text" v-model="nickname" />
        </div>
        <button type="submit">회원가입</button>
        <p>{{ logMessage }}</p>
    </form>
</template>

<script>
import { registerUser } from '@/api/index.js';

export default {
    data() {
        return {
            username: '',
            password: '',
            nickname: '',
            logMessage: '',
        };
    },
    methods: {
        async submitForm() {
            console.log('str >>>>> ', '폼제출');

            const userData = {
                username: this.username,
                password: this.password,
                nickname: this.nickname,
            };
            const { data } = await registerUser(userData);
            console.log('data >>>>> ', data);

            this.logMessage = `${data.username} 님이 가입되었습니다.`;
            this.initForm();
        },
        initForm() {
            this.username = '';
            this.password = '';
            this.nickname = '';
        },
    },
};
</script>

<style></style>
