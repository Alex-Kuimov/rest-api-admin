<template>
    <div class="container">
        <button v-if="action==='create'" type="button" class="btn btn-secondary btn-block mb-2" @click="back">
          Назад
        </button>
        <form @submit.prevent="storeItem(item, action)">
            <div class="form-group">
                <label for="name">Имя</label>
                <input v-model="item.name" type="text" class="form-control mb-2" id="name" placeholder="Введите имя" required>
            </div>

            <div v-if="item.hasOwnProperty('value')" class="form-group">
                <label for="value">Значение</label>
                <input v-model="item.value" type="text" class="form-control mb-2" id="value" placeholder="Введите значение" required>
            </div>

            <FormFields :fields="fields" :item="item"></FormFields>

            <div class="d-flex justify-content-between">
                <div class="col-4">
                    <button type="submit" class="btn btn-primary btn-block">
                        {{ btnTitle }}
                    </button>
                </div>
                <div class="col-0">
                    <button v-if="action==='update'" type="button" class="btn btn-danger btn-block" @click="deleteItem(item)">
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
import FormFields from "./FormFields.vue";

export default {
    props:['action', 'id'],
    mixins:[AuthMixin, DataMixin, NotificationMixin],
    components: {FormFields},
    data(){
        return {
            fields: [],
        }
    },
    computed: {
        item() {
            const instance = this.$route.meta.instance;

            if(this.action === 'create') {
                const newItem = {
                    name: '',
                    type: instance,
                    meta: {},
                }

                if(instance === 'options'){
                    return {...newItem, value: ''};
                }

                return newItem;
            }

            if(this.action === 'update') {
                return {
                    ...this.store[instance][this.id],
                    type: instance,
                }
            }

            return null;
        },
        btnTitle(){
            return this.action === 'update' ? 'Сохранить' : 'Добавить'
        }
    },
    methods: {
        back(){
            this.$router.push('/'+this.$route.meta.instance);
        }
    },
    setup() {
        return loadStore();
    },
    mounted() {
        this.checkAuth();
        this.setValues();
    },
}
</script>
<style>
.btn-secondary{
    margin-right: 5px;
}
</style>