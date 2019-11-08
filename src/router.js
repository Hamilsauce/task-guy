import Vue from 'vue';
import Router from 'vue-router';
import Tasks from './components/Tasks.vue';
import Tasks2 from './components/Tasks2.vue';
import About from './components/About.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'tasks',
            component: Tasks,
            props: true
        },
        {
            path: '/tasks2',
            name: 'tasks2',
            component: Tasks2,
            props: true
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})
