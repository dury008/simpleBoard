import VueRouter from 'vue-router';
import Vue from 'vue';
import store from '@/store/index';
import VueCookies from 'vue-cookies';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
    },
    {
      path: '/faq',
      component: () => import('@/views/FAQPage.vue'),
    },
    {
      path: '/inquiry',
      component: () => import('@/views/InquiryPage.vue'),
    },
    {
      path: '/notice',
      component: () => import('@/views/NoticePage.vue'),
    },
    {
      path: '/detail/:id',
      component: () => import('@/views/BoardDetailPage.vue'),
    },
    {
      path: '/edit/:id',
      component: () => import('@/views/BoardEditPage.vue'),
    },
    {
      path: '/create',
      component: () => import('@/views/BoardCreatePage.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  console.log(to);
  if (to.path !== '/login' && to.path !== '/signup') {
    if (
      VueCookies.get('accessToken') === null &&
      VueCookies.get('refreshToken') !== null
    ) {
      //refreshToken은 있고 accessToken이 없을 경우 토큰 재발급 요청
      await store.dispatch('REFRESH_TOKEN');
    }
    if (
      VueCookies.get('accessToken') === null &&
      VueCookies.get('refreshToken') === null
    ) {
      //2개 토큰이 모두 없을 경우 로그인페이지로
      Vue.swal('로그인 하세요');
      return next('/login');
    }
    return next();
  } else {
    if (VueCookies.get('refreshToken') !== null) return next('/main'); //로그인페이지갔을떄 refresh토큰이 잇는경우
  }

  return next();
});

export default router;
