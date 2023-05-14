import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from './components/LoginForm.vue'
import Items from "./components/Items.vue";
import Item from "./components/Item.vue";
import StoreForm from "./components/StoreForm.vue";
import { data } from "./data/data";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: LoginForm, alias: '/' },

        { path: '/options', component: Items, meta: data.options },
        { path: '/options/:id', component: Item, props: true, meta: data.options },
        { path: '/options/create', component: StoreForm, props: { action: 'create', id: null }, meta: data.options },

        { path: '/messages', component: Items, meta: data.messages },
        { path: '/messages/:id', component: Item, props: true, meta: data.messages },
        { path: '/messages/create', component: StoreForm, props: { action: 'create', id: null }, meta: data.messages },

        { path: '/tasks', component: Items, meta: data.tasks },
        { path: '/tasks/:id', component: Item, props: true, meta: data.tasks },
        { path: '/tasks/create', component: StoreForm, props: { action: 'create', id: null }, meta: data.tasks },

        { path: '/books', component: Items, meta: data.books },
        { path: '/books/:id', component: Item, props: true, meta: data.books },
        { path: '/books/create', component: StoreForm, props: { action: 'create', id: null }, meta: data.books },

        { path: '/articles', component: Items, meta: data.articles },
        { path: '/articles/:id', component: Item, props: true, meta: data.articles },
        { path: '/articles/create', component: StoreForm, props: { action: 'create', id: null }, meta: data.articles },
    ]
})