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
        <button v-bind:disabled="!isUsernameVaild || !password" type="submit">
            로그인
        </button>
        <p>{{ logMessage }}</p>
    </form>
</template>

<script>
import { loginUser } from '@/api/index.js';
import { validateEmail } from '@/utils/validation.js';
export default {
    data() {
        return {
            password: '',
            username: '',
            logMessage: '',
        };
    },
    computed: {
        isUsernameVaild() {
            return validateEmail(this.username);
        },
    },
    methods: {
        async submitForm() {
            try {
                const userData = {
                    password: this.password,
                    username: this.username,
                };
                const { data } = await loginUser(userData);
                console.log(data);

                this.logMessage = `${data.user.username} 님 환영합니다.`;
                this.initForm();
            } catch (error) {
                this.logMessage = 'error 발생하였습니다. 로그인을 확인해주세요';
            }
        },
        initForm() {
            this.username = '';
            this.password = '';
        },
    },
};
</script>

<style></style>
