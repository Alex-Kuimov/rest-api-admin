<template>
    <div class="container mt-2">
        <p class="h3">
            {{ title }}
        </p>
        <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-primary btn-block mb-2" @click="toCreateForm">
                + Создать
            </button>
        </div>
        <div v-if="!this.store.preloader" class="preloader">
            <div v-if="items" class="list-group">
                <div v-for="item in items" :key="item.id" class="list-group-item list-group-item-action">
                    <router-link :to="'/' + instance + '/' + item.id">
                        {{ item.name }}
                    </router-link>
                </div>
            </div>
            <div v-else>
                <p>Ничего нет!</p>
            </div>
        </div>
    </div>
</template>

<script>
import DataMixin from '../mixins/DataMixin';
import AuthMixin from "../mixins/AuthMixin"
import SettingsMixin from "../mixins/SettingsMixin";
import { loadStore } from "../store/store";

export default {
    mixins: [DataMixin, AuthMixin, SettingsMixin],
    methods: {
        toCreateForm() {
            this.$router.push('/' + this.instance + '/create');
        }
    },
    computed: {
        instance() {
            return this.$route.meta.instance;
        },
        title() {
            return this.$route.meta.title;
        },
        items() {
            return this.store[this.instance];
        }
    },
    setup() {
        return loadStore();
    },
    mounted() {
        this.checkAuth();
        this.setSettings();

        this.getItems(this.instance).then((items) => {
            this.store[this.instance] = items;
        });
    }
}
</script>