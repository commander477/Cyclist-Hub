import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LogIn from '../views/LogIn.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/log-in'
  },
  // {
  //   path: '/sign-up',
  //   name: 'SignUp',
  //   component: SignUp
  // },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  // {
  //   path: '/profile-page',
  //   name: 'ProfilePage',
  //   component: ProfilePage
  // },
  // {
  //   path: '/profile-setting',
  //   name: 'ProfileSetting',
  //   component: ProfileSetting
  // },
  // {
  //   path: '/set-information',
  //   name: 'SetInformation',
  //   component: SetInformation
  // },
  // {
  //   path: '/change-profile-pic',
  //   name: 'ChangeProfilePic',
  //   component: ChangeProfilePic
  // },
  // {
  //   path: '/addresses',
  //   name: 'Addresses',
  //   component: Addresses
  // },
  // {
  //   path: '/cyclist-list',
  //   name: 'CyclistList',
  //   component: CyclistList
  // },
  // {
  //   path: '/gear-settings',
  //   name: 'GearSettings',
  //   component: GearSettings
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
