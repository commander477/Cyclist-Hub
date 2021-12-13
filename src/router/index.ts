import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LogIn from '../views/LogIn.vue'
import ProfilePage from '../views/ProfilePage.vue'
import SignUp from '../views/SignUp.vue'
import SetInformation from '../views/SetInformation.vue'
import GearSettings from '../views/GearSettings.vue'
import ProfileSetting from '../views/ProfileSetting.vue'
import ChangeProfilePic from '../views/ChangeProfilePic.vue'
import ChooseLocation from '../views/ChooseLocation.vue'
import ChooseRoute from '../views/ChooseRoute.vue'
import AddCyclist from '../views/AddCyclist.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/log-in'
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/profile-page',
    name: 'ProfilePage',
    component: ProfilePage
  },
  {
    path: '/profile-setting',
    name: 'ProfileSetting',
    component: ProfileSetting
  },
  {
    path: '/set-information',
    name: 'SetInformation',
    component: SetInformation
  },
  {
    path: '/change-profile-pic',
    name: 'ChangeProfilePic',
    component: ChangeProfilePic
  },
  {
    path: '/choose-location',
    name: 'ChooseLocation',
    component: ChooseLocation
  },
  {
    path: '/choose-route',
    name: 'ChooseRoute',
    component: ChooseRoute
  },
  {
    path: '/gear-settings',
    name: 'GearSettings',
    component: GearSettings
  },
  {
    path: '/add-cyclist',
    name: 'AddCyclist',
    component: AddCyclist
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
