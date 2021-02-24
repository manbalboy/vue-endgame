<template>
    <div class="contents">
        <h1 class="page-header">Edit Post</h1>
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
                <button
                    type="submit"
                    class="btn"
                    :class="isButtonDisabled"
                    :disabled="isButtonDisabled"
                >
                    Edit
                </button>
            </form>
            <p class="log">
                {{ logMessage }}
            </p>
        </div>
    </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';
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
        isButtonDisabled() {
            return !this.title || !this.contents || this.isContentsValid()
                ? 'disabled'
                : null;
        },
    },
    methods: {
        async submitForm() {
            const id = this.$route.params.id;

            try {
                const response = await editPost(id, {
                    title: this.title,
                    contents: this.contents,
                });
                bus.$emit('show:toast', `${response.data.title} was editted`);
                this.$router.push(`${process.env.VUE_APP_BASE_URL}/main`);
            } catch (error) {
                this.logMessage = error;
            }
        },
    },
    async created() {
        const id = this.$route.params.id;
        try {
            const response = await fetchPost(id);
            this.title = response.data.title;
            this.contents = response.data.contents;
        } catch (error) {
            this.logMessage = error;
        }
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
