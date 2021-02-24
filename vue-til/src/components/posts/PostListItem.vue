<template>
    <li>
        <div class="post-title">
            {{ postItem.title }}
        </div>
        <div class="post-contents">
            {{ postItem.contents }}
        </div>
        <div class="post-time">
            {{ postItem.createdAt | formatDate }}
            <i class="icon ion-md-create" @click="routeEditPage"></i>
            <i class="icon ion-md-trash" @click="deleteItem"></i>
        </div>
    </li>
</template>

<script>
import { deletePosts } from '@/api/posts';
import bus from '@/utils/bus.js';
export default {
    props: {
        postItem: {
            type: Object,
            required: true,
        },
    },
    // filters: {
    //     formatData(value) {
    //         return new Date(value);
    //     },
    // },
    methods: {
        async deleteItem() {
            try {
                if (confirm('삭제하시겠습니까?')) {
                    const response = await deletePosts(this.postItem._id);
                    this.$emit('refresh');
                    bus.$emit(
                        'show:toast',
                        `${response.data.title} was deleted`,
                    );
                }
            } catch (error) {
                console.log(error);
            }
        },

        routeEditPage() {
            this.$router.push(
                `${process.env.VUE_APP_BASE_URL}/post/${this.postItem._id}`,
            );
        },
    },
};
</script>

<style></style>
