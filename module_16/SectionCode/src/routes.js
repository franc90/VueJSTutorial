import Header from './components/Header.vue'
import Home from './components/Home.vue'

const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'))
    }, 'user')
}
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'))
    }, 'user')
}
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'))
    }, 'user')
}
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'))
    })
}

export const routes = [
    {
        name: 'home',
        path: '',
        components: {
            default: Home,
            'header-top': Header
        }
    },
    {
        path: '/user',
        components: {
            default: User,
            'header-bottom': Header
        },
        children: [
            {
                path: '',
                component: UserStart
            },
            {
                path: ':id',
                component: UserDetail,
                beforeEnter(to, from, next) {
                    console.log('inside route setup')
                    next()
                }
            },
            {
                name: 'userEdit',
                path: ':id/edit',
                component: UserEdit
            }
        ]
    },
    {
        path: '/redirect-me',
        redirect: {
            name: 'home'
        }
    },
    {
        path: '*',
        redirect: {
            name: 'home'
        }
    }
]
