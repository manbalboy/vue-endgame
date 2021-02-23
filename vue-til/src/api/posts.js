import { posts } from './index';
//학습노트 조작과관련된 CRUD API 함수 파일

// 학습노트 목록 데이터를 조회하는 API
function fetchPosts() {
    return posts.get('/');
}

//특정 학습 노트를 조회하는 API
function fetchPost(postId) {
    return posts.get(postId);
}

// 학습노트를 생성하는 API
function createPosts(postData) {
    return posts.post('/', postData);
}

// 학습노트를 삭제하는 API
function deletePosts(postId) {
    return posts.delete(postId);
}

// 학습노트를 수정하는 API
function editPost(postId, postData) {
    return posts.put(postId, postData);
}

export { fetchPosts, fetchPost, createPosts, deletePosts, editPost };
