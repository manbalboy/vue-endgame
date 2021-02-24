import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
    test('ID 는 이메일 형식이어야 한다.', () => {
        const wrapper = shallowMount(LoginForm, {
            data() {
                return {
                    username: 'data 속성',
                };
            },
        });

        //find 는 템플릿 안에 있는 html 요소를 찾아갈수있음
        const usernameInput = wrapper.find('#username');
        console.log('usernameInput >>>>> ', usernameInput.html());
        console.log('usernameInput >>>>> ', usernameInput.element.value);
        console.log('usernameInput >>>>> ', usernameInput.element);
        console.log(usernameInput);
    });
});
