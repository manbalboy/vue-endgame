<template>
    <li>
        <div class="post-title">
            {{ postItem.title }}
        </div>
        <div class="post-contents">
            {{ postItem.contents }}
        </div>
        <div class="post-time">
            {{ postItem.createdAt }}
            <i class="icon ion-md-create"></i>
            <i class="icon ion-md-trash" @click="deleteItem"></i>
        </div>
    </li>
</template>

<script>
import { deletePosts } from '@/api/posts';
export default {
    props: {
        postItem: {
            type: Object,
            required: true,
        },
    },
    methods: {
        async deleteItem() {
            try {
                if (confirm('삭제하시겠습니까?')) {
                    await deletePosts(this.postItem._id);
                    this.$emit('refresh');
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style></style>
