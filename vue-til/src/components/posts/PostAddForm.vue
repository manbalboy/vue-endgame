<template>
    <div class="contents">
        <h1 class="page-header">Create Post</h1>
        <div class="form-wrapper">
            <form class="form" @submit.prevent="submitForm">
                <div>
                    <label for="title">Title : </label>
                    <input id="title" type="text" v-model="title" />
                </div>
                <div>
                    <label for="contents">Contents : </label>
                    <textarea
                        id="contents"
                        type="text"
                        rows="5"
                        v-model="contents"
                    />
                    <p v-if="!isContentsValid" class="validation-text warning">
                        Contents must be less than 200
                    </p>
                </div>
                <button type="submit" class="btn">Create</button>
            </form>
            <p class="log">
                {{ logMessage }}
            </p>
        </div>
    </div>
</template>

<script>
import { createPosts } from '@/api/posts';

import bus from '@/utils/bus.js';
export default {
    data() {
        return {
            title: '',
            contents: '',
            logMessage: '',
        };
    },
    computed: {
        isContentsValid() {
            return this.contents.length < 200;
        },
    },
    methods: {
        async submitForm() {
            try {
                const response = await createPosts({
                    title: this.title,
                    contents: this.contents,
                });
                bus.$emit(
                    'show:toast',
                    `${response.data.data.title} was created`,
                );
                this.$router.push(`${process.env.VUE_APP_BASE_URL}/main`);
            } catch (error) {
                this.logMessage = error.response.data.message;
            }
        },
    },
};
</script>

<style scoped>
.form-wrapper .form {
    width: 100%;
}
.btn {
    color: white;
}
</style>
