<template>
    <div>
        <div class="main list-container contents">
            <h1 class="page-header">Today I Learned</h1>
            <ul>
                <PostListItem
                    v-for="postItem in postItems"
                    v-bind:key="postItem._id"
                    :postItem="postItem"
                ></PostListItem>
            </ul>
        </div>
    </div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import { fetchPosts } from '@/api/index';
export default {
    data() {
        return {
            postItems: [],
        };
    },
    components: {
        PostListItem,
    },
    methods: {
        async fetchData() {
            const { data } = await fetchPosts();
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
