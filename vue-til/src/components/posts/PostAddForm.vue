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
                </div>
                <button type="submit" class="btn">Create</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            contents: '',
        };
    },
    methods: {
        submitForm() {
            console.log('1');
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
