import Vue from 'vue';
import Router from 'vue-router';
import Tasks from './components/Tasks.vue';
import About from './components/About.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'tasks',
            component: Tasks
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})
