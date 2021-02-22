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
        <button type="submit">LOGIN</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            nickname: '',
        };
    },
    methods: {
        submitForm() {
            console.log('str >>>>> ', '폼제출');
        },
    },
};
</script>

<style></style>
