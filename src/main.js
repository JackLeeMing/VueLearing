import Vue from 'vue'
import router from './router'
import store from './store'
import { directive as clickOutside } from 'v-click-outside-x'
import App from './App'
import Test from './Test2'
import Antd from 'ant-design-vue'
import iView from 'iview';
import i18n from '@/locale'
import config from '@/config'
import importDirective from '@/directive'
import installPlugin from '@/plugin'
import TreeTable from 'tree-table-vue'
import VOrgTree from 'v-org-tree'

import './index.less'
import '@/assets/icons/iconfont.css'
import 'v-org-tree/dist/v-org-tree.css'
import 'ant-design-vue/dist/antd.css'
import 'iview/dist/styles/iview.css';

// 实际打包时应该不引入mock
/* eslint-disable */
if (process.env.NODE_ENV !== 'production') require('@/mock')

Vue.config.productionTip = false
/**
 * @description 注册admin内置插件
 */
installPlugin(Vue)

Vue.use(Antd)
Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(TreeTable)
Vue.use(VOrgTree)

Vue.prototype.$config = config

/**
 * 注册指令
 */
importDirective(Vue)
Vue.directive('clickOutside', clickOutside)

let vue = new Vue({
  router,
  store,
  i18n,
  render: h => h(Test),
});
vue.$mount('#app');
