import VueCookies from 'vue-cookies';
import store from '@/store/index';
import router from '@/routes/index';
import Vue from 'vue';
export function setInterceptors(instance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    async function (config) {
      config.timeout = 10000;
      config.headers['Authorization'] = `Bearer ${VueCookies.get(
        'accessToken',
      )}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    async function (error) {
      try {
        //에러에 대한 response 정보
        const errorAPI = error.response.config; //요청했던 request 정보가 담겨있음
        //인증에러 및 재요청이 아닐 경우... (+재요청인데 refreshToken이 있을 경우)
        if (
          error.response.status == 401 &&
          VueCookies.get('refreshToken') != null
        ) {
          await store.dispatch('REFRESH_TOKEN'); //로그인 중간 저장소에 있는 토큰 재발급 action을 실행
          return await instance(errorAPI); //다시 axios 요청
        } else {
          Vue.swal('Please Login');
          return router.push({ path: '/login' });
        }
      } catch (err) {
        console.error('[axios.interceptors.response] error : ', err.message);
      }
      return Promise.reject(error);
    },
  );
  return instance;
}
