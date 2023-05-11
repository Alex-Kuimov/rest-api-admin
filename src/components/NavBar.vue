<template>
    <nav v-if="store.isAuth" class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between mb-4">
        <div class="container">
            <a class="navbar-brand" href="#">SP API</a>

            <div class="d-flex">
                <ul class="navbar-nav ml-auto">
                    <li v-for="item in items" class="nav-item" @click="goTo(item)">
                        <span class="nav-link">{{ item.title }}</span>
                    </li>
                    <li class="nav-item" @click="logOut">
                        <span class="nav-link">Выход</span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import AuthMixin from "../mixins/AuthMixin"
import DataMixin from '../mixins/DataMixin';
import { loadStore } from "../store/store";
import { data } from "../data/data";

export default {
    mixins:[AuthMixin, DataMixin],
    methods: {
        goTo(item){
            this.$router.push('/'+item.instance);
            this.getItems(item.instance);
        }
    },
    computed:{
        items(){
            const result = [];
            for (let key in data) {
                const item = data[key];
                result.push({
                    title: item.title,
                    instance: item.instance
                });
            }
            return result;
        }
    },
    setup() {
        return loadStore();
    },
}
</script>

<style>
.nav-item {
    cursor: pointer;
}
</style>
