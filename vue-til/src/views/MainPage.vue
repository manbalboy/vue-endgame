<template>
    <div>
        <div class="main list-container contents">
            <h1 class="page-header">Today I Learned</h1>
            <LoadingSpinner v-if="isLoading"></LoadingSpinner>
            <ul v-else>
                <PostListItem
                    v-for="postItem in postItems"
                    v-bind:key="postItem._id"
                    :postItem="postItem"
                ></PostListItem>
            </ul>
        </div>
        <router-link :to="baseUrl + '/add'" class="create-button">
            <i class="ion-md-add"></i>
        </router-link>
    </div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import PostListItem from '@/components/posts/PostListItem.vue';
import { fetchPosts } from '@/api/posts';
export default {
    data() {
        return {
            postItems: [],
            isLoading: false,
            baseUrl: process.env.VUE_APP_BASE_URL,
        };
    },
    components: {
        PostListItem,
        LoadingSpinner,
    },
    methods: {
        async fetchData() {
            this.isLoading = true;
            const { data } = await fetchPosts();
            this.isLoading = false;
            console.log('response >>>>> ', data);
            this.postItems = data.posts;
        },
    },
    created() {
        this.fetchData();
    },
};
</script>

<style></style>
