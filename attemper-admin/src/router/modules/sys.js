/** When your routing system is too long, you can split it into small modules**/

import Layout from '@/layout'

const sysRouter = {
  name: 'sys',
  path: '/sys',
  component: Layout,
  redirect: '/sys/index',
  alwaysShow: true, // will always show the root menu
  meta: {
    title: 'sys',
    icon: 'system'
  },
  children: [{
    path: 'tenant',
    component: () => import('@/views/sys/tenant'),
    name: 'tenant',
    meta: {
      title: 'tenant',
      icon: 'tenant',
      noCache: false,
      buttons: ['add', 'update', 'remove']
    }
  },
  {
    path: 'role',
    component: () => import('@/views/sys/role'),
    name: 'role',
    meta: {
      title: 'role',
      icon: 'role',
      noCache: false
    }
  }
  ]
}
export default sysRouter
