<template>
    <div class="container">
        <button v-if="action === 'create'" type="button" class="btn btn-secondary btn-block mb-2" @click="back">
            Назад
        </button>
        <form @submit.prevent="storeItem(item, action)">
            <div class="form-group">
                <label for="name">Имя</label>
                <input v-model="item.name" type="text" class="form-control mb-2" id="name" placeholder="Введите имя"
                    required>
            </div>

            <div v-if="item.hasOwnProperty('value')" class="form-group">
                <label for="value">Значение</label>
                <input v-model="item.value" type="text" class="form-control mb-2" id="value" placeholder="Введите значение"
                    required>
            </div>

            <FormFields :fields="fields" :item="item"></FormFields>

            <div class="d-flex justify-content-between">
                <div class="col-4">
                    <button type="submit" class="btn btn-primary btn-block">
                        {{ btnTitle }}
                        <span v-if="this.store.preloader" class="spinner-border spinner-border-sm" role="status"
                            aria-hidden="true"></span>
                    </button>
                </div>
                <div class="col-0">
                    <button v-if="action === 'update'" type="button" class="btn btn-danger btn-block"
                        @click="deleteItem(item)">
                        Удалить
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { loadStore } from "../store/store";
import AuthMixin from "../mixins/AuthMixin"
import DataMixin from "../mixins/DataMixin";
import NotificationMixin from "../mixins/NotificationMixin";
import SettingsMixin from "../mixins/SettingsMixin";
import FormFields from "./FormFields.vue";

export default {
    props: ['action', 'id'],
    mixins: [AuthMixin, DataMixin, NotificationMixin, SettingsMixin],
    components: { FormFields },
    data() {
        return {
            fields: [],
        }
    },
    computed: {
        item() {
            if (this.action === 'create') {
                const newItem = {
                    name: '',
                    type: this.instance,
                    meta: {},
                }

                if (this.instance === 'options') {
                    return { ...newItem, value: '' };
                }

                return newItem;
            }

            if (this.action === 'update') {
                return {
                    ...this.store[this.instance][this.id],
                    type: this.instance,
                }
            }

            return null;
        },
        instance() {
            return this.$route.meta.instance
        },
        btnTitle() {
            return this.action === 'update' ? 'Сохранить' : 'Добавить'
        }
    },
    methods: {
        back() {
            this.$router.push('/' + this.$route.meta.instance);
        }
    },
    setup() {
        return loadStore();
    },
    mounted() {
        this.checkAuth();
        this.setSettings();
        this.setValues();
    },
}
</script>
<style>
.btn-secondary {
    margin-right: 5px;
}</style>